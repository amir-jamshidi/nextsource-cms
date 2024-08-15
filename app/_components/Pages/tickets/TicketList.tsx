import { SHOW_IN_PAGE } from '@/app/_constants/gobalVariables'
import { ITicket } from '@/app/_types/ticket'
import { Table, TableBody } from '@/components/ui/table'
import NoItemTable from '../../Modules/NoItemTable'
import Pagination from '../../Modules/Pagination'
import TicketItem from './TicketItem'
import TicketTitleTable from './TicketTitleTable'

interface ITicketsList {
    tickets: ITicket[]
    ticketsCount: number
}

const TicketList = ({ tickets, ticketsCount }: ITicketsList) => {
    return (
        <div className='rounded-xl bg-white dark:bg-primary-900 flex flex-col border divide-y dark:divide-primary-800 dark:border-primary-800 divide-primary-0 border-primary-50 overflow-hidden'>
            {tickets.length > 0 ? (<>
                <Table dir='rtl'>
                    <TicketTitleTable />
                    <TableBody>
                        {tickets.map((ticket, i) => (
                            <TicketItem index={i + 1} ticket={ticket} key={ticket.body} />
                        ))}
                    </TableBody>
                </Table>
                < Pagination sourceCount={ticketsCount} showInPage={SHOW_IN_PAGE} />
            </>) : (<NoItemTable text='تیکتی' />)}
        </div>
    )
}

export default TicketList