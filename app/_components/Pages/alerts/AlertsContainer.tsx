import { IAlert } from '@/app/_types/alert'
import React from 'react'
import AlertFilter from './AlertFilter'
import AlertDetailsBoxes from './AlertDetailsBoxes'
import AlertList from './AlertList'


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
    <div className='flex flex-col gap-y-10 pb-14'>
      <AlertFilter />
      <AlertDetailsBoxes alertsDetails={alertsDetails} />
      <AlertList alerts={alerts} alertsCount={alertsDetails.alertsCount} />
    </div>
  )
}

export default AlertsContainer