import Link from 'next/link'
import React from 'react'

const FilterButton = ({ title, link }: { title: string, link: string }) => {
    return (
        <div className="h-14 bg-white dark:bg-primary-900 rounded-xl flex items-center px-4 gap-x-2 border border-primary-100/50 dark:border-primary-800/50">
            <Link href={link}>
                <button className={`bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 text-primary-0 px-3 md:px-4 rounded-xl py-1.5 hover:bg-blue-500 transition-all hover:text-primary-0 cursor-pointer text-sm md:text-base`}>{title}</button>
            </Link>
        </div>
    )
}

export default FilterButton