import { HiOutlineBell, HiOutlinePower } from 'react-icons/hi2'
import ButtonToggleTheme from '../../Modules/ButtonToggleTheme'
import MobileNav from '../../Modules/MobileNav'
import HeaderAdminProfile from './HeaderAdminProfile'
import LogoutButton from '../../Modules/LogoutButton'
import Notifications from './Notifications'

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
                        <LogoutButton />
                        <Notifications />
                        <ButtonToggleTheme />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header