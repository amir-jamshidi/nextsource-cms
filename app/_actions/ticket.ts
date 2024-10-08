'use server'

import { revalidatePath } from "next/cache";
import connectToDB from "../_configs/database";
import orderModel from "../_models/order.module";
import sectionModel from "../_models/section.module";
import ticketModel from "../_models/ticket.module"
import userModel from "../_models/user.module";
import { ITicket } from "../_types/ticket";
import { messageCreator } from "../_utils/messageCreator";
import isAdmin from "../_middlewares/isAdmin";


interface getTicketsProps {
    status: "answer" | "noanswer" | "all",
    page: number,
    day: number | string
}

interface answerTicketProps {
    ticketID: string,
    answer: string,

}

export const getTickets = async ({ status, page, day }: getTicketsProps) => {
    await connectToDB();

    const dayValidator = new RegExp(/^(all|[1-9][0-9]*)$/)
    if (!dayValidator.test(String(day))) {
        day = 7
    }

    let options: { createdAt?: {}, isAnswer?: boolean } = {}

    let startDate;
    if (day === 'all') {
        startDate = new Date(0);
    } else {
        const time = Number(day) * 60 * 60 * 24 * 1000
        startDate = new Date(Date.now() - time);
        startDate.setHours(23, 59, 59);
        options['createdAt'] = { $gt: startDate }
    }


    if (status === 'answer') options['isAnswer'] = true
    if (status === 'noanswer') options['isAnswer'] = false

    const currentPage = page > 1 ? page - 1 : page === 1 ? page : 1
    const currentSkip = page >= 1 ? page - 1 : 0


    const tickets: ITicket[] = await ticketModel.find(options)
        .populate({ path: 'userID', model: userModel, select: 'phone email profile' })
        .populate({ path: 'orderID', model: orderModel, select: 'code' })
        .populate({ path: 'sectionID', model: sectionModel })
        .sort({ _id: -1 }).skip(currentSkip * 10).limit(currentPage * 10)
        .lean();

    const ticketsInfo: ITicket[] = await ticketModel.find(options)
    const ticketsAll = await ticketModel.find({});

    const ticketsCountAll = ticketsAll.length
    const ticketsCount = ticketsInfo.length;
    const ticketsAnswerCount = ticketsAll.filter(ticket => ticket.isAnswer === true).length;
    const ticketsNoAnswerCount = ticketsAll.filter(ticket => ticket.isAnswer === false).length;


    const ticketsDetails = {
        ticketsCountAll,
        ticketsCount,
        ticketsAnswerCount,
        ticketsNoAnswerCount
    }

    return { tickets: JSON.parse(JSON.stringify(tickets)), ticketsDetails }

}

export const answerTicket = async ({ ticketID, answer }: answerTicketProps) => {
    await connectToDB();
    const isAdminUser = await isAdmin();
    if (!isAdminUser) return messageCreator(false, 'در حالت تستی امکان پاسخ نیست')

    await ticketModel.findOneAndUpdate({ _id: ticketID }, { isAnswer: true, answerContent: answer }).lean();
    revalidatePath('/tickets');
    return messageCreator(true, 'پاسخ شما ثبت شد');
}

export const deleteTicket = async (ticketID: string) => {
    await connectToDB()
    const isAdminUser = await isAdmin();
    if (!isAdminUser) return messageCreator(false, 'در حالت تستی امکان حذف نیست')

    await ticketModel.findOneAndDelete({ _id: ticketID });
    revalidatePath('/tickets');
    return messageCreator(true, 'تیکت حذف شد');
}