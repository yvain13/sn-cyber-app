import '@servicenow/sdk/global'
import { Table, StringColumn, ChoiceColumn, ReferenceColumn } from '@servicenow/sdk/core'

// Security Incidents Table
export const x_1433234_cyber_ri_security_incident = Table({
    name: 'x_1433234_cyber_ri_security_incident',
    label: 'Security Incidents',
    schema: {
        incident_number: StringColumn({ 
            label: 'Incident Number', 
            maxLength: 50,
            mandatory: true
        }),
        category: ChoiceColumn({
            label: 'Category',
            choices: {
                malware: { label: 'Malware', sequence: 0 },
                data_loss: { label: 'Data Loss', sequence: 1 },
                intrusion: { label: 'Intrusion', sequence: 2 },
                suspicious_activity: { label: 'Suspicious Activity', sequence: 3 },
            },
            dropdown: 'dropdown_with_none',
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
        related_application: ReferenceColumn({ 
            label: 'Related Application', 
            referenceTable: 'x_1433234_cyber_ri_cmdb_application'
        }),
        related_vulnerability: ReferenceColumn({ 
            label: 'Related Vulnerability', 
            referenceTable: 'x_1433234_cyber_ri_vulnerability'
        }),
        description: StringColumn({ 
            label: 'Description', 
            maxLength: 1000
        })
    },
    display: 'incident_number',
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'public',
    allow_web_service_access: true,
    extensible: true
})