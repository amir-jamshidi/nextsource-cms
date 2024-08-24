'use client'
import { HiOutlineXCircle } from 'react-icons/hi2'

const NotFound = () => {
    return (
        <div className='flex justify-center gap-x-2 items-center min-h-dvh'>
            <div className='p-1.5 bg-red-500/50 rounded-full'>
                <div className='p-3 bg-red rounded-full'>
                    <HiOutlineXCircle size={25} className='text-white' />
                </div>
            </div>
            <p className='font-mo text-lg text-primary-700 dark:text-primary-300'>خطای غیر منتظره ای رخ داد</p>
        </div>
    )
}

export default NotFound