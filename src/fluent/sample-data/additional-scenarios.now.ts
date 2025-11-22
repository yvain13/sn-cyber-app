import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Additional Vulnerabilities to show more variety and relationships
export const additionalVulnerabilities = [
  Record({
    $id: Now.ID['vuln_privilege_escalation'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Privilege Escalation in Admin Panel',
      severity: 'critical',
      status: 'open',
      application: Now.ID['app_employee_portal'],
      description: 'Local privilege escalation vulnerability allowing regular users to gain admin access.',
    },
  }),

  Record({
    $id: Now.ID['vuln_broken_auth'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Broken Authentication Mechanism',
      severity: 'high',
      status: 'in_progress',
      application: Now.ID['app_reporting_dashboard'],
      description: 'Weak password reset functionality allowing account takeover through predictable tokens.',
    },
  }),

  Record({
    $id: Now.ID['vuln_insecure_deserialization'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Insecure Deserialization in API',
      severity: 'high',
      status: 'open',
      application: Now.ID['app_inventory_mgmt'],
      description: 'Unsafe deserialization of user-controlled data leading to remote code execution.',
    },
  }),

  Record({
    $id: Now.ID['vuln_directory_traversal'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Directory Traversal in File Access',
      severity: 'medium',
      status: 'open',
      application: Now.ID['app_documentation'],
      description: 'Path traversal vulnerability allowing access to sensitive system files.',
    },
  }),

  Record({
    $id: Now.ID['vuln_command_injection'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Command Injection in Admin Tools',
      severity: 'critical',
      status: 'in_progress',
      application: Now.ID['app_file_sharing'],
      description: 'OS command injection in administrative tools allowing server compromise.',
    },
  }),

  Record({
    $id: Now.ID['vuln_sensitive_data_exposure'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Sensitive Data in Server Logs',
      severity: 'medium',
      status: 'resolved',
      application: Now.ID['app_payment_gateway'],
      description: 'Credit card information and personal data being logged in plaintext server logs.',
    },
  }),

  Record({
    $id: Now.ID['vuln_xxe_injection'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'XML External Entity (XXE) Injection',
      severity: 'high',
      status: 'open',
      application: Now.ID['app_reporting_dashboard'],
      description: 'XXE vulnerability in XML parsing allowing file disclosure and SSRF attacks.',
    },
  }),

  Record({
    $id: Now.ID['vuln_race_condition'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Race Condition in Payment Processing',
      severity: 'medium',
      status: 'in_progress',
      application: Now.ID['app_payment_gateway'],
      description: 'Race condition in payment validation allowing double spending attacks.',
    },
  })
]

// Additional Risk Controls for better coverage
export const additionalRiskControls = [
  Record({
    $id: Now.ID['control_code_review'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Mandatory Code Review Process',
      control_type: 'preventive',
      description: 'All code changes must undergo peer review before deployment to production.',
    },
  }),

  Record({
    $id: Now.ID['control_privilege_management'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Least Privilege Access Control',
      control_type: 'preventive',
      description: 'Users are granted minimum necessary privileges with regular access reviews.',
    },
  }),

  Record({
    $id: Now.ID['control_api_security'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'API Security Gateway',
      control_type: 'preventive',
      description: 'Centralized API gateway with rate limiting, authentication, and input validation.',
    },
  }),

  Record({
    $id: Now.ID['control_data_classification'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Data Classification and Handling',
      control_type: 'preventive',
      description: 'Systematic classification and protection of sensitive data based on criticality.',
    },
  }),

  Record({
    $id: Now.ID['control_threat_intelligence'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Threat Intelligence Monitoring',
      control_type: 'detective',
      description: 'Continuous monitoring of threat intelligence feeds and indicators of compromise.',
    },
  }),

  Record({
    $id: Now.ID['control_backup_recovery'],
    table: 'x_1433234_cyber_ri_risk_control',
    data: {
      control_name: 'Automated Backup and Recovery',
      control_type: 'corrective',
      description: 'Automated daily backups with tested recovery procedures for critical systems.',
    },
  })
]

// Additional Security Incidents showing various scenarios
export const additionalSecurityIncidents = [
  Record({
    $id: Now.ID['incident_privilege_abuse'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-008',
      category: 'intrusion',
      severity: 'critical',
      related_application: Now.ID['app_employee_portal'],
      related_vulnerability: Now.ID['vuln_privilege_escalation'],
      description: 'Employee account compromised and used to escalate privileges for unauthorized data access.',
    },
  }),

  Record({
    $id: Now.ID['incident_account_takeover'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-009',
      category: 'intrusion',
      severity: 'high',
      related_application: Now.ID['app_reporting_dashboard'],
      related_vulnerability: Now.ID['vuln_broken_auth'],
      description: 'Multiple user accounts compromised through password reset vulnerability exploitation.',
    },
  }),

  Record({
    $id: Now.ID['incident_code_execution'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-010',
      category: 'malware',
      severity: 'critical',
      related_application: Now.ID['app_inventory_mgmt'],
      related_vulnerability: Now.ID['vuln_insecure_deserialization'],
      description: 'Remote code execution achieved through deserialization attack, malware deployed on server.',
    },
  }),

  Record({
    $id: Now.ID['incident_file_access'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-011',
      category: 'data_loss',
      severity: 'medium',
      related_application: Now.ID['app_documentation'],
      related_vulnerability: Now.ID['vuln_directory_traversal'],
      description: 'Sensitive configuration files accessed through directory traversal attack.',
    },
  }),

  Record({
    $id: Now.ID['incident_server_compromise'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-012',
      category: 'intrusion',
      severity: 'critical',
      related_application: Now.ID['app_file_sharing'],
      related_vulnerability: Now.ID['vuln_command_injection'],
      description: 'Full server compromise achieved through command injection in administrative interface.',
    },
  }),

  Record({
    $id: Now.ID['incident_data_leakage'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-013',
      category: 'data_loss',
      severity: 'high',
      related_application: Now.ID['app_reporting_dashboard'],
      related_vulnerability: Now.ID['vuln_xxe_injection'],
      description: 'Customer database information leaked through XXE attack on reporting interface.',
    },
  }),

  Record({
    $id: Now.ID['incident_payment_fraud'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-014',
      category: 'suspicious_activity',
      severity: 'high',
      related_application: Now.ID['app_payment_gateway'],
      related_vulnerability: Now.ID['vuln_race_condition'],
      description: 'Fraudulent transactions detected exploiting race condition in payment processing.',
    },
  }),

  Record({
    $id: Now.ID['incident_insider_threat'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-015',
      category: 'data_loss',
      severity: 'medium',
      related_application: Now.ID['app_employee_portal'],
      description: 'Insider threat detected - employee attempting to access HR records beyond authorization.',
    },
  })
]

// Comprehensive M2M Mappings for new vulnerabilities and controls
export const additionalVulnControlMappings = [
  // Privilege Escalation -> Privilege Management + Code Review + Monitoring
  Record({
    $id: Now.ID['mapping_priv_esc_mgmt'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_privilege_escalation'],
      risk_control: Now.ID['control_privilege_management'],
    },
  }),

  Record({
    $id: Now.ID['mapping_priv_esc_review'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_privilege_escalation'],
      risk_control: Now.ID['control_code_review'],
    },
  }),

  Record({
    $id: Now.ID['mapping_priv_esc_monitor'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_privilege_escalation'],
      risk_control: Now.ID['control_security_monitoring'],
    },
  }),

  // Broken Auth -> MFA + Privilege Management + Threat Intelligence
  Record({
    $id: Now.ID['mapping_broken_auth_priv'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_broken_auth'],
      risk_control: Now.ID['control_privilege_management'],
    },
  }),

  Record({
    $id: Now.ID['mapping_broken_auth_threat'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_broken_auth'],
      risk_control: Now.ID['control_threat_intelligence'],
    },
  }),

  // Insecure Deserialization -> Code Review + Input Validation + API Security
  Record({
    $id: Now.ID['mapping_deserial_review'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_insecure_deserialization'],
      risk_control: Now.ID['control_code_review'],
    },
  }),

  Record({
    $id: Now.ID['mapping_deserial_input'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_insecure_deserialization'],
      risk_control: Now.ID['control_input_validation'],
    },
  }),

  Record({
    $id: Now.ID['mapping_deserial_api'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_insecure_deserialization'],
      risk_control: Now.ID['control_api_security'],
    },
  }),

  // Directory Traversal -> Input Validation + Access Controls + Data Classification
  Record({
    $id: Now.ID['mapping_dir_trav_input'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_directory_traversal'],
      risk_control: Now.ID['control_input_validation'],
    },
  }),

  Record({
    $id: Now.ID['mapping_dir_trav_access'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_directory_traversal'],
      risk_control: Now.ID['control_access_controls'],
    },
  }),

  Record({
    $id: Now.ID['mapping_dir_trav_data'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_directory_traversal'],
      risk_control: Now.ID['control_data_classification'],
    },
  }),

  // Command Injection -> Input Validation + Code Review + Privilege Management
  Record({
    $id: Now.ID['mapping_cmd_inj_input'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_command_injection'],
      risk_control: Now.ID['control_input_validation'],
    },
  }),

  Record({
    $id: Now.ID['mapping_cmd_inj_review'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_command_injection'],
      risk_control: Now.ID['control_code_review'],
    },
  }),

  Record({
    $id: Now.ID['mapping_cmd_inj_priv'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_command_injection'],
      risk_control: Now.ID['control_privilege_management'],
    },
  }),

  // Sensitive Data Exposure -> Data Classification + Encryption + Monitoring
  Record({
    $id: Now.ID['mapping_data_exp_class'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_sensitive_data_exposure'],
      risk_control: Now.ID['control_data_classification'],
    },
  }),

  Record({
    $id: Now.ID['mapping_data_exp_encrypt'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_sensitive_data_exposure'],
      risk_control: Now.ID['control_encryption'],
    },
  }),

  Record({
    $id: Now.ID['mapping_data_exp_monitor'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_sensitive_data_exposure'],
      risk_control: Now.ID['control_security_monitoring'],
    },
  }),

  // XXE Injection -> Input Validation + API Security + Code Review
  Record({
    $id: Now.ID['mapping_xxe_input'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_xxe_injection'],
      risk_control: Now.ID['control_input_validation'],
    },
  }),

  Record({
    $id: Now.ID['mapping_xxe_api'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_xxe_injection'],
      risk_control: Now.ID['control_api_security'],
    },
  }),

  Record({
    $id: Now.ID['mapping_xxe_review'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_xxe_injection'],
      risk_control: Now.ID['control_code_review'],
    },
  }),

  // Race Condition -> Code Review + Secure Coding + Monitoring
  Record({
    $id: Now.ID['mapping_race_review'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_race_condition'],
      risk_control: Now.ID['control_code_review'],
    },
  }),

  Record({
    $id: Now.ID['mapping_race_secure'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_race_condition'],
      risk_control: Now.ID['control_secure_coding'],
    },
  }),

  Record({
    $id: Now.ID['mapping_race_monitor'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_race_condition'],
      risk_control: Now.ID['control_security_monitoring'],
    },
  }),

  // DoS Potential -> Network Monitoring + API Security
  Record({
    $id: Now.ID['mapping_dos_api'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_dos_potential'],
      risk_control: Now.ID['control_api_security'],
    },
  })
]