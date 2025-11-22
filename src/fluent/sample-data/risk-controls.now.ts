import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample Risk Controls with different types
export const sampleRiskControls = [
  // Preventive Controls
  Record({
    $id: Now.ID['control_input_validation'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Input Validation Framework',
      control_type: 'preventive',
      description: 'Comprehensive input validation to prevent injection attacks and malicious input processing.',
    },
  }),

  Record({
    $id: Now.ID['control_access_controls'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Multi-Factor Authentication',
      control_type: 'preventive',
      description: 'Implementation of multi-factor authentication to prevent unauthorized access.',
    },
  }),

  Record({
    $id: Now.ID['control_encryption'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Data Encryption Standards',
      control_type: 'preventive',
      description: 'Strong encryption protocols for data at rest and in transit using industry-standard algorithms.',
    },
  }),

  Record({
    $id: Now.ID['control_secure_coding'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Secure Coding Practices',
      control_type: 'preventive',
      description: 'Enforced secure coding standards and practices to prevent common vulnerabilities.',
    },
  }),

  Record({
    $id: Now.ID['control_firewall'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Network Firewall Rules',
      control_type: 'preventive',
      description: 'Configured firewall rules to block unauthorized network access and traffic.',
    },
  }),

  // Detective Controls
  Record({
    $id: Now.ID['control_security_monitoring'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Security Information Event Management (SIEM)',
      control_type: 'detective',
      description: 'Real-time monitoring and analysis of security events across all systems.',
    },
  }),

  Record({
    $id: Now.ID['control_vulnerability_scanning'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Automated Vulnerability Scanning',
      control_type: 'detective',
      description: 'Regular automated scans to identify security vulnerabilities and misconfigurations.',
    },
  }),

  Record({
    $id: Now.ID['control_log_analysis'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Log Analysis and Alerting',
      control_type: 'detective',
      description: 'Continuous analysis of system logs to detect suspicious activities and security incidents.',
    },
  }),

  Record({
    $id: Now.ID['control_intrusion_detection'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Intrusion Detection System',
      control_type: 'detective',
      description: 'Network and host-based intrusion detection to identify malicious activities.',
    },
  }),

  // Corrective Controls
  Record({
    $id: Now.ID['control_incident_response'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Incident Response Plan',
      control_type: 'corrective',
      description: 'Structured incident response procedures for containing and remedying security breaches.',
    },
  }),

  Record({
    $id: Now.ID['control_patch_management'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Patch Management Process',
      control_type: 'corrective',
      description: 'Systematic process for applying security patches and updates to address vulnerabilities.',
    },
  }),

  Record({
    $id: Now.ID['control_backup_recovery'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Backup and Recovery Procedures',
      control_type: 'corrective',
      description: 'Regular data backups and tested recovery procedures to restore operations after incidents.',
    },
  }),

  Record({
    $id: Now.ID['control_access_revocation'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Emergency Access Revocation',
      control_type: 'corrective',
      description: 'Procedures for immediately revoking access when security breaches are detected.',
    },
  })
]