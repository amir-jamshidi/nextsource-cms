import Link from 'next/link'
import React from 'react'

interface TableButtonProps {
    link?: string,
    icon: React.ReactNode,
    type: "blue" | "green" | "red" | "rose" | "amber"
}

const TableButton = ({ link, icon, type }: TableButtonProps) => {
    let classes = ``
    if (type === 'blue') classes = `dark:bg-blue-800 dark:text-blue-200 bg-blue-300 text-blue-600 dark:text-blue-300`
    if (type === 'green') classes = `dark:bg-green-800 dark:text-green-200 bg-green-300 text-green-600 dark:text-green-300`
    if (type === 'red') classes = `dark:bg-red-800 dark:text-red-200 bg-red-300 text-red-600 dark:text-red-300`
    if (type === 'rose') classes = `dark:bg-rose-800 dark:text-rose-200 bg-rose-300 text-rose-600 dark:text-rose-300`
    if (type === 'amber') classes = `dark:bg-amber-800 dark:text-amber-200 bg-amber-300 text-amber-600 dark:text-amber-300`
    return (
        <span className={`${classes} w-7 h-7 flex items-center justify-center rounded-full cursor-pointer border border-transparent dark:border-primary-800/50`}>
            {link ? (
                <Link href={link}>
                    {icon}
                </Link>
            ) : (
                <>
                    {icon}
                </>
            )}
        </span>
    )
}

export default TableButton