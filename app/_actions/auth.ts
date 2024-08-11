'use server'

import { revalidatePath } from "next/cache";
import connectToDB from "../_configs/database";
import userModel from "../_models/user.module";
import verifyModel from "../_models/verify.module";
import { IUser } from "../_types/user";
import codeGenerator from "../_utils/CodeGenerator";
import timeGenerator from "../_utils/TimeGenerator";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import TokenGenerator from "../_utils/TokenGenerator";
import { IVerify } from "../_types/verify";



export const LoginUser = async (phone: string) => {

    await connectToDB();
    await verifyModel.deleteMany({ phone });
    const code = codeGenerator();
    const expireTime = timeGenerator(5);
    const verify = await verifyModel.create({ phone, code, expireTime });
    // request.post(
    //     {
    //         url: "http://ippanel.com/api/select",
    //         body: {
    //             op: "pattern",
    //             user: "u09928168447",
    //             pass: "Faraz@1402546340042007",
    //             fromNum: "3000505",
    //             toNum: phone,
    //             patternCode: "ls41ct0qdyjrfed",
    //             inputData: [{ "verification-code": code }],
    //         },
    //         json: true,
    //     }
    // );
    if (!verify) throw new Error('خطای ناشناخته')
    return { state: true, message: "کد تایید ارسال شد" }
}

export const VerifyCodeUser = async (phone: string, code: number) => {

    await connectToDB();
    //Check User Register Before 
    const isRegisterBefore = await userModel.findOne({ phone }).lean() as IUser;
    const verifyDocument = await verifyModel.findOneAndUpdate({ phone }, { $inc: { times: +1 } }, { new: true }).lean() as IVerify;
    if (verifyDocument.times > 3) return { state: false, message: "لطفا بعدا تلاش کن" }

    if (!isRegisterBefore) return { state: false, message: "اطلاعات وارد شده صحیح نیست" }
    if (isRegisterBefore.role !== 'ADMIN') return { state: false, message: "اطلاعات وارد شده صحیح نیست" }
    //Login
    const loginUser = await verifyModel.findOne({ phone, code }).lean() as IVerify;
    if (!loginUser) return { state: false, message: "کد وارد شده اشتباهه" }
    if (Date.now() > loginUser.expireTime) return { state: false, message: "کد وارد شده منقضی شده" };
    // Set Cookie And Token
    cookies().set({
        name: 'token',
        value: TokenGenerator(String(isRegisterBefore._id)),
        expires: Date.now() + 1000 * 60 * 60 * 24 * 15,
        httpOnly: true
    })
    await verifyModel.deleteMany({ phone })

    revalidatePath('/', 'layout');
    redirect('/')
}