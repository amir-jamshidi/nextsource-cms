'use server'

import { revalidatePath } from "next/cache";
import connectToDB from "../_configs/database";
import { SHOW_IN_PAGE } from "../_constants/gobalVariables";
import alertModel from "../_models/alert.module"
import { IAlert } from "../_types/alert";
import { messageCreator } from "../_utils/messageCreator";
import isAdmin from "../_middlewares/isAdmin";

interface IGetAlerts {
    page: number,
    type: 'success' | 'warning' | 'error' | 'all'
}

export const getAlerts = async ({ page, type }: IGetAlerts) => {
    await connectToDB();
    const options: { type?: string } = {}

    if (type !== 'all') options['type'] = type.toUpperCase()

    const currentPage = page > 1 ? page - 1 : page === 1 ? page : 1
    const currentSkip = page >= 1 ? page - 1 : 0

    const alerts: IAlert[] = await alertModel.find(options)
        .sort({ _id: -1 })
        .skip(currentSkip * SHOW_IN_PAGE)
        .limit(currentPage * SHOW_IN_PAGE)
        .lean();

    const alertsAll = await alertModel.find({});
    const alertInfo = await alertModel.find(options);

    const alertsCount = alertInfo.length;
    const alertsSuccessCount = alertsAll.filter(alert => alert.type === 'SUCCESS').length;
    const alertWarningCount = alertsAll.filter(alert => alert.type === 'WARNING').length;
    const alertErrorCount = alertsAll.filter(alert => alert.type === 'ERROR').length;

    const alertsDetails: {
        alertsCount: number,
        alertsSuccessCount: number,
        alertWarningCount: number,
        alertErrorCount: number
    } = {
        alertsCount,
        alertsSuccessCount,
        alertWarningCount,
        alertErrorCount
    }

    return { alerts: JSON.parse(JSON.stringify(alerts)), alertsDetails }
}
export const deleteAlert = async ({ alertID }: { alertID: string }) => {
    await connectToDB();
    const isAdminUser = await isAdmin();
    if (!isAdminUser) return messageCreator(false, 'در حالت تستی امکان حذف نیست')

    await alertModel.findOneAndDelete({ _id: alertID }).lean();
    revalidatePath('/alerts');
    return messageCreator(true, 'پیام مورد نظر حذف شد')
}
export const addAlert = async ({ title, body, href, type }: { title: string, body: string, href?: string, type: string }) => {
    await connectToDB();
    const isAdminUser = await isAdmin();
    if (!isAdminUser) return messageCreator(false, 'در حالت تستی امکان اضافه کردن نیست')

    await alertModel.create({ title, body, href, type: type.toUpperCase() });
    revalidatePath('/alerts');
    return messageCreator(true, 'پیام جدید اضافه شد');
}
export const acitveAlert = async ({ alertID }: { alertID: string }) => {
    await connectToDB()
    await alertModel.findOneAndUpdate({ _id: alertID }, { isShow: true }).lean();
    revalidatePath('/alerts');
    return messageCreator(true, 'پیام فعال شد');
}
export const deAcitveAlert = async ({ alertID }: { alertID: string }) => {
    await connectToDB()
    await alertModel.findOneAndUpdate({ _id: alertID }, { isShow: false }).lean();
    revalidatePath('/alerts');
    return messageCreator(true, 'پیام غیرفعال شد');
}