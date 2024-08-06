'use client'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Item } from "@radix-ui/react-select"
import Link from "next/link"
import { HiOutlineEllipsisVertical } from "react-icons/hi2"

const productsChartMenu = [
    {
        id: 1,
        title: 'سفارش های امروز',
        href: '/orders?day=1',
        color: 'bg-blue-500'
    },
    {
        id: 1,
        title: 'سفارش های 7 امروز',
        href: '/orders?day=7',
        color: 'bg-rose-500'
    },
    {
        id: 1,
        title: 'سفارش های 30 امروز',
        href: '/orders?day=30',
        color: 'bg-violet-500'
    },
    {
        id: 4,
        title: 'همه سفارش ها',
        href: '/orders?day=all',
        color: 'bg-amber-500'
    }
]

const MoreButton = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <span className="bg-primary-900 border border-primary-800 rounded-full flex items-center justify-center w-8 h-8 ">
                    <HiOutlineEllipsisVertical size={20} className="text-primary-50" />
                </span>
            </PopoverTrigger>
            <PopoverContent align="end" className="dark:bg-primary-900 w-44 rounded-xl py-2 px-2 dark:border-primary-800/70">
                <div className="flex flex-col divide-primary-800/50 divide-y ">
                    {productsChartMenu.map((menu, i, arr) => (
                        <div key={menu.id} className={`flex items-center gap-x-1.5 py-2 px-2 hover:bg-primary-800 transition-all ${i === 0 ? 'rounded-t-xl' : i + 1 === arr.length ? ' rounded-b-xl' : ''}`}>
                            <span className={` ${menu.color} flex w-2 h-2 bg-blue-600 rounded-full`}></span>
                            <Link href={menu.href}>
                                <p className="text-xs">{menu.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default MoreButton