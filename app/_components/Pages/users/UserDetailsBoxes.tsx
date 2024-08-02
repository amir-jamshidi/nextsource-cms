import React from 'react'
import DetailsBox from '../../Modules/DetailsBox'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'
import { HiNoSymbol, HiOutlineAcademicCap, HiOutlineExclamationTriangle, HiOutlineShieldCheck, HiOutlineSquare3Stack3D, HiOutlineTicket, HiOutlineUser, HiOutlineUserGroup } from 'react-icons/hi2'

interface UserDetailsBoxesProps {
    usersDetails: {
        usersCount: number,
        usersAllCount: number,
        usersAdminCount: number,
        usersBlockCount: number
    }
}

const UserDetailsBoxes = ({ usersDetails }: UserDetailsBoxesProps) => {
    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200' title='کاربران' value={`${usersDetails.usersCount} کاربر`} icon={<HiOutlineUser size={45} className='text-blue-600' />} />
            <DetailsBox color='bg-green-200' title='کاربران مدیر' value={`${usersDetails.usersAdminCount} کاربر`} icon={<HiOutlineAcademicCap size={45} className='text-green-600' />} />
            <DetailsBox color='bg-rose-200' title='کاربران مسدود' value={`${usersDetails.usersBlockCount} کاربر`} icon={<HiNoSymbol  size={45} className='text-rose-600' />} />
            <DetailsBox color='bg-violet-200' title='همه کاربران' value={`${usersDetails.usersAllCount} کاربر`} icon={<HiOutlineUserGroup  size={45} className='text-violet-600' />} />
        </DetailsBoxesContainer>
    )
}

export default UserDetailsBoxes