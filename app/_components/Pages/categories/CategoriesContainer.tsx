import { ICategory } from '@/app/_types/category'
import React from 'react'
import CategoryFilter from './CategoryFilter'
import CategoryDetailsBoxes from './CategoryDetailsBoxes'
import CategoryList from './CategoryList'
import PageContainer from '../../Modules/PageContainer'

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
        <PageContainer>

            <CategoryFilter />
            <CategoryDetailsBoxes categoriesDetails={categoriesDetails} />
            <CategoryList categories={categories} categoriesCount={categoriesDetails.categoriesCount} />
        </PageContainer>

    )
}

export default CategoriesContainer