import { HiOutlineBell, HiOutlinePower } from 'react-icons/hi2'
import ButtonToggleTheme from '../../Modules/ButtonToggleTheme'
import MobileNav from '../../Modules/MobileNav'
import HeaderAdminProfile from './HeaderAdminProfile'

const Header = () => {

    return (
        <header className="h-16 bg-white dark:bg-primary-900  z-[1] border-b border-b-primary-100/50 dark:border-b-primary-800/50 col-span-2 lg:col-span-1">
            <div className='container h-full'>
                <div className='flex h-full items-center gap-x-1 px-0 justify-between'>
                    <div className='flex lg:hidden items-center'>
                        <MobileNav />
                    </div>
                    <HeaderAdminProfile />
                    <div className='flex h-full items-center gap-x-1'>
                        <span className='bg-primary-0 rounded-full p-1 border border-primary-50 dark:bg-primary-800 dark:border-primary-800'>
                            <HiOutlinePower className='text-primary-500 dark:text-primary-200' size={25} />
                        </span>
                        <span className='bg-primary-0 rounded-full p-1 border border-primary-50 dark:bg-primary-800 dark:border-primary-800'>
                            <HiOutlineBell className='text-primary-500 dark:text-primary-200' size={25} />
                        </span>
                        <ButtonToggleTheme />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header