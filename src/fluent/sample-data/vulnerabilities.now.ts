import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample Vulnerabilities with various severities and statuses
export const sampleVulnerabilities = [
  Record({
    $id: Now.ID['vuln_sql_injection'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'SQL Injection in Customer Login',
      severity: 'critical',
      status: 'open',
      application: Now.ID['app_customer_portal'], // References the application ID
      description: 'Critical SQL injection vulnerability in the customer portal login form allowing unauthorized database access.',
    },
  }),

  Record({
    $id: Now.ID['vuln_xss_payment'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Cross-Site Scripting in Payment Form',
      severity: 'high',
      status: 'in_progress',
      application: Now.ID['app_payment_gateway'],
      description: 'XSS vulnerability in payment processing form that could allow session hijacking and data theft.',
    },
  }),

  Record({
    $id: Now.ID['vuln_auth_bypass'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Authentication Bypass in Admin Panel',
      severity: 'critical',
      status: 'in_progress',
      application: Now.ID['app_inventory_mgmt'],
      description: 'Authentication bypass vulnerability allowing unauthorized access to administrative functions.',
    },
  }),

  Record({
    $id: Now.ID['vuln_csrf_employee'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'CSRF in Employee Profile Updates',
      severity: 'medium',
      status: 'open',
      application: Now.ID['app_employee_portal'],
      description: 'Cross-Site Request Forgery vulnerability in employee profile update functionality.',
    },
  }),

  Record({
    $id: Now.ID['vuln_info_disclosure'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Information Disclosure in API Endpoints',
      severity: 'medium',
      status: 'resolved',
      application: Now.ID['app_reporting_dashboard'],
      description: 'API endpoints exposing sensitive business information without proper authorization checks.',
    },
  }),

  Record({
    $id: Now.ID['vuln_file_upload'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Unrestricted File Upload',
      severity: 'high',
      status: 'open',
      application: Now.ID['app_file_sharing'],
      description: 'File upload functionality allows execution of malicious scripts on the server.',
    },
  }),

  Record({
    $id: Now.ID['vuln_weak_crypto'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Weak Cryptographic Implementation',
      severity: 'medium',
      status: 'resolved',
      application: Now.ID['app_payment_gateway'],
      description: 'Use of deprecated encryption algorithms in payment processing.',
    },
  }),

  Record({
    $id: Now.ID['vuln_session_mgmt'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Insecure Session Management',
      severity: 'high',
      status: 'resolved',
      application: Now.ID['app_customer_portal'],
      description: 'Sessions not properly invalidated leading to potential account takeover.',
    },
  }),

  Record({
    $id: Now.ID['vuln_dos_potential'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Resource Exhaustion DoS',
      severity: 'low',
      status: 'open',
      application: Now.ID['app_testing_env'],
      description: 'Potential denial of service through resource exhaustion in testing environment.',
    },
  }),

  Record({
    $id: Now.ID['vuln_missing_patches'],
    table: 'x_1433234_cyber_ri_vulnerability',
    data: {
      title: 'Missing Security Patches',
      severity: 'low',
      status: 'in_progress',
      application: Now.ID['app_documentation'],
      description: 'Several components running outdated versions with known security issues.',
    },
  })
]