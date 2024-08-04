import React from 'react'

const TicketTitleTable = () => {
    return (
        <div className='ticket-list gap-2 h-16 bg-primary-0 dark:bg-primary-900 px-4'>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>ردیف</p>
            </div>
            <div className='h-full flex items-center col-span-2'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>کاربر</p>
            </div>
            <div className='h-full flex items-center col-span-2'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>شناسه تیکت</p>
            </div>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>تاریخ</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>بخش</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>وضعیت</p>
            </div>

            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>پیگیری سفارش</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>بیشتر</p>
            </div>
        </div>
    )
}

export default TicketTitleTable