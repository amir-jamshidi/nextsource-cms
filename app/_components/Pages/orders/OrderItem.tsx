import { IOrder } from '@/app/_types/order'
import { IProduct } from '@/app/_types/product'
import { IUser } from '@/app/_types/user'
import React from 'react'
import { HiOutlineEye } from 'react-icons/hi2'
import OrderShowButton from '../orders/OrderShowButton'



const OrderItem = ({ order, index }: { order: IOrder, index: number }) => {

    const product = order.productID as IProduct
    const user = order.userID as IUser
    const creator = product.creatorID as IUser;

    return (
        <div className='order-list h-16 gap-2 px-4'>
            <div className='col-span-1 h-full w-full flex items-center'>
                <p className='font-ir-bold text-sm text-primary-800 pr-3'>{index}</p>
            </div>
            <div className='col-span-2 h-full w-full flex flex-col justify-center '>
                <p className='font-ir-medium text-sm text-primary-800 tracking-tight'>{product.title}</p>
                <p className='font-ir-medium text-primary-600 text-xs tracking-tight'>{product.href}</p>
            </div>
            <div className='col-span-2 h-full w-full flex flex-col justify-center'>
                <p className='font-ir-medium text-sm text-primary-800 tracking-tight'>{order.code}</p>
                <div className='flex items-center gap-x-0.5'>
                    <p className='font-ir-medium text-primary-600 text-xs tracking-tight'>فروشنده :</p>
                    <p className='font-ir-medium text-primary-600 text-xs tracking-tight'>{creator.email}</p>
                </div>
            </div>
            <div className='col-span-1 h-full w-full flex flex-col justify-center'>
                <p className='font-ir-medium text-sm text-primary-800 tracking-tight'>{new Date(order.createdAt || 0).toLocaleDateString('fa-IR')}</p>
                <p className='font-ir-medium text-primary-600 text-xs tracking-tight'>{new Date(order.createdAt || 0).toLocaleTimeString('fa-IR')}</p>

            </div>
            <div className='col-span-1 h-full w-full flex items-center gap-x-0.5'>
                {order.totalPrice > 0 && (
                    <>
                        <p className='font-ir-medium text-sm text-green-600 tracking-tight'>{Number(order.totalPrice).toLocaleString()}</p>
                        <p className='text-sm text-green-600 font-ir-medium tracking-tight'>تومان</p>
                    </>
                )}
                {order.totalPrice <= 0 && (<p className='tracking-tight text-red-500 font-ir-medium text-sm'>رایگــان</p>)}
            </div>
            <div className='col-span-1 h-full w-full flex justify-center gap-x-0.5 flex-col'>
                <p className='font-ir-medium text-sm text-primary-800 tracking-tight'>{user.phone}</p>
                {/* <p className='font-ir-medium text-primary-600 text-xs tracking-tight line-clamp-1'>{user.email || 'ایمیل ندارد'}</p> */}
            </div>
            <div className='col-span-1 h-full w-full flex items-center justify-center'>
                {order.action === 'ONLINE' && <span className='text-xs bg-rose-200 rounded-xl px-2 py-1 font-ir-bold text-primary-800 tracking-tight'>پرداخت نقدی</span>}
                {order.action === 'WALLET' && <span className='text-xs bg-violet-200 rounded-xl px-2 py-1 font-ir-bold text-primary-800 tracking-tight'>پرداخت ولت</span>}
            </div>
            <div className='col-span-1 h-full w-full flex items-center gap-x-0.5 justify-center'>
                <OrderShowButton order={JSON.parse(JSON.stringify(order))} />
            </div>
        </div>
    )
}

export default OrderItem