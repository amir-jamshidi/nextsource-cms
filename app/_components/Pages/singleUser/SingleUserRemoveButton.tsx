'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { TrashIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import { HiOutlineEllipsisVertical, HiOutlineTrash } from 'react-icons/hi2'
import Modal from '@/app/_components/Modules/Modal'
import { removeUser } from '@/app/_actions/user'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const SingleUserRemoveButton = ({ userID }: { userID: string }) => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    // const [openMenu, setOpenMenu] = useState(false);

    const handleRemoveUser = async () => {
        console.log('first')
        try {
            setIsLoading(true)
            await removeUser({ userID });
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Modal>
            <Popover >
                <PopoverTrigger>
                    <span className="bg-white dark:bg-primary-900 border-primary-50 border dark:border-primary-800 rounded-full flex items-center justify-center w-8 h-8 ">
                        <HiOutlineEllipsisVertical size={20} className="text-primary-600 dark:text-primary-50" />
                    </span>
                </PopoverTrigger>
                <PopoverContent align="end" className="dark:bg-primary-900 w-44 rounded-xl py-2 px-2 dark:border-primary-800/70">
                    <Modal.Open>
                        <div className='flex gap-x-1 py-1 cursor-pointer'>
                            <HiOutlineTrash className='text-red-400 dark:text-red-600' />
                            <p className='text-sm tracking-tight text-red-400 dark:text-red-600'>حذف کاربر</p>
                        </div>
                    </Modal.Open>
                </PopoverContent>
            </Popover>
            <Modal.Window>

                <div className='w-[360px] md:w-3/4 lg:w-1/3 bg-white dark:bg-primary-950 rounded-xl shadow overflow-hidden dark:shadow-none dark:border border-primary-900'>
                    <div className='px-2.5 py-3.5'>
                        <div className='flex items-center justify-center gap-y-2 flex-col'>
                            <div className='dark:bg-red-800/40 bg-red-400/40 p-1.5 inline-block rounded-full'>
                                <span className='p-2 flex bg-red-300 dark:bg-red-700 rounded-full'>
                                    <HiOutlineTrash size={30} className='text-red-600 dark:text-red-300' />
                                </span>
                            </div>
                            <h2 className='text-lg font-mo dark:text-primary-50 text-primary-700'>حذف کاربر !!</h2>
                        </div>
                        <div className="flex gap-x-2 items-center py-4 mb-2 px-3">
                            <p className='w-full text-center text-primary-600 font-mo text-sm dark:text-primary-100'>از حذف حساب کاربری مطمئن هستید ؟ این عمل غیر قابل بازگشت و از دست رفتن تمامی موجودیت های مرتبط با این کاربر میشود</p>
                        </div>
                        <div className=' gap-x-1.5 grid grid-cols-2'>
                            <Modal.Close>
                                <button className="bg-blue py-3 rounded-xl font-mo text-white text-sm">نه بیخیال</button>
                            </Modal.Close>
                            <button disabled={isLoading} onClick={handleRemoveUser} className="bg-red rounded-xl font-mo py-3 text-white text-sm">
                                {isLoading ? "لطفا صبر کن ..." : "اره حذف بشه"}
                            </button>
                        </div>
                    </div>
                </div>

            </Modal.Window>
        </Modal>
    )
}

export default SingleUserRemoveButton