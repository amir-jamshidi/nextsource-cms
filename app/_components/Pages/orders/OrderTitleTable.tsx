import React from 'react'

const OrderTitleTable = () => {
    return (
        <div className='order-list gap-2 h-16 bg-primary-0 px-4'>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>ردیف</p>
            </div>
            <div className='h-full flex items-center col-span-2'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>نام محصول</p>
            </div>
            <div className='h-full flex items-center col-span-2'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>شناسه سفارش</p>
            </div>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>تاریخ</p>
            </div>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>پرداختی</p>
            </div>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>کاربر</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>روش پرداخت</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>بیشتر</p>
            </div>
        </div>
    )
}

export default OrderTitleTable