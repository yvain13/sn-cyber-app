import '@servicenow/sdk/global'
import { Table, StringColumn, ChoiceColumn } from '@servicenow/sdk/core'

// Risk Controls Table
export const x_1433234_cyber_ri_risk_control = Table({
    name: 'x_1433234_cyber_ri_risk_control',
    label: 'Risk Controls',
    schema: {
        control_name: StringColumn({ 
            label: 'Control Name', 
            maxLength: 100,
            mandatory: true
        }),
        control_type: ChoiceColumn({
            label: 'Control Type',
            choices: {
                preventive: { label: 'Preventive', sequence: 0 },
                detective: { label: 'Detective', sequence: 1 },
                corrective: { label: 'Corrective', sequence: 2 },
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        description: StringColumn({ 
            label: 'Description', 
            maxLength: 1000
        })
    },
    display: 'control_name',
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'public',
    allow_web_service_access: true,
    extensible: true
})