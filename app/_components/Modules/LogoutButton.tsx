'use client'

import { logout } from "@/app/_actions/user"
import { HiOutlinePower } from "react-icons/hi2"

const LogoutButton = () => {

    const handleLogout = async () => {
        await logout();
    }

    return (
        <span onClick={handleLogout} className='bg-primary-0 rounded-full p-1 border border-primary-50 dark:bg-primary-800 dark:border-primary-800 hover:bg-red cursor-pointer'>
            <HiOutlinePower className='text-primary-500 dark:text-primary-200' size={25} />
        </span>
    )
}

export default LogoutButton