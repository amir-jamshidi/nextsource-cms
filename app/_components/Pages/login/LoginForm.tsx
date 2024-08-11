import { LoginUser } from '@/app/_actions/auth'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { HiOutlineUser } from 'react-icons/hi2'

const LoginForm = ({ changeForm }: { changeForm: (phone: string) => void }) => {

    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (phone.length !== 11) return toast.error('شماره همراه باید 11 رقم باشه')
        setIsLoading(true);
        try {
            const result = await LoginUser(phone)
            if (!result.state) toast.error(result.message);
            toast.success(result.message)
            changeForm(phone);
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form className='mt-4 mb-4' onSubmit={handleLogin}>
            <div className='flex bg-gray-50 border dark:border-primary-700/50 border-primary-50 dark:bg-primary-800 items-center rounded-xl px-2.5 h-12'>
                <span className='border-l border-l-primary-50 dark:border-l-primary-700/50 pl-1.5 ml-2'>
                    <HiOutlineUser size={25} className='dark:text-primary-200 text-primary-600' />
                </span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full dark:bg-primary-800 h-full bg-gray-50 flex-1 text-sm border-none outline-none text-primary-700 dark:text-primary-100' autoComplete='off' type="text" placeholder='شماره تلفن همراه' />
            </div>
            <input type='submit' disabled={isLoading} className='h-12 bg-blue-400 dark:bg-blue-600 w-full text-sm rounded-xl tracking-tight text-white mt-2 dark:disabled:bg-blue-500 disabled:bg-blue-300 transition-color cursor-pointer disabled:cursor-not-allowed' value={isLoading ? 'لطفا صبر کنید' : 'ارسال کد تایید'} />
        </form>
    )
}

export default LoginForm