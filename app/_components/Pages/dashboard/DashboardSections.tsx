import React from 'react'
import CategoryChart from './DashboardCategoryChart'
import RecentOrdersSection from './DashboardRecentOrders'
import { IGetDashboard } from '@/app/_types'

interface IDashboardSections {
    dashboard: IGetDashboard
}

const DashboardSections = ({ dashboard }: IDashboardSections) => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <CategoryChart categoryDetails={dashboard.categoriesChartDetails} />
            <RecentOrdersSection recentOrders={dashboard.recentOrders} />
        </div>
    )
}

export default DashboardSections