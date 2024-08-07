import React from 'react'
import CategoryChart from './CategoryChart'
import RecentOrdersSection from './RecentOrdersSection'
import { DashboardContainerProps } from './DashboardContainer'



const DashboardSections = ({ dashboard }: DashboardContainerProps) => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <CategoryChart categoryDetails={dashboard.categoriesChartDetails} />
            <RecentOrdersSection recentOrders={dashboard.recentOrders} />
        </div>
    )
}

export default DashboardSections