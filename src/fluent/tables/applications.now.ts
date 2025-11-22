import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

// Application Inventory Table
export const x_1433234_cyber_ri_cmdb_application = Table({
    name: 'x_1433234_cyber_ri_cmdb_application',
    label: 'Application Inventory',
    schema: {
        name: StringColumn({ 
            label: 'Application Name', 
            maxLength: 100,
            mandatory: true
        }),
        business_owner: ReferenceColumn({ 
            label: 'Business Owner', 
            referenceTable: 'sys_user'
        }),
        support_group: ReferenceColumn({ 
            label: 'Support Group', 
            referenceTable: 'sys_user_group'
        }),
        criticality: ChoiceColumn({
            label: 'Criticality',
            choices: {
                low: { label: 'Low', sequence: 0 },
                medium: { label: 'Medium', sequence: 1 },
                high: { label: 'High', sequence: 2 },
                critical: { label: 'Critical', sequence: 3 },
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        })
    },
    display: 'name',
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'public',
    allow_web_service_access: true,
    extensible: true
})