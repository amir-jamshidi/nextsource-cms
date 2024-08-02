import React from "react"
import { CiViewColumn, CiShoppingCart, CiUser, CiReceipt, CiShop, CiSettings, CiSignpostDuo1, CiBullhorn } from 'react-icons/ci'
interface ISidebarMenus {
    id: number,
    title: string,
    href: string,
    icon: React.ReactNode
}

export const sidebarMenus: ISidebarMenus[] = [
    {
        id: 1,
        href: '/',
        title: 'داشبورد',
        icon: <CiViewColumn size={25} className="text-primary-700 dark:text-primary-0" />
    },
    {
        id: 2,
        href: '/orders',
        title: 'سفارش اخیر',
        icon: <CiShoppingCart size={25} className="text-primary-700 dark:text-primary-0" />
    },
    {
        id: 3,
        href: '/tickets',
        title: 'تیکت ها',
        icon: <CiReceipt size={25} className="text-primary-700 dark:text-primary-0" />
    },

    {
        id: 30,
        href: '/users',
        title: 'کاربران',
        icon: <CiUser size={25} className="text-primary-700 dark:text-primary-0" />
    },
    {
        id: 20,
        href: '/products',
        title: "محصولات",
        icon: <CiShop size={25} className="text-primary-700 dark:text-primary-0" />
    },
    {
        id: 5,
        href: '/categories',
        title: 'دسته بندی ',
        icon: <CiSignpostDuo1 size={25} className="text-primary-700 dark:text-primary-0" />
    },
    {
        id: 4,
        href: '/alerts',
        title: 'پیام همگانی',
        icon: <CiBullhorn  size={25} className="text-primary-700 dark:text-primary-0" />
    },
    {
        id: 6,
        href: '/settings',
        title: 'تنظیمات',
        icon: <CiSettings size={25} className="text-primary-700 dark:text-primary-0" />
    },
]