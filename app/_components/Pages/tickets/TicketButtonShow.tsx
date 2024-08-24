'use client'

import { answerTicket } from '@/app/_actions/ticket'
import Modal from '@/app/_components/Modules/Modal'
import { IOrder } from '@/app/_types/order'
import { ITicket } from '@/app/_types/ticket'
import { IUser } from '@/app/_types/user'
import Image from 'next/image'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { HiArrowUturnRight, HiOutlineClock, HiOutlineEye, HiOutlineInformationCircle, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2'
import BoxItem from '../../Modules/BoxItem'
import MiniTitleSection from '../../Modules/MiniTitleSection'
import TableButton from '../../Modules/TableButton'

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
            const res = await answerTicket({ ticketID: String(ticket._id), answer: answer })
            if (!res.state) return toast.error(res.message)
            if (res.state) {
                toast.success(res.message);
                setAnswer('');
            }
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        } finally {
            setIsPending(false);
        }
    }

    return (
        <Modal>
            <Modal.Open>
                <span>
                    <TableButton icon={<HiOutlineEye size={18} />} type='blue' />
                </span>
            </Modal.Open>
            <Modal.Open>
                <span >
                    <TableButton icon={<HiArrowUturnRight size={18} />} type='green' />
                </span>
            </Modal.Open>


            <Modal.Window>
                <div className='flex-11 my-14 h-[500px] md:h-auto overflow-auto w-full lg:w-3/4 rounded-xl bg-white dark:bg-primary-950 shadow dark:shadow-none dark:border border-primary-800'>

                    <div className='px-2.5 py-3.5'>
                        <div className='flex items-center justify-center gap-y-2 flex-col'>
                            <div className='dark:bg-green-800/40 bg-green-400/40 p-1.5 inline-block rounded-full'>
                                <span className='p-2 flex bg-green-300 dark:bg-green-700 rounded-full'>
                                    <HiOutlineInformationCircle size={30} className='text-green-600 dark:text-green-300' />
                                </span>
                            </div>
                            <h2 className='text-lg font-mo dark:text-primary-50 text-primary-700'>جزئیات تیکت</h2>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 px-2 mt-4 gap-1 md:gap-2.5'>
                            <BoxItem
                                icon={<HiOutlineUser size={40} className='text-violet-500' />}
                                color='#ddd6fe'
                                title={'کاربر'}
                                text={user.phone}
                                link={`/users/${user._id}`}
                            />
                            <BoxItem
                                icon={<HiOutlineClock size={40} className='text-rose-500' />}
                                color='#fecdd3'
                                title={'تاریخ'}
                                text={new Date(ticket.createdAt || 0).toLocaleDateString('fa-IR') + ' - ' + new Date(ticket.createdAt || 0).toLocaleTimeString('fa-IR')}
                            />
                            <BoxItem
                                icon={<HiOutlineShoppingBag size={40} className='text-green-500' />}
                                color='#bbf7d0'
                                title={'شناسه سفارش'}
                                text={order ? String(order.code) : 'ندارد'}
                                link={order ? `/orders` : undefined}
                            />
                        </div>
                        <div className='px-2'>
                            <div className='mt-2.5'>
                                <MiniTitleSection title='متن تیکت' />
                                <div className='flex items-center mt-2.5 gap-x-1.5'>
                                    <div className='w-14 h-14 rounded-full overflow-hidden relative self-start'>
                                        <Image fill src={`${user.profile}`} alt='UserImage' />
                                    </div>
                                    <div className='bg-blue-200 dark:bg-blue-300 flex-1 rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-sm py-3 px-2'>
                                        <p className='tracking-tight font-ir text-sm text-primary-800'>{ticket.body}</p>
                                    </div>
                                </div>
                            </div>
                            {ticket.isAnswer && (
                                <div className='mt-2.5'>
                                    <MiniTitleSection title='پاسخ شما' />
                                    <div className='flex items-center mt-2.5 gap-x-1.5'>
                                        <div className='bg-green-200 dark:bg-green-300 flex-1 rounded-tl-sm rounded-bl-xl rounded-br-xl rounded-tr-xl py-3 px-2'>
                                            <p className='tracking-tight font-ir text-sm text-primary-800'>{ticket.answerContent}</p>
                                        </div>
                                        <div className='w-14 h-14 relative self-start rounded-full overflow-hidden'>
                                            <Image fill src={'https://i.postimg.cc/Y9VKvST9/icons8-male-user-100.png'} alt='UserImage' />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className='mt-4'>
                                <textarea placeholder={ticket.isAnswer ? 'پاسخ جایگزین ...' : 'متن پاسخ ...'} className='w-full dark:bg-primary-900 dark:border-primary-800 rounded-bl-none dark:text-primary-100 bg-gray-50 border border-primary-50 outline-none rounded-xl min-h-20 max-h-28 p-2 text-sm text-primary-800 font-ir tracking-tight' value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className='mt-4 flex gap-x-1.5'>
                            <Modal.Close>
                                <button className="w-32 bg-red py-3 rounded-xl font-mo text-white text-sm">نه بیخیال</button>
                            </Modal.Close>
                            <button disabled={isPending} onClick={handleAnswerTicket} className="w-32 bg-green py-3 rounded-xl font-mo text-white text-sm">{isPending ? 'لطفا صبر کنید ...' : "ارسال پاسخ"}</button>
                        </div>
                    </div>
                </div>
            </Modal.Window>


        </Modal>

    )
}

export default TicketButtonShow