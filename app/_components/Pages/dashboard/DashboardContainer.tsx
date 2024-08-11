import React from 'react'
import SaleChart from './DashboardSaleChart'
import DashboardFilter from './DashboardFilter'
import DashboardDetailsBoxes from './DashboardDetailsBoxes'
import DashboardSections from './DashboardSections'
import { IOrder } from '@/app/_types/order'
import PageContainer from '../../Modules/PageContainer'

export interface DashboardContainerProps {
    dashboard: {
        recentOrders: IOrder[],
        saleChartDetails: {
            day: string,
            cash: number,
            wallet: number
        }[]
        dashboardDetails: {
            productsCount: number,
            usersCount: number,
            totalSale: number,
            totalBuy: number
        },
        categoriesChartDetails: {
            title: string,
            productCount: number
        }[]
    }
}

const DashboardContainer = ({ dashboard }: DashboardContainerProps) => {
    return (
        <PageContainer>
            <DashboardFilter />
            <DashboardDetailsBoxes dashboardDetails={dashboard.dashboardDetails} />
            <SaleChart saleChartDetails={dashboard.saleChartDetails} />
            <DashboardSections dashboard={dashboard} />
        </PageContainer>
    )
}

export default DashboardContainer