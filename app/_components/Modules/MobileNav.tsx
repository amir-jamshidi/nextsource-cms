'use client'

import { sidebarMenus } from "@/app/_constants/sidebarMenus"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HiOutlineBars3 } from "react-icons/hi2"

export default function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <span>
                    <HiOutlineBars3 size={35} className="text-primary-700 dark:text-primary-100" />
                </span>
            </SheetTrigger>
            <SheetContent className="dark:bg-primary-900 border-none text-primary-600 dark:text-primary-300">
                <div className="flex justify-center flex-col items-center py-12">
                    <div className="flex flex-col">
                        <p className="font-mo-light dark:text-primary-200 text-primary-600 text-sm">پنــل مــدیریت</p>
                        <div className="flex">
                            <h1 className="font-mo text-3xl text-primary-800 dark:text-primary-50">نکــست</h1>
                            <h2 className="font-mo text-3xl text-blue-500 dark:text-blue-600">ســورس</h2>
                        </div>
                    </div>
                </div>
                <SheetClose asChild>
                    <NavContent />
                </SheetClose>
            </SheetContent>
        </Sheet>
    )
}

function NavContent() {
    const pathName = usePathname();

    return (
        <div className="flex flex-col">
            {sidebarMenus.map(menu => (
                <Link href={menu.href} key={menu.id}>
                    <SheetClose asChild>
                        <div className={`${pathName === menu.href && 'bg-gray-50 dark:bg-primary-800/40'} flex items-center px-3 h-12 gap-x-2.5 rounded-lg transition-all`}>
                            <span>
                                {menu.icon}
                            </span>
                            <p className='font-ir-medium text-primary-800 dark:text-primary-0'>{menu.title}</p>
                        </div>
                    </SheetClose>
                </Link>
            ))}
        </div>
    )

}