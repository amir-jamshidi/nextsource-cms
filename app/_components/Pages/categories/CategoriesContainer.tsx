import { ICategory } from '@/app/_types/category'
import React from 'react'
import CategoryFilter from './CategoryFilter'
import CategoryDetailsBoxes from './CategoryDetailsBoxes'
import CategoryList from './CategoryList'

interface CategoriesContainerProps {
    categories: ICategory[],
    categoriesDetails: {
        categoriesCount: number,
        categoriesAllCount: number,
        categoriesActiveCount: number,
        categoriesNonActiveCount: number
    }
}

const CategoriesContainer = ({ categories, categoriesDetails }: CategoriesContainerProps) => {
    return (
        <div className='flex flex-col gap-y-10 pb-14'>
            <CategoryFilter />
            <CategoryDetailsBoxes categoriesDetails={categoriesDetails} />
            <CategoryList categories={categories} categoriesCount={categoriesDetails.categoriesCount} />
        </div>

    )
}

export default CategoriesContainer