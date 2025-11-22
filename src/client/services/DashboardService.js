export class DashboardService {
  constructor() {
    this.baseHeaders = {
      "Accept": "application/json",
      "X-UserToken": window.g_ck
    };
  }

  async getData(table, filters = {}) {
    try {
      const searchParams = new URLSearchParams(filters);
      searchParams.set('sysparm_display_value', 'all');
      
      const response = await fetch(`/api/now/table/${table}?${searchParams.toString()}`, {
        method: "GET",
        headers: this.baseHeaders,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error fetching ${table}: ${errorData.error?.message || response.statusText}`);
      }

      const { result } = await response.json();
      return result || [];
    } catch (error) {
      console.error(`Error fetching data from ${table}:`, error);
      throw error;
    }
  }

  async getApplications(filters = {}) {
    return this.getData('x_1433234_cyber_ri_cmdb_application', filters);
  }

  async getVulnerabilities(filters = {}) {
    return this.getData('x_1433234_cyber_ri_vulnerability', filters);
  }

  async getRiskControls(filters = {}) {
    return this.getData('x_1433234_cyber_ri_risk_control', filters);
  }

  async getSecurityIncidents(filters = {}) {
    return this.getData('x_1433234_cyber_ri_security_incident', filters);
  }

  async getVulnerabilityRiskControlMappings(filters = {}) {
    return this.getData('x_1433234_cyber_ri_vulnerability_risk_control_m2m', filters);
  }

  // Get vulnerability details with related data
  async getVulnerabilityDetails(vulnerabilityId) {
    try {
      // Get the vulnerability
      const vulnerability = await this.getData('x_1433234_cyber_ri_vulnerability', {
        sysparm_query: `sys_id=${vulnerabilityId}`
      });

      if (!vulnerability || vulnerability.length === 0) {
        throw new Error('Vulnerability not found');
      }

      // Get related risk controls
      const mappings = await this.getData('x_1433234_cyber_ri_vulnerability_risk_control_m2m', {
        sysparm_query: `vulnerability=${vulnerabilityId}`
      });

      let riskControls = [];
      if (mappings && mappings.length > 0) {
        const controlIds = mappings.map(m => {
          const controlId = typeof m.risk_control === 'object' ? m.risk_control.value : m.risk_control;
          return controlId;
        }).filter(id => id);

        if (controlIds.length > 0) {
          riskControls = await this.getData('x_1433234_cyber_ri_risk_control', {
            sysparm_query: `sys_idIN${controlIds.join(',')}`
          });
        }
      }

      // Get related security incidents
      const incidents = await this.getData('x_1433234_cyber_ri_security_incident', {
        sysparm_query: `related_vulnerability=${vulnerabilityId}`
      });

      return {
        vulnerability: vulnerability[0],
        riskControls: riskControls || [],
        incidents: incidents || []
      };
    } catch (error) {
      console.error('Error fetching vulnerability details:', error);
      throw error;
    }
  }

  // Helper methods for data aggregation
  aggregateByField(data, field) {
    const counts = {};
    data.forEach(item => {
      const value = typeof item[field] === 'object' ? item[field].display_value : item[field];
      const key = value || 'None';
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }

  createChartData(aggregatedData, colors = {}) {
    return Object.entries(aggregatedData).map(([key, value]) => ({
      name: key,
      value: value,
      fill: colors[key.toLowerCase()] || '#8884d8'
    }));
  }
}