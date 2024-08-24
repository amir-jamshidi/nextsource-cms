import { ISingleUserSections } from '@/app/_types'
import UserRecentOrders from './UserRecentOrders'
import UserRecentTickets from './UserRecentTickets'

const SingleUserSections = ({ tickets, orders }: ISingleUserSections) => {
    return (
        <div className='grid grid-cols-1 gap-2.5'>
            <UserRecentOrders orders={orders} />
            <UserRecentTickets tickets={tickets} />
        </div>
    )
}

export default SingleUserSections