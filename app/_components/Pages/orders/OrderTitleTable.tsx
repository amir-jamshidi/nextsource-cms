import { TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const OrderTitleTable = () => {
    return (
        <TableHeader>
            <TableRow className='border-b-primary-50 dark:border-b-primary-800'>
                <TableHead className='text-center'><p className='py-4'>ردیف</p></TableHead>
                <TableHead className='text-right min-w-44'>نام محصول</TableHead>
                <TableHead className='text-right'>شناسه سفارش</TableHead>
                <TableHead className='text-right'>تاریخ</TableHead>
                <TableHead className='text-right min-w-28'>پرداختی</TableHead>
                <TableHead className='text-right'>کاربر</TableHead>
                <TableHead className='text-center min-w-28'>روش پرداخت</TableHead>
                <TableHead className='text-center min-w-20'>بیشتر</TableHead>
            </TableRow>
        </TableHeader>
    )
}

export default OrderTitleTable