import { IOrder } from '@/app/_types/order'
import { Table, TableBody } from "@/components/ui/table"
import NoItemTable from '../../Modules/NoItemTable'
import Pagination from '../../Modules/Pagination'
import OrderItem from './OrderItem'
import OrderTitleTable from './OrderTitleTable'
import { IOrderList } from '@/app/_types'

const OrderList = ({ orders, ordersCount }: IOrderList) => {
    return (
        <div className='rounded-xl dark:bg-primary-900 dark:divide-primary-800 bg-white flex flex-col border divide-y divide-primary-50 border-primary-50 dark:border-primary-800 overflow-hidden'>
            {orders.length > 0 ? (<>
                <Table dir='rtl'>
                    <OrderTitleTable />
                    <TableBody>
                        {orders.map((order, i) => (
                            <OrderItem index={i + 1} order={order} key={String(order._id)} />
                        ))}
                    </TableBody>
                </Table>
                <Pagination sourceCount={ordersCount} showInPage={10} />
            </>) : (
                <NoItemTable text='سفارشی' />
            )}
        </div>
    )
}

export default OrderList