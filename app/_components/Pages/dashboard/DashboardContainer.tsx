import React from 'react'
import SaleChart from './SaleChart'
import DashboardFilter from './DashboardFilter'
import DashboardDetailsBoxes from './DashboardDetailsBoxes'
import DashboardSections from './DashboardSections'

const DashboardContainer = ({ saleChartDetails, recentOrders }) => {
    return (
        <div className='flex flex-col gap-y-10 pb-14'>
            <DashboardFilter />
            <DashboardDetailsBoxes />
            <SaleChart saleChartDetails={saleChartDetails} />
            <DashboardSections recentOrders={recentOrders} />
        </div>
    )
}

export default DashboardContainer