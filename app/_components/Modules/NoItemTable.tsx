import React from 'react'
import { HiOutlineCube } from 'react-icons/hi2'

const NoItemTable = ({ text }: { text: string }) => {
    return (
        <div className='flex justify-center items-center py-8'>
            <div className="flex items-center justify-center gap-x-2 bg-primary-0 px-8 rounded-2xl py-2">
                <span className='p-2 rounded-full bg-red-200'>
                    <HiOutlineCube size={45} className='text-red-500' />
                </span>
                <p className=' py-6 text-sm font-mo text-primary-600 text-center'>در این بازه زمانی {text} ثبت نشده</p>
            </div>
        </div>
    )
}

export default NoItemTable