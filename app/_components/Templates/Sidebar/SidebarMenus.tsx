'use client'

import { sidebarMenus } from '@/app/_constants/sidebarMenus'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SidebarMenus = () => {
    const pathName = usePathname();
    return (
        <div>
            {sidebarMenus.map(menu => (
                <Link href={menu.href} key={menu.id}>
                    <div className={`${pathName === menu.href && 'bg-gray-50 dark:bg-primary-800/40'} flex items-center px-3 h-12 gap-x-2.5 rounded-lg transition-all`}>
                        <span>
                            {menu.icon}
                        </span>
                        <p className='font-ir-medium text-primary-800 dark:text-primary-0'>{menu.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default SidebarMenus