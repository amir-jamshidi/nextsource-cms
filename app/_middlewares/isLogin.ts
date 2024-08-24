'use server'

import userModel from "@/app/_models/user.module";
import { IUser } from "@/app/_types/user";
import VerifyToken from "@/app/_utils/VerifyToken";
import { cookies } from "next/headers";
import connectToDB from "../_configs/database";

const isLogin = async () => {
    try {
        await connectToDB()
        const token = cookies().get('token');
        if (!token?.value) return false;
        const _id = VerifyToken(token.value);
        if (!_id) return false
        const user = await userModel.findOne({ _id }).lean() as IUser;
        if (!user) return false
        return user
    } catch (error) {
        return false
    }
}

export default isLogin