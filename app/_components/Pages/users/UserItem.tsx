import { IUser } from '@/app/_types/user';
import Link from 'next/link';
import { HiOutlineEye } from 'react-icons/hi2';
import Badge from '../../Modules/Badge';
import TableButton from '../../Modules/TableButton';
import { TableCell, TableRow } from '@/components/ui/table';


interface UserItemProps {
    user: IUser,
    index: number
}

const UserItem = ({ user, index }: UserItemProps) => {

    return (
        <>
            <TableRow className='dark:border-b-primary-800 border-b-primary-50'>
                <TableCell className="text-center">
                    <p className='py-2 text-primary-700 dark:text-primary-100'>
                        {index}
                    </p>
                </TableCell>
                <TableCell>
                    <div className='flex flex-col text-primary-700 dark:text-primary-100'>
                        <p>{user.fullname}</p>
                    </div>
                </TableCell>
                <TableCell>
                    {user.email ? (
                        <p className='text-primary-700 dark:text-primary-100'>
                            {user.email}
                        </p>
                    ) : (
                        <div className='flex'>
                            <Badge icon={false} text='ایمیل ندارد' type='red' />
                        </div>
                    )}
                </TableCell>
                <TableCell className="text-right">
                    <p className='text-primary-700 dark:text-primary-100'>
                        {user.phone}
                    </p>
                </TableCell>
                <TableCell className="text-right">
                    {user.money > 0 ? (
                        <p className='text-green-500 dark:text-green-600'>
                            {user.money.toLocaleString() + ' تومان'}
                        </p>
                    ) : (
                        <div className='flex text-red-500 dark:text-red-600'>
                            <Badge text='بدون موجودی' type='red' icon={false} />
                        </div>
                    )}
                </TableCell>
                <TableCell className="text-right">
                    <div className='flex flex-col'>
                        <p className='dark:text-primary-100 text-primary-700'>{new Date(user.createdAt || 0).toLocaleDateString('fa-IR')}</p>
                        <p className='dark:text-primary-200 text-primary-600'>{new Date(user.createdAt || 0).toLocaleTimeString('fa-IR')}</p>
                    </div>
                </TableCell>
                <TableCell className="text-center">
                    <div className='flex justify-center items-center'>
                        {user.role === 'ADMIN' && <Badge text='مدیر' type='red' icon={false} />}
                        {user.role !== 'ADMIN' && <Badge text='کاربر' type='green' icon={false} />}
                    </div>
                </TableCell>
                <TableCell className="text-center ">
                    <div className='flex justify-center gap-x-1'>
                        <TableButton link={`/users/${user._id}`} type='blue' icon={<HiOutlineEye size={18} />} />
                    </div>
                </TableCell>
            </TableRow>
        </>
    )
}

export default UserItem