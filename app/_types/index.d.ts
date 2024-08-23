// Dashboard Page

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

//Orders Page

export interface IGetOrders {
    orders: IOrder[],
    ordersDetails: {
        ordersCount: number
        totalSaleOnline: number,
        totalSaleWallet: number,
        totalSalePrice: number
    }
}

export interface IOrderDetails {
    ordersDetails: {
        ordersCount: number
        totalSaleOnline: number,
        totalSaleWallet: number,
        totalSalePrice: number
    }
}

export interface IOrderList {
    orders: IOrder[],
    ordersCount: number
}

export interface IOrderItem {
    order: IOrder,
    index: number
}


// Tickets Page

export interface IGetTickets {
    tickets: ITicket[],
    ticketsDetails: {
        ticketsCountAll: number,
        ticketsCount: number,
        ticketsAnswerCount: number,
        ticketsNoAnswerCount: number
    }
}

export interface ITicketDetails {
    ticketsDetails: {
        ticketsCountAll: number,
        ticketsCount: number,
        ticketsAnswerCount: number,
        ticketsNoAnswerCount: number
    }
}

export interface ITicketsList {
    tickets: ITicket[]
    ticketsCount: number
}

export interface ITicketItem {
    ticket: ITicket,
    index: number
}

// Global

export interface IBoxItem {
    icon: React.ReactNode,
    color: string,
    title: string,
    text: string,
    link?: string
}