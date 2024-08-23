import React from 'react'
import DetailsBox from '../../Modules/DetailsBox'
import { HiOutlineBriefcase, HiOutlineCurrencyDollar, HiOutlineWallet, HiOutlineBanknotes } from 'react-icons/hi2'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'
import { IOrderDetails } from '@/app/_types'


const OrdersDetailsBoxes = ({ ordersDetails }: IOrderDetails) => {
    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200 dark:bg-blue-800' icon={<HiOutlineBriefcase size={45} className='text-blue-600 dark:text-blue-300' />} title='تعداد فروش' value={`${ordersDetails.ordersCount} فروش`} />
            <DetailsBox color='bg-green-200 dark:bg-green-800' icon={<HiOutlineCurrencyDollar size={45} className='text-green-600 dark:text-green-300' />} title='مبلغ فروش' value={`${ordersDetails.totalSalePrice.toLocaleString()} تومان`} />
            <DetailsBox color='bg-rose-200 dark:bg-rose-800' icon={<HiOutlineBanknotes size={45} className='text-rose-600 dark:text-rose-300' />} title='پرداخت نقدی' value={`${ordersDetails.totalSaleOnline.toLocaleString()} تومان`} />
            <DetailsBox color='bg-violet-200 dark:bg-violet-800' icon={<HiOutlineWallet size={45} className='text-violet-600 dark:text-violet-300' />} title='پرداخت با ولت' value={`${ordersDetails.totalSaleWallet.toLocaleString()} تومان`} />
        </DetailsBoxesContainer>
    )
}

export default OrdersDetailsBoxes