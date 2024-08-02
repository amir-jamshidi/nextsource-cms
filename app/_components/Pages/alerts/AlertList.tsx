import React from 'react'
import AlertTitleTable from './AlertTitleTable'
import { IAlert } from '@/app/_types/alert'
import NoItemTable from '../../Modules/NoItemTable'
import Pagination from '../../Modules/Pagination'
import { SHOW_IN_PAGE } from '@/app/_constants/gobalVariables'
import AlertItem from './AlertItem'

interface AlertListProps {
    alerts: IAlert[],
    alertsCount: number
}

const AlertList = ({ alerts, alertsCount }: AlertListProps) => {
    return (
        <div className='rounded-xl bg-white flex flex-col border divide-y divide-primary-0 border-primary-50 overflow-hidden'>
            <AlertTitleTable />
            {alerts.length > 0 ? (<>
                {alerts.map((alert, i) => (
                    <AlertItem key={String(alert._id)} alert={alert} index={i + 1} />
                ))}
            </>) : (<NoItemTable text='پیامی' />)}
            < Pagination sourceCount={alertsCount} showInPage={SHOW_IN_PAGE} />
        </div>
    )
}

export default AlertList