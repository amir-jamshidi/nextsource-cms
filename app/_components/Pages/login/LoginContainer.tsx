'use client'

import { useState } from "react";
import LoginForm from "./LoginForm";
import VerifyForm from "./VerifyForm";
import { HiHeart } from "react-icons/hi2";
import ButtonToggleTheme from "../../Modules/ButtonToggleTheme";

const LoginContainer = () => {

    const [isActiveVerify, setIsActiveVerify] = useState(false);
    const [phone, setPhone] = useState('');

    const changeForm = (phone: string) => {
        setIsActiveVerify(true);
        setPhone(phone);
    }

    return (
        <>
            <div className="absolute left-3 top-5">
                <ButtonToggleTheme />
            </div>
            <div className="absolute bottom-1.5 flex justify-center items-center w-full font-mo gap-x-0.5 text-sm text-primary-600 dark:text-primary-400">
                <p>طراحی شده با</p>
                <span><HiHeart size={20} className="text-red-500" /></span>
                <p>توسط امیرحسین جمشیدی</p>
            </div>
            <div className='container'>
                <div className='flex justify-center items-center h-full'>
                    <div className='border border-primary-50 dark:border-primary-800/50 bg-white dark:bg-primary-900 p-4 rounded-xl w-96'>
                        <h1 className='font-mo text-xl text-primary-800 dark:text-primary-100 text-center py-2'>پــنل مدیــریت نکستــ ســورس</h1>
                        {isActiveVerify ? <VerifyForm phone={phone} /> : <LoginForm changeForm={changeForm} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginContainer