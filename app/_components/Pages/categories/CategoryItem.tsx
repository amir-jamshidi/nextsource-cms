import { ICategory } from '@/app/_types/category';
import { IProduct } from '@/app/_types/product';
import { IUser } from '@/app/_types/user';
import Link from 'next/link';
import { HiOutlineCheckCircle, HiOutlineEye, HiOutlinePencil, HiOutlinePencilSquare, HiOutlineXCircle } from 'react-icons/hi2';
import CategoryDeleteButton from './CategoryDeleteButton';
import Switch from '../../Modules/Switch';

interface CategoryItemProps {
    category: ICategory,
    index: number
}

const CategoryItem = ({ category, index }: CategoryItemProps) => {



    return (
        <div className='ticket-list h-16 gap-2 px-4'>
            <div className='col-span-1 h-full w-full flex items-center'>
                <p className='font-ir-bold text-sm text-primary-800 dark:text-primary-100 pr-3'>{index}</p>
            </div>
            <div className='col-span-2 h-full w-full flex flex-col justify-center '>
                <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{category.title}</p>
            </div>
            <div className='col-span-2 h-full w-full flex items-center'>
                <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{category.titleEn}</p>
            </div>
            <div className='col-span-2 h-full w-full flex justify-center flex-col'>
                <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{category.href}/</p>
            </div>
            <div className='col-span-1 h-full w-full flex justify-center flex-col'>
                <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{new Date(category.createdAt || 0).toLocaleDateString('fa-IR')}</p>
                <p className='font-ir-medium text-primary-600 dark:text-primary-300 text-xs tracking-tight'>{new Date(category.createdAt || 0).toLocaleTimeString('fa-IR')}</p>
            </div>
            <div className='col-span-1 h-full w-full flex items-center justify-center'>
                <Switch isActive={true} />
            </div>
            <div className='col-span-1 h-full w-full flex items-center gap-x-1 justify-center'>
                <CategoryDeleteButton categoryID={String(category._id)} />
            </div>
        </div>
    )
}

export default CategoryItem