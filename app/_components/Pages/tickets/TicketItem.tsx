'use client'

import { IOrder } from '@/app/_types/order';
import { ISection } from '@/app/_types/section';
import { ITicket } from '@/app/_types/ticket';
import { IUser } from '@/app/_types/user';
import { TableCell, TableRow } from '@/components/ui/table';
import Badge from '../../Modules/Badge';
import Switch from '../../Modules/Switch';
import TicketButtonDelete from './TicketButtonDelete';
import TicketButtonShow from './TicketButtonShow';
import { ITicketItem } from '@/app/_types';



const TicketItem = ({ ticket, index }: ITicketItem) => {

    const user = ticket.userID as IUser;
    const order = ticket.orderID as IOrder;
    const section = ticket.sectionID as ISection

    return (
        <TableRow key={String(ticket._id)} className='dark:border-b-primary-800 border-b-primary-50'>
            <TableCell className="text-center">
                <p className='py-2 text-primary-700 dark:text-primary-100'>
                    {index}
                </p>
            </TableCell>
            <TableCell>
                <div className='flex flex-col text-primary-700 dark:text-primary-100'>
                    <p>{user.phone}</p>
                    <p>{user.email}/</p>
                </div>
            </TableCell>
            <TableCell>
                <p className='text-primary-700 dark:text-primary-100'>
                    {ticket.code}
                </p>
            </TableCell>
            <TableCell className="text-right">
                <div>
                    <p className='text-primary-700 dark:text-primary-100'>{new Date(ticket.createdAt || 0).toLocaleDateString('fa-IR')}</p>
                    <p className='text-primary-600 dark:text-primary-200'>{new Date(ticket.createdAt || 0).toLocaleTimeString('fa-IR')}</p>
                </div>
            </TableCell>
            <TableCell className="text-right">
                <div className='flex justify-center '>
                    <Badge text={section.title} type='blue' icon={false} />
                </div>
            </TableCell>
            <TableCell className="text-right">
                <div className='flex justify-center'>
                    {!ticket.isAnswer && <Badge text='بدون پاسخ' type='red' icon={false} />}
                    {ticket.isAnswer && <Badge text='با پاسخ' type='green' icon={false} />}
                </div>
            </TableCell>
            <TableCell className="text-center">
                <div className='flex justify-center items-center'>
                    <Switch isActive={Boolean(order)} />
                </div>
            </TableCell>
            <TableCell className="text-center ">
                <div className='flex gap-x-1'>
                    <TicketButtonShow ticket={ticket} />
                    <TicketButtonDelete ticketID={JSON.parse(JSON.stringify(ticket._id))} />
                </div>
            </TableCell>
        </TableRow>
    )
}

export default TicketItem