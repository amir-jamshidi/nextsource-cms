'use server'

import { SHOW_IN_PAGE } from "../_constants/gobalVariables"
import categoryModel from "../_models/category.module"

interface IGetCategoriesProps {
    page: number,
    sort: 'asc' | 'desc'
}

export const getCategories = async ({ page, sort = 'asc' }: IGetCategoriesProps) => {

    // const options { } = {}

    const categories = await categoryModel
        .find({})
        .sort({ _id: sort === 'asc' ? -1 : 1 }).skip((page - 1) * SHOW_IN_PAGE).limit(page * SHOW_IN_PAGE)

    const categoriesDetails = {}

    return { categories, categoriesDetails }
}