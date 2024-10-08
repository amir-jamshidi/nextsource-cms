'use client'

import { IMoreButton } from "@/app/_types"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { HiOutlineEllipsisVertical } from "react-icons/hi2"

const MoreButton = ({ items }: IMoreButton) => {
    return (
        <Popover>
            <PopoverTrigger>
                <span className="bg-white dark:bg-primary-900 border-primary-50 border dark:border-primary-800 rounded-full flex items-center justify-center w-8 h-8 ">
                    <HiOutlineEllipsisVertical size={20} className="text-primary-600 dark:text-primary-50" />
                </span>
            </PopoverTrigger>
            <PopoverContent align="end" className="dark:bg-primary-900 w-44 rounded-xl py-2 px-2 dark:border-primary-800/70">
                <div className="flex flex-col divide-primary-50 dark:divide-primary-800/50 divide-y ">
                    {items.map((menu, i, arr) => (
                        <div key={menu.id} className={`flex items-center gap-x-1.5 py-2 px-2 hover:bg-primary-50 dark:hover:bg-primary-800 transition-all ${i === 0 ? 'rounded-t-xl' : i + 1 === arr.length ? ' rounded-b-xl' : ''} ${arr.length === 1 && 'rounded-xl'}`}>
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