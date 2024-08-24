'use server'

import { revalidatePath } from "next/cache";
import connectToDB from "../_configs/database";
import { SHOW_IN_PAGE } from "../_constants/gobalVariables";
import userModel from "../_models/user.module"
import { IUser } from "../_types/user";
import { messageCreator } from "../_utils/messageCreator";
import supabase, { supabaseUrl } from "../_services/supabase";
import ticketModel from "../_models/ticket.module";
import orderModel from "../_models/order.module";
import { Parser } from "../_utils/Parser";
import productModel from "../_models/product.module";
import sectionModel from "../_models/section.module";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import adminNotificationModel from "../_models/adminNotifications.model";
import { IAdminNotification } from "../_types/adminNotification";
import { Types } from "mongoose";
import isAdmin from "../_middlewares/isAdmin";

interface IGetUsers {
    day: number | string,
    page: number
}

export const getUsers = async ({ day = 1, page = 1 }: IGetUsers) => {
    await connectToDB();

    const dayValidator = new RegExp(/^(all|[1-9][0-9]*)$/)
    if (!dayValidator.test(String(day))) {
        day = 7
    }

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

    const users: IUser[] = await userModel.find({ createdAt: { $gt: startDate } })
        .sort({ _id: -1 })
        .skip(currentSkip * SHOW_IN_PAGE)
        .limit(currentPage * SHOW_IN_PAGE)
        .lean();

    const allUsers = await userModel.find({}).select('role').lean();


    const usersCount = await userModel.find({ createdAt: { $gt: startDate } }).countDocuments();
    const usersAllCount = allUsers.length;
    const usersAdminCount = allUsers.filter(user => user.role === 'ADMIN').length;
    const usersBlockCount = 0

    const usersDetails: {
        usersCount: number,
        usersAllCount: number,
        usersAdminCount: number,
        usersBlockCount: number,
    }
        = {
        usersCount,
        usersAllCount,
        usersAdminCount,
        usersBlockCount
    }

    return { users: JSON.parse(JSON.stringify(users)), usersDetails }
}

export const getUserDetails = async ({ userID }: { userID: string }) => {
    await connectToDB();
    if (!Types.ObjectId.isValid(userID)) return false;

    const user = await userModel.findOne({ _id: userID }).lean();

    if (!user) return false;

    const tickets = await ticketModel.find({ userID })
        .populate({ path: 'sectionID', model: sectionModel })
        .populate({ path: 'userID', model: userModel })
        .lean();

    const orders = await orderModel.find({ userID })
        .populate({ path: 'userID', model: userModel })
        .populate({ path: 'productID', model: productModel, populate: { path: 'creatorID', model: userModel, select: 'phone email' } })
        .lean();

    const ordersCount = orders.length;
    const ordersPrice = orders.reduce((total, cur) => total + cur.totalPrice, 0);
    const ticketsCount = tickets.length;

    const userDetails = {
        ordersCount,
        ordersPrice,
        ticketsCount
    }

    return { user: Parser(user), orders: Parser(orders), tickets: Parser(tickets), userDetails: Parser(userDetails) }
}

export const updateUser = async (form: FormData) => {
    await connectToDB()
    const isAdminUser = await isAdmin();
    if (!isAdminUser) return messageCreator(false, 'در حالت تستی امکان ویرایش نیست')

    if (form.get('profile') && form.get('profile') !== 'undefined') {
        const { name } = form.get('profile') as File
        const imageName = `${Math.random()}${Date.now()}.${name.slice(name.lastIndexOf('.'))}`
        const profileURL = `${supabaseUrl}/storage/v1/object/public/profiles/${imageName}`
        const { error: storageError } = await supabase
            .storage
            .from('profiles')
            .upload(imageName, form.get('profile')!);
        await userModel.findOneAndUpdate({ _id: form.get('userID') }, { fullname: form.get('fullname'), phone: form.get('phone'), email: form.get('email'), bio: form.get('bio'), role: form.get('role'), profile: profileURL })
    }

    await userModel.findOneAndUpdate({ _id: form.get('userID') }, { fullname: form.get('fullname'), phone: form.get('phone'), email: form.get('email'), bio: form.get('bio'), role: form.get('role') })
    revalidatePath(`/users/${form.get('userID')}`);
    return messageCreator(true, 'اطلاعات کاربر ویرایش شد')
}

export const getSellers = async () => {
    await connectToDB()

    const users = await userModel.find({ role: 'ADMIN' }).select('email').lean();
    return JSON.parse(JSON.stringify(users));
}

export const removeUser = async ({ userID }: { userID: string }) => {
    await connectToDB()
    const isAdminUser = await isAdmin();
    if (!isAdminUser) return messageCreator(false, 'در حالت تستی امکان حذف نیست')

    await userModel.findOneAndDelete({ _id: userID });
    revalidatePath('/users');
    redirect('/users');
}

export const getAdminNotifications = async () => {
    await connectToDB()

    const notificationsList: IAdminNotification[] = await adminNotificationModel.find({ isShow: true }).lean();

    const order = notificationsList.filter(notif => notif.type === 'ORDER').length
    const ticket = notificationsList.filter(notif => notif.type === 'TICKET').length
    const user = notificationsList.filter(notif => notif.type === 'USER').length
    const notifications = {
        order,
        ticket,
        user
    }
    return notifications
}

export const seeNotifications = async () => {
    await connectToDB()

    await adminNotificationModel.updateMany({ isShow: true }, { isShow: false });
    revalidatePath('/');
}

export const logout = async () => {
    await connectToDB()

    cookies().delete('token');
    redirect('/login');
}