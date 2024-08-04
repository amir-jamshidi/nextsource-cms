import React from 'react'
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi2'

const Switch = ({ isActive }: { isActive: boolean }) => {
    return (
        <>
            {
                isActive && (
                    <span className='p-1 bg-green-300 dark:bg-green-900 rounded-full'>
                        <HiOutlineCheckCircle size={20} className='dark:text-green-200 text-green-600' />
                    </span>
                )
            }
            {
                !isActive && (
                    <span className='p-1 bg-red-300 dark:bg-red-900 rounded-full'>
                        <HiOutlineXCircle size={20} className='dark:text-red-200 text-red-600' />
                    </span>
                )
            }
        </>
    )
}

export default Switch