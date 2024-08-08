import { IOrder } from '@/app/_types/order';
import { ISection } from '@/app/_types/section';
import { ITicket } from '@/app/_types/ticket'
import { IUser } from '@/app/_types/user';
import React from 'react'
import { HiArrowUturnRight, HiOutlineCheckCircle, HiOutlineEye, HiOutlineTrash, HiOutlineXCircle } from 'react-icons/hi2';
import TicketButtonShow from './TicketButtonShow';
import TicketButtonDelete from './TicketButtonDelete';
import Badge from '../../Modules/Badge';
import Switch from '../../Modules/Switch';
import { TableCell, TableRow } from '@/components/ui/table';

interface TicketItemProps {
    ticket: ITicket,
    index: number
}

const TicketItem = ({ ticket, index }: TicketItemProps) => {


    const user = ticket.userID as IUser;
    const order = ticket.orderID as IOrder;
    const section = ticket.sectionID as ISection


    return (
        <TableRow className='dark:border-b-primary-800 border-b-primary-50'>
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
        /*
            <div className='ticket-list h-16 gap-2 px-4'>
                <div className='col-span-1 h-full w-full flex items-center'>
                    <p className='font-ir-bold text-sm text-primary-800 dark:text-primary-100 pr-3'>{index}</p>
                </div>
                <div className='col-span-2 h-full w-full flex flex-col justify-center '>
                    <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{user.phone}</p>
                    <p className='font-ir-medium text-primary-600 dark:text-primary-300 text-xs tracking-tight'>{user.email}</p>
                </div>
                <div className='col-span-2 h-full w-full flex items-center'>
                    <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{ticket.code}</p>
    
                </div>
                <div className='col-span-1 h-full w-full flex justify-center flex-col'>
                    <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{new Date(ticket.createdAt || 0).toLocaleDateString('fa-IR')}</p>
                    <p className='font-ir-medium text-primary-600 dark:text-primary-300 text-xs tracking-tight'>{new Date(ticket.createdAt || 0).toLocaleTimeString('fa-IR')}</p>
                </div>
                <div className='col-span-1 h-full w-full flex items-center justify-center'>
                    <Badge text={section.title} type='blue' icon={false} />
                </div>
    
                <div className='col-span-1 h-full w-full flex items-center justify-center'>
                    {!ticket.isAnswer && <Badge text='بدون پاسخ' type='red' icon={false} />}
                    {ticket.isAnswer && <Badge text='با پاسخ' type='green' icon={false} />}
                </div>
    
                <div className='col-span-1 h-full w-full flex items-center justify-center'>
                    <Switch isActive={Boolean(order)} />
                </div>
    
                <div className='col-span-1 h-full w-full flex items-center gap-x-1 justify-center'>
                    <TicketButtonShow ticket={ticket} />
                    <TicketButtonDelete ticketID={JSON.parse(JSON.stringify(ticket._id))} />
                </div>
            </div>
            */
    )
}

export default TicketItem