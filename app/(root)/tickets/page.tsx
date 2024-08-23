import { getTickets } from '@/app/_actions/ticket'
import TicketsContainer from '@/app/_components/Pages/tickets/TicketsContainer'
import { IGetTickets } from '@/app/_types'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'تیکت ها'
}

interface TicketsProps {
  searchParams: {
    status: "all" | "answer" | "noanswer",
    page: number,
    day: number | string
  }
}

const Tickets = async ({ searchParams: { status, page = 1, day = 7 } }: TicketsProps) => {
  const { tickets, ticketsDetails }: IGetTickets = await getTickets({ status, page, day });
  return (
    <>
      <TicketsContainer tickets={tickets} ticketsDetails={ticketsDetails} />
    </>
  )
}

export default Tickets