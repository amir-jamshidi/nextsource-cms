import isAdmin from '@/app/_middlewares/isAdmin';
import { IUser } from '@/app/_types/user';
import Image from 'next/image';


const HeaderAdminProfile = async () => {
    const admin = await isAdmin() as IUser;
    return (
        <div className='lg:flex hidden gap-x-2.5 items-center'>
            <div className='rounded-full h-11 w-11 overflow-hidden border border-primary-50 dark:border-primary-800/50'>
                <Image quality={100} width={44} height={44} className='overflow-hidden' src={admin.profile} alt='' />
            </div>
            <div className='flex flex-col items-start gap-y-0.5'>
                <p className='font-mo text-primary-800 tracking-tight dark:text-primary-100'>{admin.fullname}</p>
                <p className='text-white text-xs font-mo bg-green-400 dark:bg-green-600 dark:text-primary-100 rounded px-2'>{admin.role === 'ADMIN' && 'مدیریت'}</p>
            </div>
        </div>
    )
}

export default HeaderAdminProfile