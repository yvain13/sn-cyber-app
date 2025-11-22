import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    app_customer_portal: {
                        table: 'x_1433234_cyber_ri_cmdb_application'
                        id: '0b41ec3c980448ef90d1bb6d3cc15e78'
                    }
                    app_documentation: {
                        table: 'x_1433234_cyber_ri_cmdb_application'
                        id: 'c05ccf30a362494e9182c655415c18d4'
                    }
                    app_employee_portal: {
                        table: 'x_1433234_cyber_ri_cmdb_application'
                        id: 'b258b277f38841e088683d67747071cb'
                    }
                    app_file_sharing: {
                        table: 'x_1433234_cyber_ri_cmdb_application'
                        id: 'bd5b16a4bdb24dcea039898790ec2d62'
                    }
                    app_inventory_mgmt: {
                        table: 'x_1433234_cyber_ri_cmdb_application'
                        id: '590e5c81fefd414ca647a27ca3a06cd0'
                    }
                    app_payment_gateway: {
                        table: 'x_1433234_cyber_ri_cmdb_application'
                        id: 'bfd368b9a71048d89aef53ee5f45f233'
                    }
                    app_reporting_dashboard: {
                        table: 'x_1433234_cyber_ri_cmdb_application'
                        id: 'f366c84546ad452589601475bab525b2'
                    }
                    app_testing_env: {
                        table: 'x_1433234_cyber_ri_cmdb_application'
                        id: '9120e64dbe7740cd800965fa5039cd21'
                    }
                    applications_module: {
                        table: 'sys_app_module'
                        id: 'c0ca10a413114b2c984e632fb451bc43'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '5be9dfdad1e34e9c8ed60cfb8f6aeec1'
                    }
                    control_access_controls: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: '721a6976715744a0b8cb110dc6d33ce0'
                    }
                    control_access_revocation: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: 'b4b309d05a8e4ede92dff8fdd2c60fcd'
                    }
                    control_api_security: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: '6071156c063d4894a7242279356fe5f4'
                    }
                    control_backup_recovery: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: '5fff4b0a88924014ba6bd43c782d5c66'
                    }
                    control_code_review: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: 'a91b50e736eb49ffb169495edacb0b6d'
                    }
                    control_data_classification: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: '23c13a88d4b6478ca99182e49df16050'
                    }
                    control_encryption: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: '8ac0939907444b8d88edc5cd2a4c249a'
                    }
                    control_firewall: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: 'af61123b4e774699a325563e4ea379ef'
                    }
                    control_incident_response: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: 'f6e3019342124c5db03eb7d21cbfab0c'
                    }
                    control_input_validation: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: '6b00f120c64f4b7581723fa1e17b623f'
                    }
                    control_intrusion_detection: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: '3a05352cc05f4dafa24df59f3907533f'
                    }
                    control_log_analysis: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: '6477c710175b4e98909c0d9e5909faef'
                    }
                    control_patch_management: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: '5b2e3d3c29dc444db0f224761ed16546'
                    }
                    control_privilege_management: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: '586981c3cc1f4fd4bb66204a672f668b'
                    }
                    control_secure_coding: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: 'f71fd9abae6c49b1972f0ef772bf9f8d'
                    }
                    control_security_monitoring: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: '5d4104fadb194eebb872adb11542470b'
                    }
                    control_threat_intelligence: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: 'cf814a97c99a4ac99c8b85ae8ebdd4c4'
                    }
                    control_vulnerability_scanning: {
                        table: 'x_1433234_cyber_ri_risk_control'
                        id: 'e2be097868374f4e83d332208ef6ee67'
                    }
                    cyber_risk_category: {
                        table: 'sys_app_category'
                        id: 'd133faa95cc646ae85a5a46ffb79c1aa'
                    }
                    cyber_risk_dashboard: {
                        table: 'sys_ui_page'
                        id: 'df3169455fd04425a601e7f14bbe4dbf'
                    }
                    cyber_risk_intelligence_menu: {
                        table: 'sys_app_application'
                        id: '00fe1ec87ec9456b93ba54fd6d955877'
                    }
                    dashboard_module: {
                        table: 'sys_app_module'
                        id: '7e0dbf3369b44f0e979a505324664e4d'
                    }
                    dashboard_separator: {
                        table: 'sys_app_module'
                        id: '54e1b37572a043fdaa693c794f9d88fc'
                    }
                    incident_account_takeover: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '497b01a8a8554f619683abfea9dc1692'
                    }
                    incident_code_execution: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: 'afb514bcae954cd58e3234fa62b3e919'
                    }
                    incident_crypto_weakness: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '380850bf0ad547fda0248f822db35e2b'
                    }
                    incident_data_breach: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: 'f2f40ef809f94adebd3922aa3ab35a51'
                    }
                    incident_data_leakage: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '657bf2e035784a17b9c56c9bac1534f4'
                    }
                    incident_dos_attack: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '9ebcf2d0af2f46698abb01bb3dd57a2f'
                    }
                    incident_file_access: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: 'd453962fed354d4996f63d1767535d95'
                    }
                    incident_insider_threat: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '41d98e3f7f2c439e88b9f1a44baf7a67'
                    }
                    incident_malware_payment: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '522bd8a336584032b5857819dc85c7f9'
                    }
                    incident_payment_fraud: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '0fbc562f15c54c1387ceeb52894f57e7'
                    }
                    incident_privilege_abuse: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '2245c68315764c23ab85fe80e466ac13'
                    }
                    incident_server_compromise: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '7e4e7830087e41d692879fe80938325b'
                    }
                    incident_session_hijack: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '6e3dd22b2d02469784089cadd87a8d09'
                    }
                    incident_suspicious_file: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '38437fa73470448783e276bb7303bd82'
                    }
                    incident_unauthorized_access: {
                        table: 'x_1433234_cyber_ri_security_incident'
                        id: '956531502db9453fb226211359c69602'
                    }
                    mapping_auth_mfa: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '655b8b465cdc4f008093a0f6e440cc36'
                    }
                    mapping_broken_auth_priv: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'd83e2ba7598048649d32cc5e636ccb66'
                    }
                    mapping_broken_auth_threat: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'a055468429cb4ee3bf8f3a1b22a3f584'
                    }
                    mapping_cmd_inj_input: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'a753042fbdf94e77937b3c0a0cd08e7f'
                    }
                    mapping_cmd_inj_priv: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'd054e95fa6b547e2bb596215eac65254'
                    }
                    mapping_cmd_inj_review: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '10001de18ef645c29ad74ea04122b92c'
                    }
                    mapping_crypto_encryption: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '3cc43772a66e44caa4643a6ea2def65b'
                    }
                    mapping_crypto_patch: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '3656e9781d3c42ae929c0d6ae8be9b53'
                    }
                    mapping_csrf_secure_code: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '06377fab16ac488b8f7d5499503c1763'
                    }
                    mapping_data_exp_class: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '5897746b272043e0aa86580228437327'
                    }
                    mapping_data_exp_encrypt: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'fd499558a6e1438ea80cf053bca28bb5'
                    }
                    mapping_data_exp_monitor: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '4291e3517124462eb25350792bb50b0d'
                    }
                    mapping_deserial_api: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'a18634280dc845f9a2ce715ec2ee9af0'
                    }
                    mapping_deserial_input: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '0fc394032b3e4f928139eac7e93d7612'
                    }
                    mapping_deserial_review: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '77cf4459db9a40d483208d00182debf7'
                    }
                    mapping_dir_trav_access: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '6cae4185d5d14815962c81b94e26c6bd'
                    }
                    mapping_dir_trav_data: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '59c015ff20674f9dba910bf981992f0a'
                    }
                    mapping_dir_trav_input: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'd1e1339a39574ec999b851e8586bb437'
                    }
                    mapping_dos_api: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'cc1d5245f8c2480bb588b87dafc29f90'
                    }
                    mapping_info_access: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'f6142554c83b481ab9e2218d5e98bae4'
                    }
                    mapping_info_siem: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'ede06a5c66f74277b8f8de18b4007708'
                    }
                    mapping_patches_patch: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'c7cbaeedf2594b76993412cc874faf04'
                    }
                    mapping_patches_scanning: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '759f690c26644e43b7c832754834cf55'
                    }
                    mapping_priv_esc_mgmt: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '1e96ff38404f48b581111262b008cc39'
                    }
                    mapping_priv_esc_monitor: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '14de61a7be0445c6aa325bda89dd2709'
                    }
                    mapping_priv_esc_review: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'f2eb6076937d41d0b865d96b5f67d956'
                    }
                    mapping_race_monitor: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'b5ce43dce714455d865d19e3ad802e34'
                    }
                    mapping_race_review: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'c970b298db9b4803ae2238917e692660'
                    }
                    mapping_race_secure: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'c6f7e97bcd674be4ae4eedbe3d76be57'
                    }
                    mapping_session_mfa: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'a328f323d37e4e4f9498cc9ca87a04b6'
                    }
                    mapping_session_siem: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'e868f9960ff5439eae6cf9cf11728571'
                    }
                    mapping_sql_input_val: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '1e56b1178430419a8f8a56351d90b229'
                    }
                    mapping_sql_secure_code: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'd7859bce3bd94a6489fdb70f6c511aad'
                    }
                    mapping_upload_input: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'a0385c6cf5d24066a433c0fb1ea8c624'
                    }
                    mapping_upload_scanning: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: 'b276212d5d4a4a949868092cf75a9f7e'
                    }
                    mapping_xss_input_val: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '6c86bff8428a41a2867732cf8afb29ec'
                    }
                    mapping_xss_secure_code: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '3c22c06aa8ef405f93686af918c65fd7'
                    }
                    mapping_xxe_api: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '8ca17d51e0ac4a2f83e5fc17c23784b7'
                    }
                    mapping_xxe_input: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '6354e84c614b4e3ca83b670a42548627'
                    }
                    mapping_xxe_review: {
                        table: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        id: '3688727ca6224aef98bfe4390c55d94f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '499f9323bdb8472bb99e4d948c61321d'
                    }
                    risk_controls_module: {
                        table: 'sys_app_module'
                        id: '999ceca87a6948fa9f25e10ecb31af0b'
                    }
                    security_incidents_module: {
                        table: 'sys_app_module'
                        id: '0dcd2424079542a0b2fac50e12e4255e'
                    }
                    vuln_auth_bypass: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: '431baca1e4c84d22bc7668e47a2a37aa'
                    }
                    vuln_broken_auth: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: 'bc776dc534a7473cb13dea0573bc9f03'
                    }
                    vuln_command_injection: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: '4d63475137ff43e19caa4f5f70dc1e5c'
                    }
                    vuln_csrf_employee: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: '06d34feeb2024c49a6aba944a4495125'
                    }
                    vuln_directory_traversal: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: '1ec69f92ad5c4fd5a718755dd8b81e15'
                    }
                    vuln_dos_potential: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: 'fe41ebaf33b44005926a00a112f3ba94'
                    }
                    vuln_file_upload: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: 'b6bc9301ed3949ef95fba105d6f6c6f9'
                    }
                    vuln_info_disclosure: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: 'dc54172640404cde8216767e209c3c18'
                    }
                    vuln_insecure_deserialization: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: '6c0db4c611594653819c5552be4317c0'
                    }
                    vuln_missing_patches: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: 'f45f3f46bba6430398aa5c2032a23207'
                    }
                    vuln_privilege_escalation: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: '9806fa92c80546909fa82ee4bbd68816'
                    }
                    vuln_race_condition: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: '70c38bc3f2814632ae2db5ac18ea65a6'
                    }
                    vuln_sensitive_data_exposure: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: 'ec9dfc774ae24165bea57d2d8cc3c1d9'
                    }
                    vuln_session_mgmt: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: '60927189d3e6481b9de7216356e4a245'
                    }
                    vuln_sql_injection: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: 'c99147f164974669b67a42fbd1061904'
                    }
                    vuln_weak_crypto: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: '3a925c5f0ffc4d349b707a8512368267'
                    }
                    vuln_xss_payment: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: 'e203caf18d7949e9abb3fc65152f1562'
                    }
                    vuln_xxe_injection: {
                        table: 'x_1433234_cyber_ri_vulnerability'
                        id: 'c460e6debf2348edbe2c7f0d6b00939d'
                    }
                    vulnerabilities_module: {
                        table: 'sys_app_module'
                        id: '0c6ea07692244f29a6e094bae2646edf'
                    }
                    'x_1433234_cyber_ri/main': {
                        table: 'sys_ux_lib_asset'
                        id: '0ba3ede0e9104bd78517abdd3e4eeb95'
                    }
                    'x_1433234_cyber_ri/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '868b28f078ae4b0bab02a8d13af6e406'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '02998c408a6c4814a1b190f271dfbc9b'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                            element: 'control_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '039113f802744efea93d973042fa300e'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'application'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '04f549e2b669472b94a44797fb460e3c'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09cdb40ac40943b493268dddbefd431d'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'related_vulnerability'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a5683d15b3e442eac6d6a26d0b9035e'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'category'
                            value: 'data_loss'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c47f1aac54d49e7ad0d77e9e83b6ea7'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                            element: 'risk_control'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '111b37d1657e4ef0988336ae57955e1d'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'status'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12f25fd408e84b50a1bb391a5a717ec4'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'incident_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16414b80f27a42c1b5981b69537de01b'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16ffb494369c4b97b451497ac860251c'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '189ad324ff354939955cee359c0317f6'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18e0a280222d42b188205ed54a5c49e0'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'severity'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2696065206f548ae9af5260c4cfe0bc4'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'criticality'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '271ebd815b9741629f60e229be5514f5'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '277836ccfe4c483fa690c0bd6df9383f'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'severity'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d8f8354f0344931b442045fa9009e9c'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'support_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3091008db85c41369cfb35cae739adbe'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '393a2603f14c4cdeb2b3e4eea5e741fa'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'criticality'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39509262c0154cc8b2803868203693c2'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'related_vulnerability'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4688ff0a6b9a45b096b5ad5e36b9fbc7'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '46bc8ac847584280a7dafcf2a010f734'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '49cfe2177a4c40efabf7a1ad530492da'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'category'
                            value: 'malware'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d80434bf3f0443ca664a1d6f31f39b0'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'application'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52c6be41c5f54d43a64b7d2995c105fc'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '52e0e93633144d5485a3a9f56d0357cb'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'category'
                            value: 'intrusion'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '552dc28218764dbe92a5cae7bef15846'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'severity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '569543c9be464a2e9af5e2a466d34a71'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b45df5ac5394d699a73d47b6c8a8968'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '73eabcbcbf6141c0962bd83733588ff4'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'severity'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '75997e66693d49019cfb6c0e791787cb'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '784cda2f70e9426baa043c2123b85138'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7c306800c03e4e4ebe234e2d428aeb03'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                            element: 'control_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '809ba12da9a34030b7ae861659ba69fc'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8540000cc3bc47058669f20269d0734e'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8924911d9d494606a0689ab457fa544a'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8c4ae911fdc84e6fb9164598e3c8f87f'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e88feddd68841e0a6ede6ac70e8d862'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9368c04a84ff47aa81470dcb47329b01'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'severity'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '938840697d2f4d6fa7341c48cd7a4d5d'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                            element: 'control_type'
                            value: 'preventive'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '93e66c5e0c57468abcd126a11fdc92ea'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'severity'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9561e558ca334d8fb385be7c7430d674'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'category'
                            value: 'suspicious_activity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9adfa47232534ee9822d90b58e2dbf57'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'severity'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a09a250af0b54caa93e1af4e612fdc57'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a521fd2b12824159bd35198577601f6e'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a5d3ed30e98c472d88f88784d3f0b9f2'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a74cd601ae224bef92344906fcb9c577'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac60be1fa35d443cbeb2d9cbdb4d810e'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'related_application'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aff85ce9af484ae08db11c9896f6ccd7'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'criticality'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b16a6ed1b8c44821b4aaee1cbd30b806'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b1bba7d6719b4f1ba84d0158484c0847'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b297f0233cf54e0fa185cfad1a56cade'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'criticality'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b58161c1a1344d10aa55c9eec36e403e'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'severity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba483fdaf3204167ba137a27dac85c04'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf429a5a008c429dbe6075c7a59089af'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'business_owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c075062c9d3040e4ac0b91c5a6f7da4c'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c08a184cec3a4f39a22f203127d8d793'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'related_application'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c4d956acb6d449248060ac55212d3f0c'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                            element: 'control_type'
                            value: 'corrective'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5a2590c49704e1cba9b9207a7888a60'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cbbf913555c4400eb07f4a4ba6a840b3'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'cbd8b511a807466f865914280f4d24fc'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cebf02bca91d40e088b9b21664683664'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                            element: 'control_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cedab5433ed14b5592d644aebc8be398'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'criticality'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0320ef7781f4057b6779a8e17708e08'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                            element: 'vulnerability'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd50a15fd44704edf8736830cb4347e2b'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                            element: 'vulnerability'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8230815376f4dc9831a1290612c009f'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                            element: 'control_type'
                            value: 'detective'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd94cb281edb5442b9e9018644fc474dd'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'daaf8c0013a34826b842f151b7372e96'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e03b4dce6df84a93900cf2586809edf0'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'support_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e0c942d5a3794e2faa75c437af223916'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2976b98048b4cbf82f0bda54cda6ea4'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'criticality'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e38f3b1735e6484d8354faf62ffd9178'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                            element: 'risk_control'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5456f07153e489bbf979d25de46c139'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8326b897e2a400e9c00edd57cba8bb1'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eab0bdab7a2a48debbc4865ffe395827'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'business_owner'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed549b3105e04983a2ad9277a6eadca0'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability_risk_control_m2m'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'efa3a258312f4273b99572f371035674'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'severity'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f058d60f3d21490e96ee2a5ef49a634a'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                            element: 'control_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f6ffbfc821294d188a63c596e3164e68'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f7593ee089fc4f2fa9f422c2cf0d7e5d'
                        key: {
                            name: 'x_1433234_cyber_ri_risk_control'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f821975c851a4a9ebd11683258cbdba9'
                        key: {
                            name: 'x_1433234_cyber_ri_vulnerability'
                            element: 'severity'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f95f1b0f3dbf499fb41e4290c8770907'
                        key: {
                            name: 'x_1433234_cyber_ri_security_incident'
                            element: 'incident_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fac1f23cbaa1477683dc5373b11917bd'
                        key: {
                            name: 'x_1433234_cyber_ri_cmdb_application'
                            element: 'name'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
