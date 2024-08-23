import { TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const TicketTitleTable = () => {
    return (
        <TableHeader>
            <TableRow className='border-b-primary-50 dark:border-b-primary-800'>
                <TableHead className='text-center'><p className='py-4'>ردیف</p></TableHead>
                <TableHead className='text-right min-w-44'>کاربر</TableHead>
                <TableHead className='text-right'>شناسه تیکت</TableHead>
                <TableHead className='text-right'>تاریخ</TableHead>
                <TableHead className='text-center min-w-28'>بخش</TableHead>
                <TableHead className='text-center min-w-24'>وضعیت</TableHead>
                <TableHead className='text-center min-w-28'>پیگیری سفارش</TableHead>
                <TableHead className='text-center min-w-20'>بیشتر</TableHead>
            </TableRow>
        </TableHeader>
    )
}

export default TicketTitleTable