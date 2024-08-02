import { Document } from "mongoose";

export interface ISection extends Document {
    title: string,
    createdAt?: Date,
    updatedAt?: Date,
}