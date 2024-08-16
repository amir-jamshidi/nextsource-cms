import React from 'react'
import UserRecentOrders from './UserRecentOrders'
import UserRecentTickets from './UserRecentTickets'
import { ITicket } from '@/app/_types/ticket'
import { IOrder } from '@/app/_types/order'

const SingleUserSections = ({ tickets, orders }: { tickets: ITicket[], orders: IOrder[] }) => {
    return (
        <div className='grid grid-cols-1 gap-2.5'>
            <UserRecentOrders orders={orders} />
            <UserRecentTickets tickets={tickets} />
        </div>
    )
}

export default SingleUserSections