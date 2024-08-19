import { HiOutlineAtSymbol, HiOutlineBanknotes, HiOutlineCreditCard, HiOutlineKey, HiOutlinePhone, HiOutlineShoppingBag, HiOutlineTicket, HiOutlineUser } from 'react-icons/hi2'
import DetailsBox from '../../Modules/DetailsBox'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'

const SingleUserDetailsBoxes = ({ user, userDetails }) => {
    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200 dark:bg-blue-800' title='نام کاربر' value={user.fullname} icon={<HiOutlineUser size={45} className='text-blue-600 dark:text-blue-300' />} />
            <DetailsBox color='bg-green-200 dark:bg-green-800' title='شماره همراه کاربر' value={user.phone} icon={<HiOutlinePhone  size={45} className='text-green-600 dark:text-green-300' />} />
            <DetailsBox color='bg-rose-200 dark:bg-rose-800' title='ایمیل کاربر' value={user.email || 'ایمیل ندارد'} icon={<HiOutlineAtSymbol  size={45} className='text-rose-600 dark:text-rose-300' />} />
            <DetailsBox color='bg-violet-200 dark:bg-violet-800' title='نقش کاربر' value={user.role === 'ADMIN' ? 'مدیر سایت' : 'کاربر'} icon={<HiOutlineKey  size={45} className='text-violet-600 dark:text-violet-300' />} />
            <DetailsBox color='bg-blue-200 dark:bg-blue-800' title='تعداد خرید ها' value={userDetails.ordersCount} icon={<HiOutlineShoppingBag size={45} className='text-blue-600 dark:text-blue-300' />} />
            <DetailsBox color='bg-green-200 dark:bg-green-800' title='کل مبلغ خرید ها' value={userDetails.ordersPrice.toLocaleString() + ' تومان'} icon={<HiOutlineBanknotes size={45} className='text-green-600 dark:text-green-300' />} />
            <DetailsBox color='bg-rose-200 dark:bg-rose-800' title='تعداد تیکت ها ' value={userDetails.ticketsCount} icon={<HiOutlineTicket  size={45} className='text-rose-600 dark:text-rose-300' />} />
            <DetailsBox color='bg-violet-200 dark:bg-violet-800' title='موجودی ولت کاربر' value={user.money.toLocaleString() + ' تومان'} icon={<HiOutlineCreditCard  size={45} className='text-violet-600 dark:text-violet-300' />} />
        </DetailsBoxesContainer>
    )
}

export default SingleUserDetailsBoxes