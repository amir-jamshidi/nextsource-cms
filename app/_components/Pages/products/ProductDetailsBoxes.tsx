import React from 'react'
import DetailsBox from '../../Modules/DetailsBox'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'
import { HiOutlineCircleStack, HiOutlineExclamationTriangle, HiOutlineGiftTop, HiOutlineShieldCheck, HiOutlineShoppingBag, HiOutlineSquare3Stack3D, HiOutlineTicket, HiOutlineTrophy } from 'react-icons/hi2'

interface ProductDetailsBoxesProps {
    productsDetails: {
        productsCount: number,
        productsFreeCount: number,
        productNonFreeCount: number,
        productInPlanCount: number
    }
}

const ProductDetailsBoxes = ({ productsDetails }: ProductDetailsBoxesProps) => {
    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200' title='محصول ها' value={`${productsDetails.productsCount} محصول`} icon={<HiOutlineShoppingBag size={45} className='text-blue-600' />} />
            <DetailsBox color='bg-green-200' title='محصول رایگان' value={`${productsDetails.productsFreeCount} محصول`} icon={<HiOutlineGiftTop size={45} className='text-green-600' />} />
            <DetailsBox color='bg-rose-200' title='محصول غیر رایگان' value={`${productsDetails.productNonFreeCount} محصول`} icon={<HiOutlineCircleStack size={45} className='text-rose-600' />} />
            <DetailsBox color='bg-violet-200' title='محصول در پلن ویژه' value={`${productsDetails.productInPlanCount} محصول`} icon={<HiOutlineTrophy size={45} className='text-violet-600' />} />
        </DetailsBoxesContainer>
    )
}

export default ProductDetailsBoxes