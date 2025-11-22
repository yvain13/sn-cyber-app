import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// M2M Relationships between Vulnerabilities and Risk Control
export const sampleVulnerabilityRiskControlMappings = [
  // SQL Injection -> Input Validation + Secure Coding
  Record({
    $id: Now.ID['mapping_sql_input_val'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_sql_injection'],
      risk_control: Now.ID['control_input_validation'],
    },
  }),

  Record({
    $id: Now.ID['mapping_sql_secure_code'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_sql_injection'],
      risk_control: Now.ID['control_secure_coding'],
    },
  }),

  // XSS Payment -> Input Validation + Secure Coding
  Record({
    $id: Now.ID['mapping_xss_input_val'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_xss_payment'],
      risk_control: Now.ID['control_input_validation'],
    },
  }),

  Record({
    $id: Now.ID['mapping_xss_secure_code'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_xss_payment'],
      risk_control: Now.ID['control_secure_coding'],
    },
  }),

  // Auth Bypass -> MFA + Access Controls
  Record({
    $id: Now.ID['mapping_auth_mfa'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_auth_bypass'],
      risk_control: Now.ID['control_access_controls'],
    },
  }),

  // CSRF -> Secure Coding
  Record({
    $id: Now.ID['mapping_csrf_secure_code'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_csrf_employee'],
      risk_control: Now.ID['control_secure_coding'],
    },
  }),

  // Info Disclosure -> Access Controls + SIEM
  Record({
    $id: Now.ID['mapping_info_access'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_info_disclosure'],
      risk_control: Now.ID['control_access_controls'],
    },
  }),

  Record({
    $id: Now.ID['mapping_info_siem'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_info_disclosure'],
      risk_control: Now.ID['control_security_monitoring'],
    },
  }),

  // File Upload -> Input Validation + Vulnerability Scanning
  Record({
    $id: Now.ID['mapping_upload_input'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_file_upload'],
      risk_control: Now.ID['control_input_validation'],
    },
  }),

  Record({
    $id: Now.ID['mapping_upload_scanning'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_file_upload'],
      risk_control: Now.ID['control_vulnerability_scanning'],
    },
  }),

  // Weak Crypto -> Encryption + Patch Management
  Record({
    $id: Now.ID['mapping_crypto_encryption'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_weak_crypto'],
      risk_control: Now.ID['control_encryption'],
    },
  }),

  Record({
    $id: Now.ID['mapping_crypto_patch'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_weak_crypto'],
      risk_control: Now.ID['control_patch_management'],
    },
  }),

  // Session Management -> MFA + SIEM
  Record({
    $id: Now.ID['mapping_session_mfa'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_session_mgmt'],
      risk_control: Now.ID['control_access_controls'],
    },
  }),

  Record({
    $id: Now.ID['mapping_session_siem'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_session_mgmt'],
      risk_control: Now.ID['control_security_monitoring'],
    },
  }),

  // Missing Patches -> Patch Management + Vulnerability Scanning
  Record({
    $id: Now.ID['mapping_patches_patch'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_missing_patches'],
      risk_control: Now.ID['control_patch_management'],
    },
  }),

  Record({
    $id: Now.ID['mapping_patches_scanning'],
    table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m',
    data: {
      vulnerability: Now.ID['vuln_missing_patches'],
      risk_control: Now.ID['control_vulnerability_scanning'],
    },
  })
]

// Security Incidents with different categories and severities
export const sampleSecurityIncidents = [
  Record({
    $id: Now.ID['incident_data_breach'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-001',
      category: 'data_loss',
      severity: 'critical',
      related_application: Now.ID['app_customer_portal'],
      related_vulnerability: Now.ID['vuln_sql_injection'],
      description: 'Data breach involving customer personal information through SQL injection attack.',
    },
  }),

  Record({
    $id: Now.ID['incident_malware_payment'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-002',
      category: 'malware',
      severity: 'high',
      related_application: Now.ID['app_payment_gateway'],
      related_vulnerability: Now.ID['vuln_xss_payment'],
      description: 'Malware injection attempt through XSS vulnerability in payment processing form.',
    },
  }),

  Record({
    $id: Now.ID['incident_unauthorized_access'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-003',
      category: 'intrusion',
      severity: 'critical',
      related_application: Now.ID['app_inventory_mgmt'],
      related_vulnerability: Now.ID['vuln_auth_bypass'],
      description: 'Unauthorized access to administrative functions through authentication bypass.',
    },
  }),

  Record({
    $id: Now.ID['incident_suspicious_file'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-004',
      category: 'suspicious_activity',
      severity: 'medium',
      related_application: Now.ID['app_file_sharing'],
      related_vulnerability: Now.ID['vuln_file_upload'],
      description: 'Suspicious file upload activity detected with potential malicious content.',
    },
  }),

  Record({
    $id: Now.ID['incident_session_hijack'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-005',
      category: 'intrusion',
      severity: 'high',
      related_application: Now.ID['app_customer_portal'],
      description: 'Session hijacking attempt detected on customer portal affecting multiple accounts.',
    },
  }),

  Record({
    $id: Now.ID['incident_dos_attack'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-006',
      category: 'suspicious_activity',
      severity: 'low',
      related_application: Now.ID['app_testing_env'],
      related_vulnerability: Now.ID['vuln_dos_potential'],
      description: 'Denial of service attack targeting testing environment causing temporary outage.',
    },
  }),

  Record({
    $id: Now.ID['incident_crypto_weakness'],
    table: 'x_1433234_cyber_ri_security_incident',
    data: {
      incident_number: 'SEC-2024-007',
      category: 'data_loss',
      severity: 'medium',
      related_application: Now.ID['app_payment_gateway'],
      description: 'Potential data exposure due to weak cryptographic implementation in payment processing.',
    },
  })
]