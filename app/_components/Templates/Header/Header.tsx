import isAdmin from '@/app/_middlewares/isAdmin'
import ButtonToggleTheme from '../../Modules/ButtonToggleTheme'
import LogoutButton from '../../Modules/LogoutButton'
import MobileNav from '../../Modules/MobileNav'
import HeaderAdminProfile from './HeaderAdminProfile'
import Notifications from './Notifications'
import HeaderTestProfile from './HeaderTestProfile'
import { HiOutlineArrowRightStartOnRectangle, HiOutlinePower } from 'react-icons/hi2'
import Link from 'next/link'

const Header = async () => {

    const isAdminUser = await isAdmin();

    return (
        <header className="h-16 bg-white dark:bg-primary-900  z-[1] border-b border-b-primary-100/50 dark:border-b-primary-800/50 col-span-2 lg:col-span-1">
            <div className='container h-full'>
                <div className='flex h-full items-center gap-x-1 px-0 justify-between'>
                    <div className='flex lg:hidden items-center'>
                        <MobileNav />
                    </div>
                    {isAdminUser ? (
                        <HeaderAdminProfile />
                    ) : (
                        <HeaderTestProfile />
                    )}
                    <div className='flex h-full items-center gap-x-1'>

                        {isAdminUser ? (
                            <LogoutButton />
                        ) : (
                            <Link href={'/login'} className='flex'>
                                <span className='bg-primary-0 rounded-full p-1 border border-primary-50 dark:bg-primary-800 dark:border-primary-800 cursor-pointer'>
                                    <HiOutlineArrowRightStartOnRectangle className='text-primary-500 dark:text-primary-200' size={25} />
                                </span>
                            </Link>
                        )}
                        <Notifications />
                        <ButtonToggleTheme />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header