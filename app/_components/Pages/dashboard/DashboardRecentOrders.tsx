import React from 'react'
import Badge from '../../Modules/Badge'
import MoreButton from '../../Modules/MoreButton'
import { orderMenuChart } from '@/app/_constants'
import { IOrder } from '@/app/_types/order'
import { IProduct } from '@/app/_types/product'

const RecentOrdersSection = ({ recentOrders }: { recentOrders: IOrder[] }) => {
    return (
        <div className='px-4 py-2 flex flex-col rounded-xl bg-white dark:bg-primary-900 border border-primary-100/50 dark:border-primary-800/50 h-[340px]'>
            <div className="pt-2 pb-4 mb-2 flex items-center justify-between gap-x-1.5 border-b border-b-primary-50 dark:border-b-primary-800/60">
                <div className='flex items-center gap-x-1.5'>
                    <span className="flex w-4 h-4 dark:bg-blue-600 bg-blue-400 rounded-full"></span>
                    <p className="font-mo dark:text-primary-100 text-lg text-primary-800">سفارش های اخیر</p>
                </div>
                <MoreButton items={orderMenuChart} />
            </div>
            <div className='flex flex-col divide-y divide-primary-50 dark:divide-primary-800/50'>
                {recentOrders.map(order => {
                    const product = order.productID as IProduct
                    return (
                        <div key={String(order._id)} className='py-3 grid grid-cols-5 px-2 gap-x-3'>
                            <div className='line-clamp-1 flex items-center col-span-2'>
                                <p className="text-sm dark:text-primary-100 line-clamp-1 text-primary-700">{product.title}</p>
                            </div>
                            <div className='line-clamp-1 col-span-2 md:col-span-1'>
                                {order.totalPrice > 0 ? (
                                    <p className='text-sm font-ir text-green-500'>{Number(order.totalPrice).toLocaleString()} تومان</p>
                                ) : (
                                    <div className='flex'>
                                        <Badge icon={false} text='رایگــان' type='red' />
                                    </div>
                                )}
                            </div>
                            <div className='flex items-center justify-center'>
                                <Badge icon={false} text={new Date(order.createdAt || 0).toLocaleDateString('fa-IR')} type='violet' />
                            </div>
                            <div className="md:flex items-center justify-center hidden">
                                {order.action === 'ONLINE' ? (
                                    <Badge icon={false} text='نقدی' type='blue' />
                                ) : (
                                    <Badge icon={false} text='ولت' type='green' />
                                )}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default RecentOrdersSection