import React from 'react';

export default function DrillDownPanel({ isOpen, onClose, vulnerabilityDetails }) {
  if (!vulnerabilityDetails) return null;

  const { vulnerability, riskControls, incidents } = vulnerabilityDetails;

  const getSeverityClass = (severity) => {
    const sev = typeof severity === 'object' ? severity.display_value : severity;
    return `severity-${sev?.toLowerCase() || 'none'}`;
  };

  const getStatusClass = (status) => {
    const stat = typeof status === 'object' ? status.display_value : status;
    return `status-${stat?.toLowerCase().replace(' ', '_') || 'none'}`;
  };

  const getControlTypeIcon = (type) => {
    const controlType = typeof type === 'object' ? type.display_value : type;
    switch (controlType?.toLowerCase()) {
      case 'preventive': return '🛡️';
      case 'detective': return '🔍';
      case 'corrective': return '🔧';
      default: return '⚙️';
    }
  };

  const getEvaluationBanner = () => {
    const severity = typeof vulnerability.severity === 'object' ? 
      vulnerability.severity.display_value : vulnerability.severity;
    const status = typeof vulnerability.status === 'object' ? 
      vulnerability.status.display_value : vulnerability.status;
    
    if (status?.toLowerCase() === 'resolved') {
      return {
        type: 'success',
        message: '✅ Fully resolved and mitigated.',
        className: 'banner-success'
      };
    }

    if (incidents && incidents.length > 0) {
      return {
        type: 'warning',
        message: '⚠️ Active Security Incident associated.',
        className: 'banner-warning'
      };
    }

    if ((severity?.toLowerCase() === 'high' || severity?.toLowerCase() === 'critical') && 
        (!riskControls || riskControls.length === 0)) {
      return {
        type: 'danger',
        message: '⚠️ High severity vulnerability without mitigating controls.',
        className: 'banner-danger'
      };
    }

    return null;
  };

  const evaluationBanner = getEvaluationBanner();

  const title = typeof vulnerability.title === 'object' ? 
    vulnerability.title.display_value : vulnerability.title;
  const severity = typeof vulnerability.severity === 'object' ? 
    vulnerability.severity.display_value : vulnerability.severity;
  const status = typeof vulnerability.status === 'object' ? 
    vulnerability.status.display_value : vulnerability.status;
  const application = typeof vulnerability.application === 'object' ? 
    vulnerability.application.display_value : vulnerability.application;
  const description = typeof vulnerability.description === 'object' ? 
    vulnerability.description.display_value : vulnerability.description;

  return (
    <div className={`drill-down-panel ${isOpen ? 'open' : ''}`}>
      <div className="drill-down-header">
        <h1 className="drill-down-title">Vulnerability Details</h1>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      
      <div className="drill-down-content">
        {/* Evaluation Banner */}
        {evaluationBanner && (
          <div className={`evaluation-banner ${evaluationBanner.className}`}>
            {evaluationBanner.message}
          </div>
        )}

        {/* Vulnerability Summary */}
        <div className="vulnerability-summary">
          <h2 style={{ margin: '0 0 15px 0', color: '#2c3e50' }}>{title}</h2>
          <div style={{ marginBottom: '10px' }}>
            <span className={`severity-badge ${getSeverityClass(vulnerability.severity)}`}>
              {severity}
            </span>
            <span className={`status-badge ${getStatusClass(vulnerability.status)}`}>
              {status}
            </span>
          </div>
          {application && (
            <p style={{ margin: '10px 0', color: '#666' }}>
              <strong>Application:</strong> {application}
            </p>
          )}
          {description && (
            <p style={{ margin: '10px 0 0 0', color: '#666' }}>
              <strong>Description:</strong> {description}
            </p>
          )}
        </div>

        {/* Associated Risk Controls */}
        <h3 className="section-title">Associated Risk Controls</h3>
        {riskControls && riskControls.length > 0 ? (
          <div className="controls-grid">
            {riskControls.map((control, index) => {
              const controlName = typeof control.control_name === 'object' ? 
                control.control_name.display_value : control.control_name;
              const controlType = typeof control.control_type === 'object' ? 
                control.control_type.display_value : control.control_type;
              const controlDesc = typeof control.description === 'object' ? 
                control.description.display_value : control.description;
              const sysId = typeof control.sys_id === 'object' ? 
                control.sys_id.value : control.sys_id;

              return (
                <div key={sysId || index} className="control-card">
                  <div className={`control-type-icon control-type-${controlType?.toLowerCase()}`}>
                    {getControlTypeIcon(control.control_type)}
                  </div>
                  <h4 style={{ margin: '0 0 8px 0', color: '#2c3e50', fontSize: '14px' }}>
                    {controlName}
                  </h4>
                  <p style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '12px', 
                    color: '#666',
                    fontWeight: '500'
                  }}>
                    Type: {controlType}
                  </p>
                  {controlDesc && (
                    <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>
                      {controlDesc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p style={{ color: '#888', fontStyle: 'italic' }}>
            No risk controls associated with this vulnerability.
          </p>
        )}

        {/* Associated Security Incidents */}
        <h3 className="section-title">Associated Security Incidents</h3>
        {incidents && incidents.length > 0 ? (
          <div className="incidents-list">
            {incidents.map((incident, index) => {
              const incidentNumber = typeof incident.incident_number === 'object' ? 
                incident.incident_number.display_value : incident.incident_number;
              const category = typeof incident.category === 'object' ? 
                incident.category.display_value : incident.category;
              const severity = typeof incident.severity === 'object' ? 
                incident.severity.display_value : incident.severity;
              const incidentDesc = typeof incident.description === 'object' ? 
                incident.description.display_value : incident.description;
              const sysId = typeof incident.sys_id === 'object' ? 
                incident.sys_id.value : incident.sys_id;

              return (
                <div key={sysId || index} className="incident-item">
                  <div className="incident-number" style={{ marginBottom: '8px' }}>
                    <span className={`severity-dot ${severity?.toLowerCase()}`}></span>
                    {incidentNumber}
                  </div>
                  <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
                    <strong>Category:</strong> {category} | <strong>Severity:</strong> {severity}
                  </p>
                  {incidentDesc && (
                    <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>
                      {incidentDesc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p style={{ color: '#888', fontStyle: 'italic' }}>
            No security incidents associated with this vulnerability.
          </p>
        )}
      </div>
    </div>
  );
}