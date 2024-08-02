import React from 'react'
import DetailsBox from '../../Modules/DetailsBox'
import { HiOutlineBriefcase, HiOutlineCurrencyDollar, HiOutlineWallet, HiOutlineBanknotes } from 'react-icons/hi2'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'

interface OrdersDetailsBoxesProps {
    ordersDetails: {
        ordersCount: number
        totalSaleOnline: number,
        totalSaleWallet: number,
        totalSalePrice: number
    }
}

const OrdersDetailsBoxes = ({ ordersDetails }: OrdersDetailsBoxesProps) => {

    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200' icon={<HiOutlineBriefcase size={45} className='text-blue-600' />} title='تعداد فروش' value={`${ordersDetails.ordersCount} فروش`} />
            <DetailsBox color='bg-green-200' icon={<HiOutlineCurrencyDollar size={45} className='text-green-600' />} title='مبلغ فروش' value={`${ordersDetails.totalSalePrice.toLocaleString()} تومان`} />
            <DetailsBox color='bg-rose-200' icon={<HiOutlineBanknotes size={45} className='text-rose-600' />} title='پرداخت نقدی' value={`${ordersDetails.totalSaleOnline.toLocaleString()} تومان`} />
            <DetailsBox color='bg-violet-200' icon={<HiOutlineWallet size={45} className='text-violet-600' />} title='پرداخت با ولت' value={`${ordersDetails.totalSaleWallet.toLocaleString()} تومان`} />
        </DetailsBoxesContainer>
    )
}

export default OrdersDetailsBoxes