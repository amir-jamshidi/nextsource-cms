import { Document } from "mongoose";

export interface IUser extends Document {
    phone: string,
    profile: string,
    fullname: string,
    email: string,
    role: 'USER' | 'ADMIN',
    money: number
    bio: string,
    technologies: string[],
    createdAt?: Date,
    updatedAt?: Date
}