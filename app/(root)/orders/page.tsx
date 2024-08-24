import { getOrders } from '@/app/_actions/order'
import OrdersContainer from '@/app/_components/Pages/orders/OrdersContainer'
import { IGetOrders } from '@/app/_types'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'سفارش ها'
}


const Orders = async ({ searchParams: { day = 7, page = 1 } }) => {
  const { orders, ordersDetails }: IGetOrders = await getOrders({ day, page })

  return (
    <OrdersContainer orders={orders} ordersDetails={ordersDetails} />
  )
}

export default Orders