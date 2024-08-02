import { getOrders } from '@/app/_actions/order'
import OrdersContainer from '@/app/_components/Pages/orders/OrdersContainer'
import { IOrder } from '@/app/_types/order'

interface getOrdersProps {
  orders: IOrder[],
  ordersDetails: {
    ordersCount: number
    totalSaleOnline: number,
    totalSaleWallet: number,
    totalSalePrice: number
  }
}

const Orders = async ({ searchParams: { day = 7, page = 1 } }) => {
  const { orders, ordersDetails }: getOrdersProps = await getOrders({ day, page })
  return (
    <OrdersContainer orders={orders} ordersDetails={ordersDetails} />
  )
}

export default Orders