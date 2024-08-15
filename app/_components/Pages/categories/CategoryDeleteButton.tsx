'use client'
import { deleteCategory } from '@/app/_actions/category'
import Modal, { useModalContext } from '@/app/_components/Modules/Modal'
import { useState, useTransition } from 'react'
import toast from 'react-hot-toast'
import { HiOutlineTrash } from 'react-icons/hi2'
import TableButton from '../../Modules/TableButton'

interface CategoryDeleteButtonProps {
    categoryID: string
}

const CategoryDeleteButton = ({ categoryID }: CategoryDeleteButtonProps) => {

    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState<undefined | boolean>(undefined);

    const handleRemoveCategory = () => {
        try {
            startTransition(async () => {
                const result = await deleteCategory({ categoryID });
                if (result.state) {
                    toast.success(result.message);
                    setIsOpen(false);
                }
            })
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        }
    }

    return (
        <Modal open={isOpen}>
            <Modal.Open>
                <span>
                    <TableButton icon={<HiOutlineTrash size={20} />} type='red' />
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
                            <h2 className='text-lg font-mo dark:text-primary-50 text-primary-700'>حدف دسته بندی</h2>
                        </div>
                        <div className="flex gap-x-2 items-center py-4 mb-2 px-3">
                            <p className='text-center text-primary-600 font-mo text-sm dark:text-primary-100'>از حدف کردن دسته بندی مطمئن هستید ؟ در صورت حذف موجودیت های مرتبط با این دسته بندی هم حذف خواهند شد</p>
                        </div>
                        <div className=' gap-x-1.5 grid grid-cols-2'>
                            <Modal.Close>
                                <button className="bg-blue py-3 rounded-xl font-mo text-white text-sm">نه بیخیال</button>
                            </Modal.Close>
                            <button disabled={isPending} onClick={() => handleRemoveCategory()} className="bg-red rounded-xl font-mo py-3 text-white text-sm">
                                {isPending ? "لطفا صبر کن ..." : "اره حذف بشه"}
                            </button>
                        </div>
                    </div>
                </div>
            </Modal.Window>
        </Modal>
    )
}


export default CategoryDeleteButton

