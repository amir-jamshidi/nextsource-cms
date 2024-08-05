import React from 'react'
import SaleChart from './SaleChart'

const DashboardContainer = ({saleChartDetails}) => {
    return (
        <div>
            <SaleChart saleChartDetails={saleChartDetails} />
        </div>
    )
}

export default DashboardContainer