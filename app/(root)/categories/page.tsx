import { getCategories } from '@/app/_actions/category'
import CategoriesContainer from '@/app/_components/Pages/categories/CategoriesContainer'
import { IGetCategories } from '@/app/_types'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'دسته بندی ها'
}

interface ICategoiresProps {
  searchParams: {
    page: number,
    sort: 'asc' | 'desc'
  }
}

const Categories = async ({ searchParams: { page = 1, sort = 'asc' } }: ICategoiresProps) => {
  const { categories, categoriesDetails }: IGetCategories = await getCategories({ page, sort });
  return (
    <CategoriesContainer categories={categories} categoriesDetails={categoriesDetails} />
  )
}

export default Categories