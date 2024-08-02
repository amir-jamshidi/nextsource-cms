import { getTickets } from '@/app/_actions/ticket'
import TicketsContainer from '@/app/_components/Pages/tickets/TicketsContainer'
import React from 'react'

interface TicketsProps {
  searchParams: {
    status: "all" | "answer" | "noanswer",
    page: number,
    day: number | string
  }
}

const Tickets = async ({ searchParams: { status, page = 1, day = 7 } }: TicketsProps) => {

  const { tickets, ticketsDetails } = await getTickets({ status, page  , day});

  return (
    <>
      <TicketsContainer tickets={tickets} ticketsDetails={ticketsDetails} />
    </>
  )
}

export default Tickets