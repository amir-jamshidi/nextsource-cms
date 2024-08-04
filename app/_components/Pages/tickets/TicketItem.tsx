import { IOrder } from '@/app/_types/order';
import { ISection } from '@/app/_types/section';
import { ITicket } from '@/app/_types/ticket'
import { IUser } from '@/app/_types/user';
import React from 'react'
import { HiArrowUturnRight, HiOutlineCheckCircle, HiOutlineEye, HiOutlineTrash, HiOutlineXCircle } from 'react-icons/hi2';
import TicketButtonShow from './TicketButtonShow';
import TicketButtonDelete from './TicketButtonDelete';
import Badge from '../../Modules/Badge';

interface TicketItemProps {
    ticket: ITicket,
    index: number
}

const TicketItem = ({ ticket, index }: TicketItemProps) => {


    const user = ticket.userID as IUser;
    const order = ticket.orderID as IOrder;
    const section = ticket.sectionID as ISection


    return (
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
                <span className='text-xs bg-green-200 dark:bg-green-300 rounded-xl px-2 py-1 font-ir-bold text-primary-800 dark:text-primary-700 tracking-tight'>{section.title}</span>
            </div>

            <div className='col-span-1 h-full w-full flex items-center justify-center'>
                {!ticket.isAnswer && <Badge text='بدون پاسخ' type='rose'/>}
                {ticket.isAnswer && <span className='text-xs bg-green-200 dark:bg-green-300 rounded-xl px-2 py-1 font-ir-bold text-primary-800 dark:text-primary-700 tracking-tight'>با پاسخ</span>}
            </div>

            <div className='col-span-1 h-full w-full flex items-center justify-center'>
                {order &&
                    <span className='p-1 bg-green-200 dark:bg-green-300 rounded-full'>
                        <HiOutlineCheckCircle size={20} className='text-green-500' />
                    </span>
                }
                {!order && (
                    <span className='p-1 bg-rose-200 dark:bg-rose-300 rounded-full'>
                        <HiOutlineXCircle size={20} className='text-rose-500' />
                    </span>
                )}
            </div>

            <div className='col-span-1 h-full w-full flex items-center gap-x-1 justify-center'>
                <TicketButtonShow ticket={ticket} />
                <TicketButtonDelete ticketID={JSON.parse(JSON.stringify(ticket._id))} />
            </div>
        </div>
    )
}

export default TicketItem