import { IGetAlerts } from '@/app/_types'
import PageContainer from '../../Modules/PageContainer'
import AlertDetailsBoxes from './AlertDetailsBoxes'
import AlertFilter from './AlertFilter'
import AlertList from './AlertList'


const AlertsContainer = ({ alerts, alertsDetails }: IGetAlerts) => {
  return (
    <PageContainer>
      <AlertFilter />
      <AlertDetailsBoxes alertsDetails={alertsDetails} />
      <AlertList alerts={alerts} alertsCount={alertsDetails.alertsCount} />
    </PageContainer>
  )
}

export default AlertsContainer