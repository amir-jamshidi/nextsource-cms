import { Table, TableBody } from '@/components/ui/table'
import React from 'react'
import OrderTitleTable from '../orders/OrderTitleTable'
import OrderItem from '../orders/OrderItem'
import { IOrder } from '@/app/_types/order'

const UserRecentOrders = ({ orders }: { orders: IOrder[] }) => {
  return (
    <div className='bg-white border dark:bg-primary-900 dark:border-primary-800/50 border-primary-50 p-4 rounded-xl min-h-64'>
      <div className='flex gap-x-1.5 items-center'>
        <div className='w-5 h-5 bg-blue rounded-full' />
        <h3 className='font-mo text-lg text_800_100'>خرید های کاربر</h3>
      </div>
      <div className='my-4'>
        {orders.length > 0 ? (<Table dir='rtl'>
          <OrderTitleTable />
          <TableBody>
            {orders.map((order, i) => (
              <OrderItem index={i + 1} order={order} key={String(order._id)} />
            ))}
          </TableBody>
        </Table>) :
          (
            <div className='h-full w-full flex items-center justify-center'>
              <p className='text_700_200 font-mo text-sm mt-12'>هنوز آیتمی ثبت نشده</p>
            </div>
          )}

      </div>
    </div>
  )
}

export default UserRecentOrders