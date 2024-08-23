
export interface IGetDashboard {
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

export interface IDashboardDetails {
    dashboardDetails: {
        productsCount: number,
        usersCount: number,
        totalSale: number,
        totalBuy: number
    },
}

export interface IDashboardSaleChart {
    saleChartDetails: {
        day: string,
        cash: number,
        wallet: number
    }[]
}


export interface IDashboardCategoryChart {
    categoryDetails: {
        title: string,
        productCount: number
    }[]
}