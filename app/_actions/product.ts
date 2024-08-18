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

interface IGetProducts {
    state: "free" | "nonfree" | "all" | "inplan",
    page: number
}

export const getProducts = async ({ state, page }: IGetProducts) => {

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

    const product = await productModel.findOne({ _id: productID })
        .populate({ path: 'categoryID', model: categoryModel })
        .populate({ path: 'creatorID', model: userModel })
        .lean();
    const productOrder = await orderModel.find({ productID }).select('totalPrice').lean();
    const categories = await categoryModel.find({}).select('title').lean();

    const productSaleCount = productOrder.length;
    const productSalePrice = productOrder.reduce((total, cur) => total + cur.totalPrice, 0);

    const productDetails = {
        ...product, productSaleCount, productSalePrice
    }

    return { productDetails, product: JSON.parse(JSON.stringify(product)), categories: JSON.parse(JSON.stringify(categories)) }
}

export const updateProduct = async ({ productID, key, value }: { productID: string, key: string, value: string | number | boolean }) => {

    if (key === 'precentOff') {
        console.log(key, value)
        let options: { isFree?: boolean, isOff?: boolean, precentOff?: number } = {}
        if (Number(value) === 100) options = { isFree: true, isOff: true, precentOff: 100 };
        if (Number(value) === 0) options = { isFree: false, isOff: false, precentOff: 0 };
        if (Number(value) > 0 && Number(value) < 100) options = { isFree: false, isOff: true, precentOff: Number(value) };
        await productModel.findOneAndUpdate({ _id: productID }, options).lean();
    } else {
        await productModel.findOneAndUpdate({ _id: productID }, { [key]: value }).lean();
    }
    revalidatePath(`/products/${productID}`)
    return messageCreator(true, 'محصول ویرایش شد')
}

export const insertProduct = async ({ values, formData }: { values: {}, formData: FormData }) => {
    console.log(formData.get('photo'))
    console.log(formData.get('link'))

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
    return messageCreator(true, 'محصول اضافه شد')
}