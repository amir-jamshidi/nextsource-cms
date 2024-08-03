import Link from 'next/link'
import React from 'react'

const FilterButton = ({ title, link }: { title: string, link: string }) => {
    return (
        <div className="h-14 bg-white dark:bg-primary-900 rounded-xl flex items-center px-4 gap-x-2 shadow-sm">
            <Link href={link}>
                <button className={`bg-blue-400 text-primary-0 px-4 rounded-xl py-1.5 hover:bg-blue-500 transition-all hover:text-primary-0 cursor-pointer`}>{title}</button>
            </Link>
        </div>
    )
}

export default FilterButton