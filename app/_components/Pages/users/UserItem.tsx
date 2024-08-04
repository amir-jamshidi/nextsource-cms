import { IUser } from '@/app/_types/user';
import Link from 'next/link';
import { HiOutlineEye } from 'react-icons/hi2';
import Badge from '../../Modules/Badge';


interface UserItemProps {
    user: IUser,
    index: number
}

const UserItem = ({ user, index }: UserItemProps) => {

    return (
        <div className='ticket-list h-16 gap-2 px-4'>
            <div className='col-span-1 h-full w-full flex items-center'>
                <p className='font-ir-bold text-sm text-primary-800 dark:text-primary-100 pr-3'>{index}</p>
            </div>
            <div className='col-span-2 h-full w-full flex flex-col justify-center '>
                <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{user.fullname}</p>
            </div>
            <div className='col-span-2 h-full w-full flex justify-center flex-col'>
                <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{user.email || 'ندارد'}</p>
            </div>
            <div className='col-span-1 h-full w-full flex items-center'>
                <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{user.phone}</p>
            </div>
            <div className='col-span-1 h-full w-full flex justify-center flex-col'>
                <p className='font-ir-medium text-sm text-green-500 tracking-tight'>{user.money.toLocaleString() + ' تومان'}</p>
            </div>
            <div className='col-span-1 h-full w-full flex justify-center flex-col'>
                <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{new Date(user.createdAt || 0).toLocaleDateString('fa-IR')}</p>
                <p className='font-ir-medium text-primary-600 dark:text-primary-300 text-xs tracking-tight'>{new Date(user.createdAt || 0).toLocaleTimeString('fa-IR')}</p>
            </div>

            <div className='col-span-1 h-full w-full flex items-center justify-center'>
                {user.role === 'ADMIN' && <Badge text='مدیر' type='red' icon={false}/>}
                {user.role !== 'ADMIN' && <Badge text='کاربر' type='green' icon={false}/>}
            </div>

            <div className='col-span-1 h-full w-full flex items-center gap-x-1 justify-center'>
                <span className='p-1 bg-blue-200 dark:bg-blue-300 rounded-full cursor-pointer'>
                    <Link href={`/users/${user._id}`}>
                        <HiOutlineEye size={20} className='text-blue-500' />
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default UserItem