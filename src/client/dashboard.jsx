import React, { useState, useEffect, useMemo } from 'react';
import { DashboardService } from './services/DashboardService.js';
import ApplicationsByCriticality from './components/ApplicationsByCriticality.jsx';
import VulnerabilityHeatmap from './components/VulnerabilityHeatmap.jsx';
import RiskControlCoverage from './components/RiskControlCoverage.jsx';
import SecurityIncidentsBySeverity from './components/SecurityIncidentsBySeverity.jsx';
import DrillDownPanel from './components/DrillDownPanel.jsx';
import './dashboard.css';

// Main Dashboard component for displaying cyber risk intelligence
export default function Dashboard() {
  const service = useMemo(() => new DashboardService(), []);
  const [data, setData] = useState({
    applications: [],
    vulnerabilities: [],
    riskControls: [],
    securityIncidents: []
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    application: '',
    severity: '',
    status: '',
    controlType: '',
    incidentSeverity: ''
  });
  
  const [selectedVulnerability, setSelectedVulnerability] = useState(null);
  const [drillDownOpen, setDrillDownOpen] = useState(false);

  // Load all data from ServiceNow
  useEffect(() => {
    async function loadDashboardData() {
      try {
        setLoading(true);
        setError(null);
        
        const [applications, vulnerabilities, riskControls, securityIncidents] = await Promise.all([
          service.getApplications(),
          service.getVulnerabilities(),
          service.getRiskControls(),
          service.getSecurityIncidents()
        ]);

        setData({
          applications,
          vulnerabilities,
          riskControls,
          securityIncidents
        });
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        setError(`Failed to load dashboard data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, [service]);

  // Apply filters to data
  const filteredData = useMemo(() => {
    const filtered = { ...data };

    if (filters.application) {
      filtered.vulnerabilities = filtered.vulnerabilities.filter(v => {
        const appId = typeof v.application === 'object' ? v.application.value : v.application;
        return appId === filters.application;
      });
      
      filtered.securityIncidents = filtered.securityIncidents.filter(i => {
        const appId = typeof i.related_application === 'object' ? i.related_application.value : i.related_application;
        return appId === filters.application;
      });
    }

    if (filters.severity) {
      filtered.vulnerabilities = filtered.vulnerabilities.filter(v => {
        const severity = typeof v.severity === 'object' ? v.severity.display_value : v.severity;
        return severity === filters.severity;
      });
    }

    if (filters.status) {
      filtered.vulnerabilities = filtered.vulnerabilities.filter(v => {
        const status = typeof v.status === 'object' ? v.status.display_value : v.status;
        return status === filters.status;
      });
    }

    if (filters.controlType) {
      filtered.riskControls = filtered.riskControls.filter(c => {
        const type = typeof c.control_type === 'object' ? c.control_type.display_value : c.control_type;
        return type === filters.controlType;
      });
    }

    if (filters.incidentSeverity) {
      filtered.securityIncidents = filtered.securityIncidents.filter(i => {
        const severity = typeof i.severity === 'object' ? i.severity.display_value : i.severity;
        return severity === filters.incidentSeverity;
      });
    }

    return filtered;
  }, [data, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const handleVulnerabilityClick = async (vulnerabilityData) => {
    try {
      const sysId = typeof vulnerabilityData.sys_id === 'object' ? 
        vulnerabilityData.sys_id.value : vulnerabilityData.sys_id;
      
      const details = await service.getVulnerabilityDetails(sysId);
      setSelectedVulnerability(details);
      setDrillDownOpen(true);
    } catch (error) {
      console.error('Error loading vulnerability details:', error);
      setError(`Failed to load vulnerability details: ${error.message}`);
    }
  };

  const closeDrillDown = () => {
    setDrillDownOpen(false);
    setSelectedVulnerability(null);
  };

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading">Loading Cyber Risk Intelligence Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* Welcome Widget */}
      <div className="welcome-widget">
        <h1 className="welcome-title">Welcome to my channel</h1>
        <p className="welcome-subtitle">ServiceNow/AI Enthusiasts</p>
      </div>
      
      <h1 className="dashboard-title">Cyber Risk Intelligence Dashboard</h1>
      
      {error && <div className="error">{error}</div>}
      
      {/* Global Filters */}
      <div className="dashboard-filters">
        <div className="filter-group">
          <label className="filter-label">Application</label>
          <select 
            className="filter-select"
            value={filters.application}
            onChange={(e) => handleFilterChange('application', e.target.value)}
          >
            <option value="">All Applications</option>
            {data.applications.map(app => {
              const sysId = typeof app.sys_id === 'object' ? app.sys_id.value : app.sys_id;
              const name = typeof app.name === 'object' ? app.name.display_value : app.name;
              return (
                <option key={sysId} value={sysId}>{name}</option>
              );
            })}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Severity</label>
          <select 
            className="filter-select"
            value={filters.severity}
            onChange={(e) => handleFilterChange('severity', e.target.value)}
          >
            <option value="">All Severities</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Status</label>
          <select 
            className="filter-select"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Control Type</label>
          <select 
            className="filter-select"
            value={filters.controlType}
            onChange={(e) => handleFilterChange('controlType', e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Preventive">Preventive</option>
            <option value="Detective">Detective</option>
            <option value="Corrective">Corrective</option>
          </select>
        </div>
      </div>

      {/* Dashboard Widgets */}
      <div className="widgets-grid">
        <ApplicationsByCriticality 
          applications={filteredData.applications} 
        />
        
        <VulnerabilityHeatmap 
          vulnerabilities={filteredData.vulnerabilities}
          onVulnerabilityClick={handleVulnerabilityClick}
        />
        
        <RiskControlCoverage 
          riskControls={filteredData.riskControls} 
        />
        
        <SecurityIncidentsBySeverity 
          incidents={filteredData.securityIncidents} 
        />
      </div>

      {/* Drill-down Panel */}
      <DrillDownPanel
        isOpen={drillDownOpen}
        onClose={closeDrillDown}
        vulnerabilityDetails={selectedVulnerability}
      />
    </div>
  );
}