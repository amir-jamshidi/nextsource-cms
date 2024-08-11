import { IOrder } from '@/app/_types/order'
import OrderFilter from './OrderFilter'
import OrderList from './OrderList'
import OrdersDetailsBoxes from './OrdersDetailsBoxes'
import DashboardContainer from '../dashboard/DashboardContainer'
import PageContainer from '../../Modules/PageContainer'

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
        <PageContainer>
            <OrderFilter />
            <OrdersDetailsBoxes ordersDetails={ordersDetails} />
            <OrderList ordersCount={ordersDetails.ordersCount} orders={orders} />
        </PageContainer>
    )
}

export default OrdersContainer