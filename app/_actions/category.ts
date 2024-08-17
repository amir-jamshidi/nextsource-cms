'use server'

import { revalidatePath } from "next/cache"
import connectToDB from "../_configs/database"
import { SHOW_IN_PAGE } from "../_constants/gobalVariables"
import categoryModel from "../_models/category.module"
import { messageCreator } from "../_utils/messageCreator"

interface IGetCategoriesProps {
    page: number,
    sort: 'asc' | 'desc'
}

interface IInsertCategory {
    title: string,
    titleEn: string,
    href: string
}

export const getCategories = async ({ page, sort = 'asc' }: IGetCategoriesProps) => {

    const categories = await categoryModel
        .find({})
        .sort({ _id: sort === 'asc' ? -1 : 1 }).skip((page - 1) * SHOW_IN_PAGE).limit(page * SHOW_IN_PAGE)


    const categoryInfo = await categoryModel.find({})

    const categoriesCount = categoryInfo.length;
    const categoriesAllCount = categories.length;
    const categoriesActiveCount = categories.length;
    const categoriesNonActiveCount = 0

    const categoriesDetails: {
        categoriesCount: number,
        categoriesAllCount: number,
        categoriesActiveCount: number,
        categoriesNonActiveCount: number
    } = {
        categoriesCount,
        categoriesAllCount,
        categoriesActiveCount,
        categoriesNonActiveCount
    }

    return { categories: JSON.parse(JSON.stringify(categories)), categoriesDetails }
}

export const deleteCategory = async ({ categoryID }: { categoryID: string }) => {
    await connectToDB();
    await categoryModel.findOneAndDelete({ _id: categoryID }).lean();
    revalidatePath('/categories')
    return messageCreator(true, 'دسته بندی حذف شد')
}

export const insertCategory = async ({ title, titleEn, href }: IInsertCategory) => {
    const isHasBefore = await categoryModel.findOne({ href }).lean();
    if (isHasBefore) return messageCreator(false, 'لینک دسته بندی تکراریه')
    await categoryModel.create({ title, titleEn, href, caption: '' });
    revalidatePath('/categories');
    return messageCreator(true, 'دسته بندی اضافه شد');
}

export const getAllCategories = async () => {
    const categories = await categoryModel.find({}).select('title');
    return JSON.parse(JSON.stringify(categories))
}