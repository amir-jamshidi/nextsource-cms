import { ITicket } from '@/app/_types/ticket'
import React from 'react'
import TicketItem from './TicketItem'
import Pagination from '../../Modules/Pagination'
import TicketTitleTable from './TicketTitleTable'
import NoItemTable from '../../Modules/NoItemTable'
import { SHOW_IN_PAGE } from '@/app/_constants/gobalVariables'

interface ITicketsList {
    tickets: ITicket[]
    ticketsCount: number
}

const TicketList = ({ tickets, ticketsCount }: ITicketsList) => {
    return (
        <div className='rounded-xl bg-white flex flex-col border divide-y divide-primary-0 border-primary-50 overflow-hidden'>
            <TicketTitleTable />
            {tickets.length > 0 ? (<>
                {tickets.map((order, i) => (
                    <TicketItem index={i + 1} ticket={order} key={String(order._id)} />
                ))}
            </>) : (<NoItemTable text='تیکتی' />)}
            < Pagination sourceCount={ticketsCount} showInPage={SHOW_IN_PAGE} />
        </div>
    )
}

export default TicketList