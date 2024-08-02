import React from 'react'

const UserTitleTable = () => {
    return (
        <div className='ticket-list gap-2 h-16 bg-primary-0 px-4'>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>ردیف</p>
            </div>
            <div className='h-full flex items-center col-span-2'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>نام</p>
            </div>
            <div className='h-full flex items-center col-span-2'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>ایمیل</p>
            </div>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>شماره تلفن</p>
            </div>
            <div className='h-full flex items-center col-span-1 '>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>موجودی ولت</p>
            </div>
            <div className='h-full flex items-center col-span-1 '>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>تاریخ پیوستن</p>
            </div>

            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>نقش</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>بیشتر</p>
            </div>
        </div>
    )
}

export default UserTitleTable