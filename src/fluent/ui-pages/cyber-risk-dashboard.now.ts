import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import dashboardPage from '../../client/index.html'

export const cyber_risk_intelligence_dashboard = UiPage({
  $id: Now.ID['cyber_risk_dashboard'], 
  endpoint: 'x_1433234_cyber_ri_dashboard.do',
  description: 'Cyber Risk Intelligence Dashboard with interactive analytics and drill-down capabilities',
  category: 'general',
  html: dashboardPage,
  direct: true
})