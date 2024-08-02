import { IOrder } from '@/app/_types/order'
import OrderFilter from './OrderFilter'
import OrderList from './OrderList'
import OrdersDetailsBoxes from './OrdersDetailsBoxes'

interface IOrderContainerProps {
    orders: IOrder[],
    ordersDetails: {
        ordersCount: number
        totalSaleOnline: number,
        totalSaleWallet: number,
        totalSalePrice: number
    }
}

const OrdersContainer = async ({ orders, ordersDetails }: IOrderContainerProps) => {
    return (
        <div className='flex flex-col gap-y-10 pb-14'>
            <OrderFilter  />
            <OrdersDetailsBoxes ordersDetails={ordersDetails} />
            <OrderList ordersCount={ordersDetails.ordersCount} orders={orders} />
        </div>
    )
}

export default OrdersContainer