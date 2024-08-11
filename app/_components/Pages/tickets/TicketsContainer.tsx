import { ITicket } from '@/app/_types/ticket'
import React from 'react'
import TicketFilter from './TicketFilter'
import TicketDetailsBoxes from './TicketDetailsBoxes'
import TicketList from './TicketList'
import PageContainer from '../../Modules/PageContainer'

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
        <PageContainer>
            <TicketFilter />
            <TicketDetailsBoxes ticketsDetails={ticketsDetails} />
            <TicketList ticketsCount={ticketsDetails.ticketsCount} tickets={JSON.parse(JSON.stringify(tickets))} />
        </PageContainer>
    )
}

export default TicketsContainer