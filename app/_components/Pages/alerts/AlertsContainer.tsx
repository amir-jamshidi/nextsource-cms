import { IAlert } from '@/app/_types/alert'
import React from 'react'
import AlertFilter from './AlertFilter'
import AlertDetailsBoxes from './AlertDetailsBoxes'
import AlertList from './AlertList'
import PageContainer from '../../Modules/PageContainer'


interface AlertsContainerProps {
  alerts: IAlert[],
  alertsDetails: {
    alertsCount: number,
    alertsSuccessCount: number,
    alertWarningCount: number,
    alertErrorCount: number
  }
}


const AlertsContainer = ({ alerts, alertsDetails }: AlertsContainerProps) => {
  return (
    <PageContainer>
      <AlertFilter />
      <AlertDetailsBoxes alertsDetails={alertsDetails} />
      <AlertList alerts={alerts} alertsCount={alertsDetails.alertsCount} />
    </PageContainer>
  )
}

export default AlertsContainer