import React from 'react'
import DetailsBox from '../../Modules/DetailsBox'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'
import { HiNoSymbol, HiOutlineCog, HiOutlineExclamationTriangle, HiOutlineShieldCheck, HiOutlineSquare3Stack3D, HiOutlineSquares2X2, HiOutlineTicket } from 'react-icons/hi2'

interface CategoryDetailsBoxesProps {
    categoiresDetails: {
    }
}

const CategoryDetailsBoxes = ({ categoiresDetails }: CategoryDetailsBoxesProps) => {
    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200' title='دسته بندی ها' value={`${0} دسته بندی`} icon={<HiOutlineSquares2X2  size={45} className='text-blue-600' />} />
            <DetailsBox color='bg-green-200' title='دسته بندی فعال' value={`${0} دسته بندی`} icon={<HiOutlineCog  size={45} className='text-green-600' />} />
            <DetailsBox color='bg-rose-200' title='دسته بندی غیر فعال' value={`${0} دسته بندی`} icon={<HiNoSymbol size={45} className='text-rose-600' />} />
            <DetailsBox color='bg-violet-200' title='همه دسته بندی ها' value={`${0} دسته بندی`} icon={<HiOutlineSquare3Stack3D size={45} className='text-violet-600' />} />
        </DetailsBoxesContainer>
    )
}

export default CategoryDetailsBoxes