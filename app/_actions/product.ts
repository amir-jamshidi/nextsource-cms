'use server'

import { SHOW_IN_PAGE } from "../_constants/gobalVariables"
import categoryModel from "../_models/category.module"
import orderModel from "../_models/order.module"
import productModel from "../_models/product.module"
import userModel from "../_models/user.module"
import { IProduct } from "../_types/product"

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

    return { products, productsDetails }

}

export const getProductDetails = async ({ productID }: { productID: string }) => {

    const product = await productModel.findOne({ _id: productID })
        .populate({ path: 'categoryID', model: categoryModel })
        .populate({ path: 'creatorID', model: userModel })
        .lean();
    const productOrder = await orderModel.find({ productID }).select('totalPrice').lean();

    const productSaleCount = productOrder.length;
    const productSalePrice = productOrder.reduce((total, cur) => total + cur.totalPrice, 0);

    const productDetails = {
        ...product, productSaleCount, productSalePrice
    }

    return { productDetails, product }
}