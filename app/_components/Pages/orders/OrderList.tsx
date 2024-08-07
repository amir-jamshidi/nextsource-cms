import { IOrder } from '@/app/_types/order'
import React from 'react'
import OrderItem from './OrderItem'
import Pagination from '../../Modules/Pagination'
import OrderTitleTable from './OrderTitleTable'
import { HiOutlineCube } from 'react-icons/hi2'
import NoItemTable from '../../Modules/NoItemTable'

const OrderList = ({ orders, ordersCount }: { orders: IOrder[], ordersCount: number }) => {
    return (
        <div className='rounded-xl dark:bg-primary-900 dark:divide-primary-800 bg-white flex flex-col border divide-y divide-primary-0 border-primary-50 dark:border-primary-800 overflow-hidden'>
            <div className='overflow-x-auto'>
                <OrderTitleTable />

                {orders.length > 0 ? (<>

                    {orders.map((order, i) => (
                        <OrderItem index={i + 1} order={order} key={String(order._id)} />
                    ))}
                </>) : (
                    <NoItemTable text='سفارشی' />
                )}
            </div>

            <Pagination sourceCount={ordersCount} showInPage={10} />
        </div>
    )
}

export default OrderList