import { IGetDashboard } from '@/app/_types'
import PageContainer from '../../Modules/PageContainer'
import DashboardDetailsBoxes from './DashboardDetailsBoxes'
import DashboardFilter from './DashboardFilter'
import SaleChart from './DashboardSaleChart'
import DashboardSections from './DashboardSections'
interface IDashboardContainer {
    dashboard: IGetDashboard
}
const DashboardContainer = ({ dashboard }: IDashboardContainer) => {
    return (
        <PageContainer>
            <DashboardFilter />
            <DashboardDetailsBoxes dashboardDetails={dashboard.dashboardDetails} />
            <SaleChart saleChartDetails={dashboard.saleChartDetails} />
            <DashboardSections dashboard={dashboard} />
        </PageContainer>
    )
}

export default DashboardContainer