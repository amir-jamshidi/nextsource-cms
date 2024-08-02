'use server'

import connectToDB from "../_configs/database";
import { SHOW_IN_PAGE } from "../_constants/gobalVariables";
import userModel from "../_models/user.module"
import { IUser } from "../_types/user";

interface IGetUsers {
    day: number | string,
    page: number
}

export const getUsers = async ({ day = 1, page = 1 }: IGetUsers) => {

    await connectToDB();

    let startDate;
    if (day === 'all') {
        startDate = new Date(0);
    } else {
        const time = Number(day) * 60 * 60 * 24 * 1000
        startDate = new Date(Date.now() - time);
    }

    startDate.setHours(23, 59, 59);
    const users: IUser[] = await userModel.find({ createdAt: { $gt: startDate } })
        .sort({ _id: -1 })
        .skip((page - 1) * SHOW_IN_PAGE)
        .limit(page * SHOW_IN_PAGE)
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

    return { users, usersDetails }
}