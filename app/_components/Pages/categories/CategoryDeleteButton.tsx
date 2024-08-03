'use client'
import Modal from '@/app/_components/Modules/Modal'
import { useTransition } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'
import toast from 'react-hot-toast'
import { deleteCategory } from '@/app/_actions/category'

interface CategoryDeleteButtonProps {
    categoryID: string
}

const CategoryDeleteButton = ({ categoryID }: CategoryDeleteButtonProps) => {
    return (
        <Modal>
            <Modal.Open>
                <span className='p-1 bg-rose-200 dark:bg-rose-300 rounded-full cursor-pointer  transition-all hover:bg-red-300'>
                    <HiOutlineTrash size={20} className='text-rose-500' />
                </span>
            </Modal.Open>
            <Modal.Window>
                <div className='w-1/3 bg-white dark:bg-primary-900 rounded-xl shadow overflow-hidden dark:shadow-none dark:border border-primary-800'>
                    <div className="flex gap-x-2 items-center p-3">
                        <span className='bg-red-200 p-2 rounded-full inline-block'>
                            <HiOutlineTrash size={40} className='text-red-600' />
                        </span>
                        <p className='text-primary-800 text-sm font-ir-medium tracking-tight dark:text-primary-100'>از حدف کردن دسته بندی مطمئن هستید ؟</p>
                    </div>
                    <div className='bg-primary-0 dark:bg-primary-800 grid grid-cols-2'>
                        <Modal.Close>
                            <button className="font-mo text-green-500 dark:border-l-primary-700 border-l py-3 hover:text-primary-0 hover:bg-green-500 transition-all text-sm">نه بیخیال</button>
                        </Modal.Close>
                        <DeleteButton categoryID={categoryID} />
                    </div>
                </div>
            </Modal.Window>
        </Modal>
    )
}


export function DeleteButton({ categoryID }: { categoryID: string }) {

    const [isPending, startTransition] = useTransition();

    const handleRemoveCategory = () => {
        try {
            startTransition(async () => {
                const result = await deleteCategory({ categoryID });
                if (result.state) {
                    toast.success(result.message);
                }
            })
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        }
    }

    return (
        <button disabled={isPending} onClick={() => handleRemoveCategory()} className="font-mo text-sm text-red-500 py-3 hover:text-primary-0 hover:bg-red-500 transition-all disabled:bg-primary-50">
            {isPending ? "لطفا صبر کن ..." : "اره حذف بشه"}
        </button>
    )

}

export default CategoryDeleteButton

