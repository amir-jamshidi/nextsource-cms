import { VerifyCodeUser } from '@/app/_actions/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineCheckBadge } from 'react-icons/hi2';



const VerifyForm = ({ phone }: { phone: string }) => {

    const [code, setCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (code.length !== 5) return toast.error('کد تایید باید 5 رقم باشه')
        setIsLoading(true);
        try {
            const result = await VerifyCodeUser(phone, Number(code));
            if (result.state === false) return toast.error(result.message);
        } catch (error) {
            toast.success('ورود به پنل موفق')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form className='mt-4 mb-4' onSubmit={handleVerify}>
            <div className='flex bg-gray-50 border dark:border-primary-700/50 border-primary-50 dark:bg-primary-800 items-center rounded-xl px-2.5 h-12'>
                <span className='border-l border-l-primary-50 dark:border-l-primary-700/50 pl-1.5 ml-2'>
                    <HiOutlineCheckBadge size={25} className='dark:text-primary-200 text-primary-600' />
                </span>
                <input value={code} onChange={(e) => setCode(e.target.value)} className='w-full dark:bg-primary-800 h-full bg-gray-50 flex-1 text-sm border-none outline-none text-primary-700 dark:text-primary-100' autoComplete='off' type="text" placeholder='کد تایید' />
            </div>
            <input disabled={isLoading} type='submit' className='h-12 bg-blue-400 dark:bg-blue-600 w-full text-sm rounded-xl tracking-tight text-white mt-2 dark:disabled:bg-blue-500 disabled:bg-blue-300 transition-colors cursor-pointer disabled:cursor-not-allowed' value={isLoading ? 'لطفا صبر کنید' : 'ورود به پنل'} />
        </form>
    )
}

export default VerifyForm