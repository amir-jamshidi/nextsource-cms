import { getCategories } from '@/app/_actions/category'
import CategoriesContainer from '@/app/_components/Pages/categories/CategoriesContainer'
import React from 'react'

interface ICategoiresProps {
  searchParams: {
    page: number,
    sort: 'asc' | 'desc'
  }
}

const Categories = async ({ searchParams: { page = 1, sort = 'asc' } }: ICategoiresProps) => {

  const { categories, categoriesDetails } = await getCategories({ page, sort });

  return (
    <CategoriesContainer categories={categories} categoriesDetails={categoriesDetails} />
  )
}

export default Categories