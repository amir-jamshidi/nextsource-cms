import React from 'react'

const UserTitleTable = () => {
    return (
        <div className='ticket-list gap-2 h-16 bg-primary-0 dark:bg-primary-900 px-4'>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>ردیف</p>
            </div>
            <div className='h-full flex items-center col-span-2'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>نام</p>
            </div>
            <div className='h-full flex items-center col-span-2'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>ایمیل</p>
            </div>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>شماره تلفن</p>
            </div>
            <div className='h-full flex items-center col-span-1 '>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>موجودی ولت</p>
            </div>
            <div className='h-full flex items-center col-span-1 '>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>تاریخ پیوستن</p>
            </div>

            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>نقش</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>بیشتر</p>
            </div>
        </div>
    )
}

export default UserTitleTable