import { IAlert } from '@/app/_types/alert'
import React from 'react'
import { HiOutlineCheckCircle, HiOutlinePlay, HiOutlinePower, HiOutlineTrash, HiOutlineXCircle } from 'react-icons/hi2'
import AlertButtons from './AlertButtons'

const AlertItem = ({ alert, index }: { alert: IAlert, index: number }) => {
    return (
        <div className='ticket-list h-16 gap-2 px-4'>
            <div className='col-span-1 h-full w-full flex items-center'>
                <p className='font-ir-bold text-sm text-primary-800 dark:text-primary-100 pr-3'>{index}</p>
            </div>
            <div className='col-span-1 h-full w-full flex flex-col justify-center '>
                <p className='font-ir-bold text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{alert.title}</p>
            </div>
            <div className='col-span-4 h-full w-full flex items-center'>
                <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{alert.body}</p>
            </div>
            <div className='col-span-1 h-full w-full flex justify-center flex-col'>
                {alert.href && (
                    <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{alert.href}</p>
                )}
                {!alert.href && (
                    <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>ندارد</p>
                )}
            </div>
            <div className='col-span-1 h-full w-full flex justify-center items-center'>
                {alert.type === 'SUCCESS' && <span className='text-xs bg-green-200 dark:bg-green-300 rounded-xl px-2 py-1 font-ir-bold text-primary-800 dark:text-primary-700 tracking-tight'>موفق</span>}
                {alert.type === 'WARNING' && <span className='text-xs bg-amber-200 dark:bg-amber-300 rounded-xl px-2 py-1 font-ir-bold text-primary-800 dark:text-primary-700 tracking-tight'>هشدار</span>}
                {alert.type === 'ERROR' && <span className='text-xs bg-rose-200 dark:bg-rose-300 rounded-xl px-2 py-1 font-ir-bold text-primary-800 dark:text-primary-700 tracking-tight'>خطا</span>}
            </div>
            <div className='col-span-1 h-full w-full flex items-center justify-center'>
                {alert.isShow && (
                    <span className='p-1 bg-green-200 dark:bg-green-300 rounded-full'>
                        <HiOutlineCheckCircle size={20} className='text-green-500' />
                    </span>
                )}
                {!alert.isShow && (
                    <span className='p-1 bg-rose-200 dark:bg-rose-300 rounded-full'>
                        <HiOutlineXCircle size={20} className='text-rose-500' />
                    </span>
                )}
            </div>
            <div className='col-span-1 h-full w-full flex items-center gap-x-1 justify-center'>
                <AlertButtons alert={JSON.parse(JSON.stringify(alert))} />
            </div>
        </div>
    )
}

export default AlertItem