'use server'

import connectToDB from "../_configs/database"
import { SHOW_IN_PAGE } from "../_constants/gobalVariables";
import orderModel from "../_models/order.module";
import productModel from "../_models/product.module";
import userModel from "../_models/user.module";
import { IOrder } from "../_types/order";

interface IGetOrdersProps {
    day: number | string,
    page: number
}

export const getOrders = async ({ day = 1, page = 1 }: IGetOrdersProps) => {


    let startDate;

    if (day === 'all') {
        startDate = new Date(0);
    } else {
        const time = Number(day) * 60 * 60 * 24 * 1000
        startDate = new Date(Date.now() - time);

    }

    startDate.setHours(23, 59, 59);


    await connectToDB();
    const orders: IOrder[] = await orderModel.find({ createdAt: { $gt: startDate } })
        .populate({ path: 'productID', model: productModel, populate: { path: 'creatorID', model: userModel, select: 'phone email' } })
        .populate({ path: 'userID', model: userModel, select: 'phone email' })
        .sort({ _id: -1 }).skip((page - 1) * SHOW_IN_PAGE).limit(page * SHOW_IN_PAGE)
        .lean();

    const ordersInfo = await orderModel.find({ createdAt: { $gt: startDate } }).select('totalPrice action')
    const totalSalePrice = ordersInfo.reduce((total, order) => total + order.totalPrice, 0)
    const totalSaleOnline = ordersInfo.reduce((total, order) => order.action === 'ONLINE' ? order.totalPrice + total : total, 0)
    const totalSaleWallet = ordersInfo.reduce((total, order) => order.action === 'WALLET' ? order.totalPrice + total : total, 0)


    const ordersDetails: {
        ordersCount: number,
        totalSaleOnline: number,
        totalSaleWallet: number,
        totalSalePrice: number
    } = {
        ordersCount: ordersInfo.length,
        totalSaleOnline,
        totalSaleWallet,
        totalSalePrice
    }

    return { orders, ordersDetails }
}
