'use server'

import { revalidatePath } from "next/cache"
import { SHOW_IN_PAGE } from "../_constants/gobalVariables"
import categoryModel from "../_models/category.module"
import orderModel from "../_models/order.module"
import productModel from "../_models/product.module"
import userModel from "../_models/user.module"
import { IProduct } from "../_types/product"
import { messageCreator } from "../_utils/messageCreator"
import supabase, { supabaseUrl } from "../_services/supabase"
import { redirect } from "next/navigation"
import { Parser } from "../_utils/Parser"
import { IOrder } from "../_types/order"
import { ISingleProductDetails } from "../_types"
import { ICategory } from "../_types/category"
import { IUser } from "../_types/user"
import { Types } from "mongoose"
import connectToDB from "../_configs/database"
import isAdmin from "../_middlewares/isAdmin"

interface IGetProducts {
    state: "free" | "nonfree" | "all" | "inplan",
    page: number
}
export const getProducts = async ({ state, page }: IGetProducts) => {
    await connectToDB();

    let options: { isFree?: boolean, isPlan?: boolean } = {}

    if (state === 'free' || state === 'nonfree') options = { isFree: state === 'free' ? true : false }
    if (state === 'inplan') options = { isPlan: true };

    const products: IProduct[] = await productModel.find(options)
        .populate({ path: 'creatorID', model: userModel, select: 'phone email' })
        .populate({ path: 'categoryID', model: categoryModel, select: 'title href' })
        .sort({ _id: -1 })
        .skip((page - 1) * SHOW_IN_PAGE)
        .limit(page * SHOW_IN_PAGE)
        .lean();

    const productsInfo = await productModel.find({}).select('isFree isPlan');

    const productsCount = await productModel.find(options).countDocuments();
    const productsFreeCount = productsInfo.filter(product => product.isFree === true).length;
    const productNonFreeCount = productsInfo.filter(product => product.isFree === false).length;
    const productInPlanCount = productsInfo.filter(product => product.isPlan === true).length;

    const productsDetails = {
        productsCount,
        productsFreeCount,
        productNonFreeCount,
        productInPlanCount
    }

    return { products: JSON.parse(JSON.stringify(products)), productsDetails }

}
export const getProductDetails = async ({ productID }: { productID: string }) => {
    await connectToDB();

    if (!Types.ObjectId.isValid(productID)) return false

    const product: IProduct | null = await productModel.findOne({ _id: productID })
        .populate({ path: 'categoryID', model: categoryModel })
        .populate({ path: 'creatorID', model: userModel })
        .lean();

    if (!product) return false

    const orders: IOrder[] = await orderModel.find({ productID }).populate({ path: 'userID', model: userModel }).sort({ _id: -1 }).lean();
    const productOrder = await orderModel.find({ productID }).select('totalPrice').lean();


    const productSaleCount = productOrder.length;
    const productSalePrice = productOrder.reduce((total, cur) => total + cur.totalPrice, 0);

    const productDetails: ISingleProductDetails = {
        title: product.title,
        price: product.price,
        isOff: product.isOff,
        precentOff: product.precentOff,
        creatorID: product.creatorID as IUser,
        categoryID: product.categoryID as ICategory,
        isPlan: product.isPlan,
        isFree: product.isFree,
        productSaleCount,
        productSalePrice
    }

    return { productDetails, product: JSON.parse(JSON.stringify(product)), sellers: Parser(orders) }
}
export const updateProduct = async ({ productID, values, formData }: { productID: string, values: {}, formData: FormData }) => {
    await connectToDB();
    const isAdminUser = await isAdmin();
    if (!isAdminUser) return messageCreator(false, 'در حالت تستی امکان ویرایش نیست')

    let photoPath;
    let filePath;
    if (formData.get('photo') && formData.get('photo') !== 'undefined') {
        const photoStr = formData.get('photo')?.name!
        const ext = photoStr.slice(photoStr.lastIndexOf('.'));
        const photoName = `${Math.floor(Math.random() * 1000000)}-${Date.now()}${ext}`
        photoPath = `${supabaseUrl}/storage/v1/object/public/products/${photoName}`
        const { error: storageError } = await supabase
            .storage
            .from('products')
            .upload(photoName, formData.get('photo')!);
    }

    if (formData.get('link') && formData.get('link') !== 'undefined') {
        const fileStr = formData.get('link')?.name!
        const fileExt = fileStr.slice(fileStr.lastIndexOf('.'));
        const fileName = `${Math.floor(Math.random() * 1000000)}-${Date.now()}${fileExt}`
        filePath = `${supabaseUrl}/storage/v1/object/public/files/${fileName}`
        const { error: fileStorageError } = await supabase
            .storage
            .from('files')
            .upload(fileName, formData.get('link')!);
    }

    const options = {
        ...values,
        sellerID: '664106d27e0a319150420826'
    }

    if (filePath) options['links'] = [`${filePath}`]
    if (photoPath) options['photo'] = photoPath

    await productModel.findOneAndUpdate({ _id: productID }, options);

    revalidatePath('/products', 'layout')
    return messageCreator(true, 'محصول ویرایش شد')
}
export const insertProduct = async ({ values, formData }: { values: {}, formData: FormData }) => {
    await connectToDB();
    const isAdminUser = await isAdmin();
    if (!isAdminUser) return messageCreator(false, 'در حالت تستی امکان اضافه کردن نیست')


    const photoStr = formData.get('photo')?.name!
    const ext = photoStr.slice(photoStr.lastIndexOf('.'));
    const photoName = `${Math.floor(Math.random() * 1000000)}-${Date.now()}${ext}`
    const photoPath = `${supabaseUrl}/storage/v1/object/public/products/${photoName}`
    const { error: storageError } = await supabase
        .storage
        .from('products')
        .upload(photoName, formData.get('photo')!);


    const fileStr = formData.get('link')?.name!
    const fileExt = fileStr.slice(fileStr.lastIndexOf('.'));
    const fileName = `${Math.floor(Math.random() * 1000000)}-${Date.now()}${fileExt}`
    const filePath = `${supabaseUrl}/storage/v1/object/public/files/${fileName}`
    const { error: fileStorageError } = await supabase
        .storage
        .from('files')
        .upload(fileName, formData.get('link')!);


    await productModel.create({ ...values, photo: photoPath, links: [`${filePath}`], sellerID: '664106d27e0a319150420826' });
    revalidatePath('/products', 'layout')
    return messageCreator(true, 'محصول اضافه شد')
}
export const removeProduct = async ({ productID }: { productID: string }) => {
    await connectToDB();
    const isAdminUser = await isAdmin();
    if (!isAdminUser) return messageCreator(false, 'در حالت تستی امکان حذف نیست')

    await productModel.findOneAndDelete({ _id: productID });
    revalidatePath('/products');
    redirect('/products');
}
