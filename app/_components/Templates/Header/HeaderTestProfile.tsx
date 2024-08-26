import Image from 'next/image'
import React from 'react'

const HeaderTestProfile = () => {
    return (
        <div className='lg:flex hidden gap-x-2.5 items-center'>
            <div className='rounded-full h-11 w-11 overflow-hidden border border-primary-50 dark:border-primary-800/50'>
                <Image quality={100} width={44} height={44} className='overflow-hidden' src={'/images/admin.jpg'} alt='' />
            </div>
            <div className='flex flex-col items-start gap-y-0.5'>
                <p className='font-mo text-primary-800 tracking-tight dark:text-primary-100 line-clamp-1'>امیرحسین جمشیدی</p>
                <p className='text-white text-xs font-mo bg-green-400 dark:bg-green-600 dark:text-primary-100 rounded px-2'>مدیریت</p>
            </div>
            <div className='border-2 border-green-400  rounded-lg px-3 py-1'>
                <p className='text-xs font-mo dark:border-green-600 text-green-400 line-clamp-1'>حالت تستی</p>
            </div>
            <p className='text-sm font-mo dark:text-primary-600 text-primary-300 line-clamp-1'>در این حالت شما اجازه حذف یا ویرایش را ندارید ، لطفا وارد حساب خود شوید</p>
        </div>
    )
}

export default HeaderTestProfile