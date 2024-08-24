// Dashboard Page

import { ICategory } from "./category"
import { IOrder } from "./order"
import { IProduct } from "./product"
import { ITicket } from "./ticket"
import { IUser } from "./user"

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


// Users Page

export interface IGetUsers {
    users: IUser[],
    usersDetails: {
        usersCount: number,
        usersAllCount: number,
        usersAdminCount: number,
        usersBlockCount: number,
    }
}

export interface IUserDetails {
    usersDetails: {
        usersCount: number,
        usersAllCount: number,
        usersAdminCount: number,
        usersBlockCount: number
    }
}

export interface IUserList {
    users: IUser[]
    usersCount: number
}

export interface IUserItem {
    user: IUser,
    index: number
}

// Single User Page

export interface IGetSingleUser {
    tickets: ITicket[],
    orders: IOrder[],
    user: IUser,
    userDetails: {
        ordersCount: number,
        ordersPrice: numner,
        ticketsCount: number
    }
}

export interface ISingleUserDetails {
    user: IUser,
    userDetails: {
        ordersCount: number,
        ordersPrice: numner,
        ticketsCount: number
    }
}

export interface ISingleUserSections {
    tickets: ITicket[],
    orders: IOrder[]
}

export interface ISingleUserForm {
    fullname: string,
    phone: string,
    email: string,
    role: 'ADMIN' | 'USER',
    profile: File,
    bio: string
}


// Product Page

export interface IGetProducts {
    products: IProduct[],
    productsDetails: {
        productsCount: number,
        productsFreeCount: number,
        productNonFreeCount: number,
        productInPlanCount: number
    }
}

export interface IProductsDetails {
    productsDetails: {
        productsCount: number,
        productsFreeCount: number,
        productNonFreeCount: number,
        productInPlanCount: number
    }
}

export interface IProductList {
    products: IProduct[]
    productsCount: number
}

export interface IProductItem {
    product: IProduct,
    index: number
}

// Insert Product

export interface IProductInsertForm {
    title: string
    description: string,
    href: string,
    price: string,
    preView: string,
    size: string,
    categoryID: string,
    creatorID: string,
    isPlan: boolean,
    isFree: boolean,
    isOff: boolean,
    precentOff: string,
    cashBack: string,
    photo: File | undefined,
    link: File | undefined,
}

// Single Product Page

export interface IGetSingleProduct {
    product: IProduct
    sellers: IOrder[],
    productDetails: {
        title: string
        price: number
        isOff: boolean
        precentOff: number
        creatorID: IUser
        categoryID: ICategory
        isPlan: boolean
        isFree: boolean
        productSaleCount: number,
        productSalePrice: number,
    }
}

export interface ISingleProductDetails {
    title: string
    price: number
    isOff: boolean
    precentOff: number
    creatorID: IUser
    categoryID: ICategory
    isPlan: boolean
    isFree: boolean
    productSaleCount: number,
    productSalePrice: number,
}

export interface IProductFormProps {
    title: string
    description: string,
    href: string,
    price: string,
    preView: string,
    size: string,
    categoryID: string,
    creatorID: string,
    isPlan: boolean,
    isFree: boolean,
    isOff: boolean,
    precentOff: string,
    cashBack: string,
    photo: File | undefined,
    link: File | undefined,
}

export interface IProductForm {
    title: string
    description: string,
    href: string,
    price: string,
    preView: string,
    size: string,
    categoryID: string,
    creatorID: string,
    isPlan: boolean,
    isFree: boolean,
    isOff: boolean,
    precentOff: string,
    cashBack: string,
    photo: File | undefined,
    link: File | undefined,
}

// Categoires Page 

export interface IGetCategories {
    categories: ICategory[]
    categoriesDetails: {
        categoriesCount: number,
        categoriesAllCount: number,
        categoriesActiveCount: number,
        categoriesNonActiveCount: number
    }
}

export interface ICategoriesDetails {
    categoriesDetails: {
        categoriesCount: number,
        categoriesAllCount: number,
        categoriesActiveCount: number,
        categoriesNonActiveCount: number
    }
}

export interface ICategoriesList {
    categories: ICategory[],
    categoriesCount: number
}


export interface ICategoryForm {
    title: string,
    titleEn: string,
    href: string
}

// Alerts Page

export interface IGetAlerts {
    alerts: IAlert[],
    alertsDetails: {
        alertsCount: number,
        alertsSuccessCount: number,
        alertWarningCount: number,
        alertErrorCount: number
    }
}

export interface IAlertsDetails {
    alertsDetails: {
        alertsCount: number,
        alertsSuccessCount: number,
        alertWarningCount: number,
        alertErrorCount: number
    }
}

export interface IAlertsList {
    alerts: IAlert[],
    alertsCount: number
}

export interface IAlertsForm {
    title: string,
    body: string,
    href?: string,
    type: string
}

// Global

export interface IBoxItem {
    icon: React.ReactNode,
    color: string,
    title: string,
    text: string,
    link?: string
}

export interface IBadge {
    text: string, type: "amber" | "green" | "blue" | "red" | "rose" | "violet",
    icon?: boolean
}

export interface ICustomField {
    control: Control<any>
    fieldType: 'input' | 'textarea' | 'phoneInput' | 'checkbox' | 'datePicket' | 'select' | 'skeleton' | 'file'
    name: string
    label?: string
    placeholder?: string
    iconImg?: React.ReactNode
    iconAlt?: string
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode
    accept?: 'image/*' | '.rar,.zip'
}

export interface IDetailsBox {
    title: string,
    color: string,
    value: number | string,
    icon: React.ReactNode,
    subValue?: string
}

export interface IFilter {
    option: {
        options: { title: string, value: number | string }[],
        key: string
    },
    resetOption?: {
        key: string,
        value: number | string
    },
    defaultValue: number | string
}

export interface IFilterContainer {
    children: React.ReactNode,
    title: string
}

export interface IMoreButton {
    items: { id: number, title: string, href: string, color: string }[]
}

export interface IPagination {
    sourceCount: number,
    showInPage: number
}