import React from 'react'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'
import DetailsBox from '../../Modules/DetailsBox'
import { HiNoSymbol, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineCheckCircle, HiOutlineCog, HiOutlineExclamationCircle, HiOutlineMegaphone, HiOutlineShieldExclamation, HiOutlineSquare3Stack3D, HiOutlineSquares2X2 } from 'react-icons/hi2'

interface AlertDetailsBoxesProps {
    alertsDetails: {
        alertsCount: number,
        alertsSuccessCount: number,
        alertWarningCount: number,
        alertErrorCount: number
    }
}

const AlertDetailsBoxes = ({ alertsDetails }: AlertDetailsBoxesProps) => {
    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200' title='پیام ها' value={`${alertsDetails.alertsCount} پیام`} icon={<HiOutlineMegaphone   size={45} className='text-blue-600' />} />
            <DetailsBox color='bg-green-200' title='پیام های موفق' value={`${alertsDetails.alertsSuccessCount} پیام`} icon={<HiOutlineCheckCircle  size={45} className='text-green-600' />} />
            <DetailsBox color='bg-rose-200' title='پیام های خطا' value={`${alertsDetails.alertErrorCount} پیام`} icon={<HiOutlineShieldExclamation  size={45} className='text-rose-600' />} />
            <DetailsBox color='bg-violet-200' title='پیام های هشدار' value={`${alertsDetails.alertWarningCount} پیام`} icon={<HiOutlineExclamationCircle size={45} className='text-violet-600' />} />
        </DetailsBoxesContainer>
    )
}

export default AlertDetailsBoxes