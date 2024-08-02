import { ITicket } from '@/app/_types/ticket'
import React from 'react'
import TicketFilter from './TicketFilter'
import TicketDetailsBoxes from './TicketDetailsBoxes'
import TicketList from './TicketList'

interface TicketsContainerProps {
    tickets: ITicket[],
    ticketsDetails: {
        ticketsCountAll: number,
        ticketsCount: number,
        ticketsAnswerCount: number,
        ticketsNoAnswerCount: number
    }
}

const TicketsContainer = ({ tickets, ticketsDetails }: TicketsContainerProps) => {
    return (
        <div className='flex flex-col gap-y-10 pb-14'>
            <TicketFilter />
            <TicketDetailsBoxes ticketsDetails={ticketsDetails} />
            <TicketList ticketsCount={ticketsDetails.ticketsCount} tickets={JSON.parse(JSON.stringify(tickets))} />
        </div>
    )
}

export default TicketsContainer