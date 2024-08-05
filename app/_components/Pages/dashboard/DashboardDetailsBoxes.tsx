import React from 'react'
import DetailsBox from '../../Modules/DetailsBox'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'
import { HiNoSymbol, HiOutlineCircleStack, HiOutlineCog, HiOutlineExclamationTriangle, HiOutlineShieldCheck, HiOutlineShoppingBag, HiOutlineShoppingCart, HiOutlineSquare3Stack3D, HiOutlineSquares2X2, HiOutlineTicket, HiOutlineUser } from 'react-icons/hi2'

interface DashboardDetailsBoxesProps {
   
}

const DashboardDetailsBoxes = ({ dashboardDetails }: DashboardDetailsBoxesProps) => {
    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200 dark:bg-blue-800' title='تعداد خرید ها' value={`${0} خرید`} icon={<HiOutlineShoppingCart  size={45} className='text-blue-600 dark:text-blue-300' />} />
            <DetailsBox color='bg-green-200 dark:bg-green-800' title='مبلغ فروش' value={`${0} تومان`} icon={<HiOutlineCircleStack  size={45} className='text-green-600 dark:text-green-300' />} />
            <DetailsBox color='bg-rose-200 dark:bg-rose-800' title='تعداد همه کاربران' value={`${0} کاربر`} icon={<HiOutlineUser  size={45} className='text-rose-600 dark:text-rose-300' />} />
            <DetailsBox color='bg-violet-200 dark:bg-violet-800' title='تعداد همه محصولات' value={`${0} محصول`} icon={<HiOutlineShoppingBag  size={45} className='text-violet-600 dark:text-violet-300' />} />
        </DetailsBoxesContainer>
    )
}

export default DashboardDetailsBoxes