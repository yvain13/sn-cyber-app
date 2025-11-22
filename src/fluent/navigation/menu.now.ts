import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

// Create application menu category
export const cyberRiskCategory = Record({
  $id: Now.ID['cyber_risk_category'],
  table: 'sys_app_category',
  data: {
    name: 'cyber_risk_intelligence',
    style: 'border-color: #e74c3c; background-color: #fdf2f2;',
  },
})

// Create the main application menu
export const cyberRiskIntelligenceMenu = ApplicationMenu({
  $id: Now.ID['cyber_risk_intelligence_menu'],
  title: 'Cyber Risk Intelligence',
  hint: 'Vulnerability and Security Intelligence Management',
  description: 'Comprehensive vulnerability management and security intelligence platform',
  category: cyberRiskCategory,
  active: true,
  order: 100
})

// Create table modules
export const applicationsModule = Record({
  $id: Now.ID['applications_module'],
  table: 'sys_app_module',
  data: {
    title: 'Applications',
    application: cyberRiskIntelligenceMenu.$id,
    link_type: 'LIST',
    name: 'x_1433234_cyber_ri_cmdb_application',
    hint: 'Manage application inventory',
    active: true,
    order: 100,
  },
})

export const vulnerabilitiesModule = Record({
  $id: Now.ID['vulnerabilities_module'],
  table: 'sys_app_module',
  data: {
    title: 'Vulnerabilities',
    application: cyberRiskIntelligenceMenu.$id,
    link_type: 'LIST',
    name: 'x_1433234_cyber_ri_vulnerability',
    hint: 'Manage vulnerability repository',
    active: true,
    order: 200,
  },
})

export const riskControlsModule = Record({
  $id: Now.ID['risk_controls_module'],
  table: 'sys_app_module',
  data: {
    title: 'Risk Controls',
    application: cyberRiskIntelligenceMenu.$id,
    link_type: 'LIST',
    name: 'x_1433234_cyber_ri_risk_control',
    hint: 'Manage risk controls',
    active: true,
    order: 300,
  },
})

export const securityIncidentsModule = Record({
  $id: Now.ID['security_incidents_module'],
  table: 'sys_app_module',
  data: {
    title: 'Security Incidents',
    application: cyberRiskIntelligenceMenu.$id,
    link_type: 'LIST',
    name: 'x_1433234_cyber_ri_security_incident',
    hint: 'Manage security incidents',
    active: true,
    order: 400,
  },
})

// Create separator for dashboard section
export const dashboardSeparator = Record({
  $id: Now.ID['dashboard_separator'],
  table: 'sys_app_module',
  data: {
    title: 'Analytics',
    application: cyberRiskIntelligenceMenu.$id,
    link_type: 'SEPARATOR',
    active: true,
    order: 500,
  },
})

// Create dashboard module
export const dashboardModule = Record({
  $id: Now.ID['dashboard_module'],
  table: 'sys_app_module',
  data: {
    title: 'Cyber Risk Intelligence Dashboard',
    application: cyberRiskIntelligenceMenu.$id,
    link_type: 'DIRECT',
    query: 'x_1433234_cyber_ri_dashboard.do',
    hint: 'Interactive analytics dashboard with drill-down capabilities',
    active: true,
    order: 600,
  },
})