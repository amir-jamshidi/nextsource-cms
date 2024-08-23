import { IGetOrders } from '@/app/_types'
import PageContainer from '../../Modules/PageContainer'
import OrderFilter from './OrderFilter'
import OrderList from './OrderList'
import OrdersDetailsBoxes from './OrdersDetailsBoxes'

const OrdersContainer = async ({ orders, ordersDetails }: IGetOrders) => {
    return (
        <PageContainer>
            <OrderFilter />
            <OrdersDetailsBoxes ordersDetails={ordersDetails} />
            <OrderList ordersCount={ordersDetails.ordersCount} orders={orders} />
        </PageContainer>
    )
}

export default OrdersContainer