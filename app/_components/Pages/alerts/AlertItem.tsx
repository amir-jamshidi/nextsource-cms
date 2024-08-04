import { IAlert } from '@/app/_types/alert'
import React from 'react'
import { HiOutlineCheckCircle, HiOutlinePlay, HiOutlinePower, HiOutlineTrash, HiOutlineXCircle } from 'react-icons/hi2'
import AlertButtons from './AlertButtons'
import Badge from '../../Modules/Badge'
import Switch from '../../Modules/Switch'

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
                {alert.type === 'SUCCESS' && <Badge text='موفق' type='green' icon={false} />}
                {alert.type === 'WARNING' && <Badge text='هشدار' type='amber' icon={false} />}
                {alert.type === 'ERROR' && <Badge text='خطا' type='red' icon={false} />}
            </div>
            <div className='col-span-1 h-full w-full flex items-center justify-center'>
                <Switch isActive={alert.isShow} />
            </div>
            <div className='col-span-1 h-full w-full flex items-center gap-x-1 justify-center'>
                <AlertButtons alert={JSON.parse(JSON.stringify(alert))} />
            </div>
        </div>
    )
}

export default AlertItem