'use client'

import { ICategory } from '@/app/_types/category';
import { TableCell, TableRow } from '@/components/ui/table';
import Switch from '../../Modules/Switch';
import CategoryDeleteButton from './CategoryDeleteButton';

interface CategoryItemProps {
    category: ICategory,
    index: number
}

const CategoryItem = ({ category, index }: CategoryItemProps) => {

    return (
        <>
            <TableRow className='dark:border-b-primary-800 border-b-primary-50'>
                <TableCell className="text-center">
                    <p className='py-2 text-primary-700 dark:text-primary-100'>
                        {index}
                    </p>
                </TableCell>
                <TableCell>
                    <div className='flex flex-col text-primary-700 dark:text-primary-100'>
                        <p>{category.title}</p>
                    </div>
                </TableCell>
                <TableCell>
                    <div className='flex flex-col text-primary-700 dark:text-primary-100'>
                        <p>{category.titleEn}</p>
                    </div>
                </TableCell>
                <TableCell className="text-right">
                    <p className='text-primary-700 dark:text-primary-100'>
                        {category.href}/
                    </p>
                </TableCell>
                <TableCell className="text-right">
                    <div className='flex flex-col'>
                        <p className='dark:text-primary-100 text-primary-700'>{new Date(category.createdAt || 0).toLocaleDateString('fa-IR')}</p>
                        <p className='dark:text-primary-200 text-primary-600'>{new Date(category.createdAt || 0).toLocaleTimeString('fa-IR')}</p>
                    </div>
                </TableCell>
                <TableCell className="text-right">
                    <div className='flex justify-center'>
                        <Switch isActive={true} />
                    </div>
                </TableCell>
                <TableCell className="text-center">
                    <div className='flex justify-center'>
                        <CategoryDeleteButton categoryID={String(category._id)} />
                    </div>
                </TableCell>
            </TableRow>

        </>

    )
}

export default CategoryItem