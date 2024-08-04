import React from 'react'
import DetailsBox from '../../Modules/DetailsBox'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'
import { HiOutlineExclamationTriangle, HiOutlineShieldCheck, HiOutlineSquare3Stack3D, HiOutlineTicket } from 'react-icons/hi2'

interface TicketDetailsBoxesProps {
    ticketsDetails: {
        ticketsCountAll: number,
        ticketsCount: number,
        ticketsAnswerCount: number,
        ticketsNoAnswerCount: number
    }
}

const TicketDetailsBoxes = ({ ticketsDetails }: TicketDetailsBoxesProps) => {
    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200 dark:bg-blue-800' title='تیکت ها' value={`${ticketsDetails.ticketsCount} تیکت`} icon={<HiOutlineTicket size={45} className='text-blue-600 dark:text-blue-300' />} />
            <DetailsBox color='bg-green-200 dark:bg-green-800' title='تیکت با پاسخ' value={`${ticketsDetails.ticketsAnswerCount} تیکت`} icon={<HiOutlineShieldCheck size={45} className='text-green-600 dark:text-green-300' />} />
            <DetailsBox color='bg-rose-200 dark:bg-rose-800' title='تیکت بدون پاسخ' value={`${ticketsDetails.ticketsNoAnswerCount} تیکت`} icon={<HiOutlineExclamationTriangle size={45} className='text-rose-600 dark:text-rose-300' />} />
            <DetailsBox color='bg-violet-200 dark:bg-violet-800' title='همه تیکت ها' value={`${ticketsDetails.ticketsCountAll} تیکت`} icon={<HiOutlineSquare3Stack3D size={45} className='text-violet-600 dark:text-violet-300' />} />
        </DetailsBoxesContainer>
    )
}

export default TicketDetailsBoxes