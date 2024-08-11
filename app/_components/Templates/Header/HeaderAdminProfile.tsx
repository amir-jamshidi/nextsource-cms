import isAdmin from '@/app/_middlewares/isAdmin';
import { IUser } from '@/app/_types/user';
import Profile from '@/public/images/18718850.jpg'
import Image from 'next/image';
import React from 'react'


const HeaderAdminProfile = async () => {

    const admin = await isAdmin() as IUser;
    
    return (
        <div className='lg:flex hidden gap-x-2.5 items-center'>
            <div className='rounded-full overflow-hidden border border-primary-50'>
                <Image quality={100} width={44} height={44} src={admin.profile} alt='' />
            </div>
            <div className='flex flex-col items-start gap-y-0.5'>
                <p className='font-mo text-primary-800 tracking-tight dark:text-primary-100'>{admin.fullname}</p>
                <p className='text-primary-700 text-xs font-mo bg-green-200 dark:bg-green-300 dark:text-gray-700 rounded px-2'>{admin.role === 'ADMIN' && 'مدیریت'}</p>
            </div>
        </div>
    )
}

export default HeaderAdminProfile