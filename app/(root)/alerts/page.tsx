import { getAlerts } from '@/app/_actions/alert'
import AlertsContainer from '@/app/_components/Pages/alerts/AlertsContainer';
import { IAlert } from '@/app/_types/alert';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'پیام همگانی'
}

interface IAlertsProps {
  searchParams: {
    page: number,
    type: 'all' | 'success' | 'warning' | 'error'
  }
}
const Alerts = async ({ searchParams: { page = 1, type = 'all' } }: IAlertsProps) => {
  const { alerts, alertsDetails } = await getAlerts({ page, type });
  return (
    <AlertsContainer alerts={alerts} alertsDetails={alertsDetails} />
  )
}

export default Alerts