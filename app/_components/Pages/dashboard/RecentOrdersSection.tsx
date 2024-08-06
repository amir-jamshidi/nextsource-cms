import React from 'react'
import Badge from '../../Modules/Badge'
import MoreButton from '../../Modules/MoreButton'

const RecentOrdersSection = ({ recentOrders }) => {
    return (
        <div className='px-4 py-2 flex flex-col rounded-2xl dark:bg-primary-900 border  dark:border-primary-800/50'>
            <div className="pt-2 pb-4 mb-2 flex items-center justify-between gap-x-1.5 border-b border-b-primary-800/60">
                <div className='flex items-center gap-x-1.5'>
                    <span className="flex w-4 h-4 bg-blue-600 rounded-full"></span>
                    <p className="font-mo text-primary-100 text-lg">سفارش های اخیر</p>
                </div>
                <MoreButton />
            </div>
            <div className='flex flex-col divide-y divide-primary-800/50'>
                {recentOrders.map(order => (
                    <div key={order._id} className='py-3 grid grid-cols-5 px-2 gap-x-3'>
                        <div className='line-clamp-1 flex items-center col-span-2'>
                            <p className="text-sm text-primary-100 line-clamp-1">{order.productID.title}</p>
                        </div>
                        <div className='line-clamp-1'>
                            {order.totalPrice > 0 ? (
                                <p className='text-sm font-ir text-green-500'>{Number(order.totalPrice).toLocaleString()} تومان</p>
                            ) : (
                                <p className='text-sm font-ir text-red-600'>رایگـــان</p>
                            )}
                        </div>
                        <div className='flex items-center justify-center'>
                            <Badge icon={false} text={new Date(order.createdAt).toLocaleDateString('fa-IR')} type='violet' />
                        </div>
                        <div className="flex items-center justify-center">
                            {order.action === 'ONLINE' ? (
                                <Badge icon={false} text='نقدی' type='blue' />
                            ) : (
                                <Badge icon={false} text='ولت' type='green' />
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default RecentOrdersSection