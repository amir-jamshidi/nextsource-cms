import { Document, Types } from "mongoose";
import { IOrder } from "./order";
import { ISection } from "./section";
import { IUser } from "./user";

export interface ITicket extends Document {
    sectionID: Types.ObjectId | ISection,
    body: string,
    orderID: Types.ObjectId | IOrder,
    file: string[],
    isAnswer: boolean,
    answerContent: string,
    userID: Types.ObjectId | IUser,
    code: string
    createdAt?: Date,
    updatedAt?: Date
}