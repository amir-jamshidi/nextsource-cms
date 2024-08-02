import { ICategory } from '@/app/_types/category'
import React from 'react'
import CategoryFilter from './CategoryFilter'
import CategoryDetailsBoxes from './CategoryDetailsBoxes'
import CategoryList from './CategoryList'

interface CategoriesContainerProps {
    categories: ICategory[]
}

const CategoriesContainer = ({ categories }: CategoriesContainerProps) => {
    return (
        <div className='flex flex-col gap-y-10 pb-14'>
            <CategoryFilter />
            <CategoryDetailsBoxes categoiresDetails={{}} />
            <CategoryList categories={categories} categoriesCount={10} />
        </div>

    )
}

export default CategoriesContainer