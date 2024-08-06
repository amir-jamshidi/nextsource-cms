import React from 'react'
import ProductSale from './ProductChart'
import RecentOrdersSection from './RecentOrdersSection'

const DashboardSections = ({ recentOrders }) => {
    return (
        <div className="grid grid-cols-2 gap-x-2">
            <ProductSale />
            <RecentOrdersSection recentOrders={recentOrders} />
        </div>
    )
}

export default DashboardSections