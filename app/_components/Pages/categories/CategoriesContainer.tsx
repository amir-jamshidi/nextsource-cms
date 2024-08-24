import { ICategory } from '@/app/_types/category'
import React from 'react'
import CategoryFilter from './CategoryFilter'
import CategoryDetailsBoxes from './CategoryDetailsBoxes'
import CategoryList from './CategoryList'
import PageContainer from '../../Modules/PageContainer'
import { IGetCategories } from '@/app/_types'


const CategoriesContainer = ({ categories, categoriesDetails }: IGetCategories) => {
    return (
        <PageContainer>
            <CategoryFilter />
            <CategoryDetailsBoxes categoriesDetails={categoriesDetails} />
            <CategoryList categories={categories} categoriesCount={categoriesDetails.categoriesCount} />
        </PageContainer>

    )
}

export default CategoriesContainer