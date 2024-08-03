'use client'
import React, { useContext, useTransition } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'
import Modal, { ModalContext, useModalContext } from '@/app/_components/Modules/Modal'
import { deleteTicket } from '@/app/_actions/ticket'
import toast from 'react-hot-toast'

interface TicketButtonDeleteProps {
    ticketID: string
}

const TicketButtonDelete = ({ ticketID }: TicketButtonDeleteProps) => {
    return (
        <Modal>
            <Modal.Open>
                <span className='p-1 bg-rose-200 dark:bg-rose-300 rounded-full cursor-pointer'>
                    <HiOutlineTrash size={20} className='text-rose-500' />
                </span>
            </Modal.Open>
            <Modal.Window>
                <div className='w-1/3 bg-white dark:bg-primary-900 rounded-xl shadow dark:shadow-none dark:border border-primary-800 overflow-hidden'>
                    <div className="flex gap-x-2 items-center p-3">
                        <span className='bg-red-200 dark:bg-rose-300 p-2 rounded-full inline-block'>
                            <HiOutlineTrash size={40} className='text-red-600' />
                        </span>
                        <p className='text-primary-800 text-sm font-ir-medium tracking-tight dark:text-primary-100'>از حدف کردن تیکت مطمئن هستید ؟</p>
                    </div>
                    <div className='bg-primary-0 dark:bg-primary-800 grid grid-cols-2'>
                        <Modal.Close>
                            <button className="font-mo text-green-500 border-l dark:border-l-primary-700 py-3 hover:text-primary-0 hover:bg-green-500 transition-all text-sm">نه بیخیال</button>
                        </Modal.Close>
                        <DeleteButton ticketID={ticketID} />
                    </div>
                </div>
            </Modal.Window>
        </Modal>
    )
}


export function DeleteButton({ ticketID }: { ticketID: string }) {

    const [isPending, startTransition] = useTransition();

    const handleRemoveTicket = () => {
        try {
            startTransition(async () => {
                const result = await deleteTicket(ticketID);
                if (result.state) {
                    toast.success(result.message);
                }
            })
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        }
    }

    return (
        <button disabled={isPending} onClick={() => handleRemoveTicket()} className="font-mo text-sm text-red-500 py-3 hover:text-primary-0 hover:bg-red-500 transition-all disabled:bg-primary-50">
            {isPending ? "لطفا صبر کن ..." : "اره حذف بشه"}
        </button>
    )

}

export default TicketButtonDelete

