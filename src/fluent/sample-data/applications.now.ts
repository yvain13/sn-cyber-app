import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample Applications with different criticality levels
export const sampleApplications = [
  Record({
    $id: Now.ID['app_customer_portal'],
    table: 'x_1433234_cyber_ri_cmdb_application',
    data: {
      name: 'Customer Portal',
      criticality: 'critical',
      // Note: business_owner and support_group would reference actual user/group sys_ids in a real instance
    },
  }),

  Record({
    $id: Now.ID['app_payment_gateway'],
    table: 'x_1433234_cyber_ri_cmdb_application',
    data: {
      name: 'Payment Gateway',
      criticality: 'critical',
    },
  }),

  Record({
    $id: Now.ID['app_inventory_mgmt'],
    table: 'x_1433234_cyber_ri_cmdb_application',
    data: {
      name: 'Inventory Management System',
      criticality: 'high',
    },
  }),

  Record({
    $id: Now.ID['app_employee_portal'],
    table: 'x_1433234_cyber_ri_cmdb_application',
    data: {
      name: 'Employee Self-Service Portal',
      criticality: 'high',
    },
  }),

  Record({
    $id: Now.ID['app_reporting_dashboard'],
    table: 'x_1433234_cyber_ri_cmdb_application',
    data: {
      name: 'Business Intelligence Dashboard',
      criticality: 'medium',
    },
  }),

  Record({
    $id: Now.ID['app_file_sharing'],
    table: 'x_1433234_cyber_ri_cmdb_application',
    data: {
      name: 'Internal File Sharing System',
      criticality: 'medium',
    },
  }),

  Record({
    $id: Now.ID['app_testing_env'],
    table: 'x_1433234_cyber_ri_cmdb_application',
    data: {
      name: 'Development Testing Environment',
      criticality: 'low',
    },
  }),

  Record({
    $id: Now.ID['app_documentation'],
    table: 'x_1433234_cyber_ri_cmdb_application',
    data: {
      name: 'Documentation Wiki',
      criticality: 'low',
    },
  })
]