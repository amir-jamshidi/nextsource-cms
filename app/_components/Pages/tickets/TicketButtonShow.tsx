'use client'

import React, { useState } from 'react'
import { HiArrowUturnRight, HiOutlineClock, HiOutlineEye, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2'
import Modal from '@/app/_components/Modules/Modal'
import { ITicket } from '@/app/_types/ticket'
import Image from 'next/image'
import { IUser } from '@/app/_types/user'
import ModalFooter from '../../Modules/ModalFooter'
import toast from 'react-hot-toast'
import { answerTicket } from '@/app/_actions/ticket'
import MiniTitleSection from '../../Modules/MiniTitleSection'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'
import OrderModalBox from '../orders/OrderModalBox'
import { IOrder } from '@/app/_types/order'

interface TicketButtonShow {
    ticket: ITicket
}

const TicketButtonShow = ({ ticket }: TicketButtonShow) => {

    const [answer, setAnswer] = useState('');
    const [isPending, setIsPending] = useState(false);

    const user = JSON.parse(JSON.stringify(ticket.userID)) as IUser
    const order = JSON.parse(JSON.stringify(ticket.orderID)) as IOrder

    const handleAnswerTicket = async () => {
        try {
            if (!answer.trim()) return toast.error('لطفا متن پاسخ رو وارد کن')
            setIsPending(true);
            const response = await answerTicket({ ticketID: String(ticket._id), answer: answer })
            setAnswer('');
            if (response.state) return toast.success(response.message);
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        } finally {
            setIsPending(false);
        }
    }

    return (
        <Modal>
            <Modal.Open>
                <span className='p-1 bg-blue-200 rounded-full cursor-pointer'>
                    <HiOutlineEye size={20} className='text-blue-500' />
                </span>
            </Modal.Open>
            <Modal.Open>
                <span className='p-1 bg-green-200 rounded-full'>
                    <HiArrowUturnRight size={20} className='text-green-500 cursor-pointer' />
                </span>
            </Modal.Open>


            <Modal.Window>
                <div className='overflow-hidden w-2/3 rounded-xl bg-white shadow'>
                    <div className="w-full h-14 bg-primary-50 flex justify-center items-center">
                        <p className="font-mo text-primary-800">نمایش جزئیات تیکت</p>
                    </div>
                    <div className='grid grid-cols-3 px-4 mt-4 gap-2.5'>
                        <OrderModalBox
                            icon={<HiOutlineUser size={40} className='text-violet-500' />}
                            color='#ddd6fe'
                            title={'کاربر'}
                            text={user.phone}
                            link='/'
                        />
                        <OrderModalBox
                            icon={<HiOutlineClock size={40} className='text-rose-500' />}
                            color='#fecdd3'
                            title={'تاریخ'}
                            text={new Date(ticket.createdAt || 0).toLocaleDateString('fa-IR') + ' - ' + new Date(ticket.createdAt || 0).toLocaleTimeString('fa-IR')}
                        />
                        <OrderModalBox
                            icon={<HiOutlineShoppingBag size={40} className='text-green-500' />}
                            color='#bbf7d0'
                            title={'شناسه سفارش'}
                            text={order ? String(order.code) : 'ندارد'}
                            link={order ? '/' : undefined}
                        />
                    </div>
                    <div className='p-4'>
                        <div className='mt-2.5'>
                            <MiniTitleSection title='متن تیکت' />
                            <div className='flex items-center mt-2.5'>
                                <div className='w-14 h-14 relative self-start'>

                                    <Image fill src={`${user.profile}`} alt='UserImage' />
                                </div>
                                <div className='bg-blue-200 flex-1 rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-sm py-3 px-2'>
                                    <p className='tracking-tight font-ir text-sm'>{ticket.body}</p>
                                </div>
                            </div>
                        </div>

                        {ticket.isAnswer && (
                            <div className='mt-2.5'>
                                <MiniTitleSection title='پاسخ شما' />
                                <div className='flex items-center mt-2.5'>
                                    <div className='bg-green-200 flex-1 rounded-tl-sm rounded-bl-xl rounded-br-xl rounded-tr-xl py-3 px-2'>
                                        <p className='tracking-tight font-ir text-sm'>{ticket.answerContent}</p>
                                    </div>
                                    <div className='w-14 h-14 relative self-start'>
                                        <Image fill src={'https://i.postimg.cc/Y9VKvST9/icons8-male-user-100.png'} alt='UserImage' />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className='mt-4'>
                            <textarea placeholder={ticket.isAnswer ? 'پاسخ جایگزین ...' : 'متن پاسخ ...'} className='w-full bg-primary-0 border border-primary-50 outline-none rounded-xl min-h-20 max-h-28 p-2 text-sm text-primary-800 font-ir tracking-tight' value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
                        </div>
                    </div>
                    <ModalFooter>
                        <button disabled={isPending} onClick={handleAnswerTicket} className="font-mo text-green-500 px-4 py-1 rounded-full text-sm disabled:text-primary-400 transition-all">{isPending ? 'لطفا صبر کنید ...' : "ارسال پاسخ"}</button>
                    </ModalFooter>
                </div>
            </Modal.Window>


        </Modal>

    )
}

export default TicketButtonShow