'use client'

import { useState } from "react";
import LoginForm from "./LoginForm";
import VerifyForm from "./VerifyForm";

const LoginContainer = () => {

    const [isActiveVerify, setIsActiveVerify] = useState(false);
    const [phone, setPhone] = useState('');

    const changeForm = (phone: string) => {
        setIsActiveVerify(true);
        setPhone(phone);
    }

    return (
        <div className='container h-screen'>
            <div className='flex justify-center items-center h-full'>
                <div className='border border-primary-50 dark:border-primary-800/50 bg-white dark:bg-primary-900 p-4 rounded-xl w-96'>
                    <h1 className='font-mo text-xl text-primary-800 dark:text-primary-100 text-center py-2'>پــنل مدیــریت نکستــ ســورس</h1>
                    {isActiveVerify ? <VerifyForm phone={phone} /> : <LoginForm changeForm={changeForm} />}
                </div>
            </div>
        </div>
    )
}

export default LoginContainer