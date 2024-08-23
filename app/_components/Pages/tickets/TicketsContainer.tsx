import { IGetTickets } from '@/app/_types'
import PageContainer from '../../Modules/PageContainer'
import TicketDetailsBoxes from './TicketDetailsBoxes'
import TicketFilter from './TicketFilter'
import TicketList from './TicketList'


const TicketsContainer = ({ tickets, ticketsDetails }: IGetTickets) => {
    return (
        <PageContainer>
            <TicketFilter />
            <TicketDetailsBoxes ticketsDetails={ticketsDetails} />
            <TicketList ticketsCount={ticketsDetails.ticketsCount} tickets={JSON.parse(JSON.stringify(tickets))} />
        </PageContainer>
    )
}

export default TicketsContainer