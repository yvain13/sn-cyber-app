import '@servicenow/sdk/global'
import { Table, StringColumn, ChoiceColumn, ReferenceColumn } from '@servicenow/sdk/core'

// Vulnerability Repository Table
export const x_1433234_cyber_ri_vulnerability = Table({
    name: 'x_1433234_cyber_ri_vulnerability',
    label: 'Vulnerability Repository',
    schema: {
        title: StringColumn({ 
            label: 'Title', 
            maxLength: 150,
            mandatory: true
        }),
        severity: ChoiceColumn({
            label: 'Severity',
            choices: {
                low: { label: 'Low', sequence: 0 },
                medium: { label: 'Medium', sequence: 1 },
                high: { label: 'High', sequence: 2 },
                critical: { label: 'Critical', sequence: 3 },
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                open: { label: 'Open', sequence: 0 },
                in_progress: { label: 'In Progress', sequence: 1 },
                resolved: { label: 'Resolved', sequence: 2 },
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        application: ReferenceColumn({ 
            label: 'Application', 
            referenceTable: 'x_1433234_cyber_ri_cmdb_application'
        }),
        description: StringColumn({ 
            label: 'Description', 
            maxLength: 1000
        })
    },
    display: 'title',
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'public',
    allow_web_service_access: true,
    extensible: true
})