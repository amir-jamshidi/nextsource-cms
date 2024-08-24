'use client'
import { deleteTicket } from '@/app/_actions/ticket'
import Modal from '@/app/_components/Modules/Modal'
import { useState, useTransition } from 'react'
import toast from 'react-hot-toast'
import { HiOutlineTrash } from 'react-icons/hi2'
import TableButton from '../../Modules/TableButton'

interface TicketButtonDeleteProps {
    ticketID: string
}

const TicketButtonDelete = ({ ticketID }: TicketButtonDeleteProps) => {

    const [isPending, setIsPending] = useState(false);
    const [isOpen, setIsOpen] = useState<undefined | boolean>(undefined);

    const handleRemoveTicket = async () => {
        try {

            setIsPending(true)
            const res = await deleteTicket(ticketID);
            if (!res.state) return toast.error(res.message);
            if (res.state) {
                toast.success(res.message);
                setIsOpen(false);
            }
        } catch (error) {
            toast.error('خطای غیر منتطره ای رخ داد')
        } finally {
            setIsOpen(false);
            setIsPending(false);
        }
    }

    return (
        <Modal open={isOpen}>
            <Modal.Open>
                <span>
                    <TableButton icon={<HiOutlineTrash size={18} />} type='red' />
                </span>
            </Modal.Open>
            <Modal.Window>
                <div className='w-[360px] md:w-3/4 lg:w-1/3 bg-white dark:bg-primary-950 rounded-xl shadow overflow-hidden dark:shadow-none dark:border border-primary-900'>
                    <div className='px-2.5 py-3.5'>
                        <div className='flex items-center justify-center gap-y-2 flex-col'>
                            <div className='dark:bg-red-800/40 bg-red-400/40 p-1.5 inline-block rounded-full'>
                                <span className='p-2 flex bg-red-300 dark:bg-red-700 rounded-full'>
                                    <HiOutlineTrash size={30} className='text-red-600 dark:text-red-300' />
                                </span>
                            </div>
                            <h2 className='text-lg font-mo dark:text-primary-50 text-primary-700'>حذف تیکت</h2>
                        </div>
                        <div className="flex gap-x-2 items-center py-4 mb-2 px-3">
                            <p className='w-full text-center text-primary-600 font-mo text-sm dark:text-primary-100'>از حدف کردن تیکت مورد نظر اطمینان دارید ؟</p>
                        </div>
                        <div className=' gap-x-1.5 grid grid-cols-2'>
                            <Modal.Close>
                                <button className="bg-blue py-3 rounded-xl font-mo text-white text-sm">نه بیخیال</button>
                            </Modal.Close>
                            <button disabled={isPending} onClick={() => handleRemoveTicket()} className="bg-red rounded-xl font-mo py-3 text-white text-sm">
                                {isPending ? "لطفا صبر کن ..." : "اره حذف بشه"}
                            </button>
                        </div>
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

