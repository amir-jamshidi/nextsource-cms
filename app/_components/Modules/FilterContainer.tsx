import React from 'react'

interface FilterContainerProps {
    children: React.ReactNode,
    title: string
}

const FilterContainer = ({ children,title } : FilterContainerProps) => {
    return (
        <div className='flex justify-between'>
            <div className="flex items-center gap-x-1.5">
                <span className="h-4 w-10 rounded-full bg-blue-400 inline-block"></span>
                <h1 className="font-mo-bold text-2xl text-primary-800 dark:text-primary-0">{title}</h1>
            </div>
            <div className='flex gap-x-2'>
                {children}
            </div>
        </div>
    )
}

export default FilterContainer