import { IAlert } from '@/app/_types/alert'
import React from 'react'
import { HiOutlineCheckCircle, HiOutlinePlay, HiOutlinePower, HiOutlineTrash, HiOutlineXCircle } from 'react-icons/hi2'
import AlertButtons from './AlertButtons'
import Badge from '../../Modules/Badge'
import Switch from '../../Modules/Switch'
import { TableCell, TableRow } from '@/components/ui/table'

const AlertItem = ({ alert, index }: { alert: IAlert, index: number }) => {
    return (

        <>
            <TableRow className='dark:border-b-primary-800 border-b-primary-50'>
                <TableCell className="text-center">
                    <p className='py-2 text-primary-700 dark:text-primary-100'>
                        {index}
                    </p>
                </TableCell>
                <TableCell>
                    <div className='flex flex-col text-primary-700 dark:text-primary-100'>
                        <p>{alert.title}</p>
                    </div>
                </TableCell>
                <TableCell>
                    <div className='flex flex-col text-primary-700 dark:text-primary-100'>
                        <p>{alert.body}</p>
                    </div>
                </TableCell>
                <TableCell className="text-right">

                    {alert.href ? (
                        <p className='text-primary-700 dark:text-primary-100'>
                            {alert.href}/
                        </p>

                    ) : (
                        <div className='flex'>
                            <Badge icon={false} text='بدون لینک ' type='red' />
                        </div>
                    )}
                </TableCell>
                <TableCell className="text-right">
                    <div className='flex justify-center'>
                        {alert.type === 'SUCCESS' && <Badge icon={false} text='حالت موفق' type='green' />}
                        {alert.type === 'WARNING' && <Badge icon={false} text='حالت هشدار' type='amber' />}
                        {alert.type === 'ERROR' && <Badge icon={false} text='حالت خطا' type='red' />}
                    </div>

                </TableCell>
                <TableCell className="text-right">
                    <div className='flex justify-center'>
                        <Switch isActive={alert.isShow} />
                    </div>
                </TableCell>

                <TableCell className="text-center">
                    <div className='flex justify-center gap-x-1'>
                        <AlertButtons alert={JSON.parse(JSON.stringify(alert))} />
                    </div>
                </TableCell>
            </TableRow>

        </>

    )
}

export default AlertItem