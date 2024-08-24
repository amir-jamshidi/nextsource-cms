
import { SHOW_IN_PAGE } from '@/app/_constants/gobalVariables'
import { IAlertsList } from '@/app/_types'
import { Table } from '@/components/ui/table'
import NoItemTable from '../../Modules/NoItemTable'
import Pagination from '../../Modules/Pagination'
import AlertItem from './AlertItem'
import AlertTitleTable from './AlertTitleTable'



const AlertList = ({ alerts, alertsCount }: IAlertsList) => {

    return (
        <div className='rounded-xl bg-white dark:bg-primary-900 dark:shadow-none dark:divide-primary-800 dark:border-primary-800 flex flex-col border divide-y divide-primary-0 border-primary-50 overflow-hidden'>
            {alerts.length > 0 ? (<>
                <Table>
                    <AlertTitleTable />
                    {alerts.map((alert, i) => (
                        <AlertItem key={String(alert._id)} alert={alert} index={i + 1} />
                    ))}
                </Table>
                < Pagination sourceCount={alertsCount} showInPage={SHOW_IN_PAGE} />
            </>) : (<NoItemTable text='پیامی' />)}
        </div>
    )
}

export default AlertList