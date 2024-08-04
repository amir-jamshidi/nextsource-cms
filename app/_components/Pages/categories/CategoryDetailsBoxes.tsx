import React from 'react'
import DetailsBox from '../../Modules/DetailsBox'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'
import { HiNoSymbol, HiOutlineCog, HiOutlineExclamationTriangle, HiOutlineShieldCheck, HiOutlineSquare3Stack3D, HiOutlineSquares2X2, HiOutlineTicket } from 'react-icons/hi2'

interface CategoryDetailsBoxesProps {
    categoriesDetails: {
        categoriesCount: number,
        categoriesAllCount: number,
        categoriesActiveCount: number,
        categoriesNonActiveCount: number
    }
}

const CategoryDetailsBoxes = ({ categoriesDetails }: CategoryDetailsBoxesProps) => {
    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200 dark:bg-blue-800' title='دسته بندی ها' value={`${categoriesDetails.categoriesCount} دسته بندی`} icon={<HiOutlineSquares2X2 size={45} className='text-blue-600 dark:text-blue-300' />} />
            <DetailsBox color='bg-green-200 dark:bg-green-800' title='دسته بندی فعال' value={`${categoriesDetails.categoriesActiveCount} دسته بندی`} icon={<HiOutlineCog size={45} className='text-green-600 dark:text-green-300' />} />
            <DetailsBox color='bg-rose-200 dark:bg-rose-800' title='دسته بندی غیر فعال' value={`${categoriesDetails.categoriesNonActiveCount} دسته بندی`} icon={<HiNoSymbol size={45} className='text-rose-600 dark:text-rose-300' />} />
            <DetailsBox color='bg-violet-200 dark:bg-violet-800' title='همه دسته بندی ها' value={`${categoriesDetails.categoriesAllCount} دسته بندی`} icon={<HiOutlineSquare3Stack3D size={45} className='text-violet-600 dark:text-violet-300' />} />
        </DetailsBoxesContainer>
    )
}

export default CategoryDetailsBoxes