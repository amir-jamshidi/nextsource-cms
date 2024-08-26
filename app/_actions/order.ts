'use server'

import connectToDB from "../_configs/database"
import { SHOW_IN_PAGE } from "../_constants/gobalVariables";
import categoryModel from "../_models/category.module";
import orderModel from "../_models/order.module";
import productModel from "../_models/product.module";
import userModel from "../_models/user.module";
import { IOrder } from "../_types/order";
import { subDays, format } from 'date-fns'

interface IGetOrdersProps {
    day: number | string,
    page: number
}

interface IGetSaleReport {
    day: string | number
}

export const getOrders = async ({ day = 1, page = 1 }: IGetOrdersProps) => {

    const dayValidator = new RegExp(/^(all|[1-9][0-9]*)$/)
    if (!dayValidator.test(String(day))) {
        day = 7
    }

    await connectToDB()

    let startDate;

    if (day === 'all') {
        startDate = new Date(0);
    } else {
        const time = Number(day) * 60 * 60 * 24 * 1000
        startDate = new Date(Date.now() - time);

    }

    startDate.setHours(23, 59, 59);

    const currentPage = page > 1 ? page - 1 : page === 1 ? page : 1
    const currentSkip = page >= 1 ? page - 1 : 0

    await connectToDB();
    const orders: IOrder[] = await orderModel.find({ createdAt: { $gt: startDate } })
        .populate({ path: 'productID', model: productModel, populate: { path: 'creatorID', model: userModel, select: 'phone email' } })
        .populate({ path: 'userID', model: userModel, select: 'phone email' })
        .sort({ _id: -1 }).skip(currentSkip * SHOW_IN_PAGE).limit(currentPage * SHOW_IN_PAGE)
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

    return { orders: JSON.parse(JSON.stringify(orders)), ordersDetails }
}

export const getDashboardDetails = async ({ day = 7 }: IGetSaleReport) => {

    const dayValidator = new RegExp(/^(all|[1-9][0-9]*)$/)
    if (!dayValidator.test(String(day))) {
        day = 7
    }

    await connectToDB()

    const dayNum = isNaN(Number(day)) ? 7 : Number(day);
    //OrderChart
    const days = Array.from({ length: dayNum }, (_, i) => {
        const d = subDays(new Date(), dayNum - i);
        return `${String(d.getFullYear())}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    });
    const orders = await orderModel.aggregate([{
        $match: {
            createdAt: {
                $gte: subDays(new Date(), dayNum)
            }
        }
    }, {
        $group: {
            _id: {
                $dateToString: {
                    format: "%Y-%m-%d",
                    date: '$createdAt'
                }
            },
            cash: {
                $sum: {
                    $cond: {
                        if: {
                            $eq: ['$action', 'ONLINE']
                        },
                        then: '$totalPrice',
                        else: 0
                    }
                }
            },
            wallet: {
                $sum: {
                    $cond: {
                        if: {
                            $eq: ['$action', 'WALLET']
                        },
                        then: '$totalPrice',
                        else: 0
                    }
                }
            }
        }
    }]);
    const result = orders.map((order, i) => ({ day: order._id, cash: order.cash, wallet: order.wallet }))
    const saleChartDetails: { day: string, wallet: number, cash: number }[] = days.map(day => {
        return result.find(order => {
            if (day === order.day) {
                return true
            }
        }) || { day, cash: 0, wallet: 0 }
    }).map(item => ({ ...item, day: new Date(item.day).toLocaleDateString('fa-IR', { month: '2-digit', day: '2-digit' }) }));

    //Categories Cahrt
    const categoriesChartDetails: { title: string, productCount: number }[] = await categoryModel.aggregate([
        {
            $lookup:
                { from: "products", localField: "_id", foreignField: "categoryID", as: "products" }
        },
        {
            $addFields:
            {
                productCount:
                    { $size: "$products" }
            }
        },
        {
            $project:
                { _id: 0, title: 1, productCount: 1 }
        }]);

    //Recent Orders
    const recentOrders: IOrder[] = await orderModel.find({}).populate({ path: 'productID', model: productModel }).limit(5).sort({ _id: -1 }).lean();

    //Details

    let startDate

    if (isNaN(Number(day))) {
        const time = Number(7) * 60 * 60 * 24 * 1000
        startDate = new Date(Date.now() - time);
    } else {
        const time = Number(day) * 60 * 60 * 24 * 1000
        startDate = new Date(Date.now() - time);

    }

    startDate.setHours(23, 59, 59);


    const orderInfo = await orderModel.find({ createdAt: { $gt: startDate } }).lean();

    const productsCount = await productModel.find({}).countDocuments();
    const usersCount = await userModel.find({}).countDocuments();
    const totalSale = orderInfo.reduce((total, cur) => total + cur.totalPrice, 0);
    const totalBuy = orderInfo.length

    const dashboardDetails: {
        productsCount: number,
        usersCount: number,
        totalSale: number,
        totalBuy: number
    } = {
        productsCount,
        usersCount,
        totalSale,
        totalBuy
    }


    return { recentOrders, saleChartDetails, dashboardDetails, categoriesChartDetails }
}