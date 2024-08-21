import React from 'react'

interface DetailsBoxProps {
    title: string,
    color: string,
    value: number | string,
    icon: React.ReactNode,
    subValue?: string
}

const DetailsBox = ({ title, color, value, icon, subValue }: DetailsBoxProps) => {

    return (
        <div className='h-24 bg-white dark:bg-primary-900 rounded-xl border-primary-100/50 flex items-center px-2 gap-x-3 border dark:border-primary-800/50'>
            <div className={`${color} rounded-full p-3`}>
                {icon}
            </div>
            {!subValue && (
                <div className='flex flex-col gap-y-1'>
                    <p className='font-ir text-sm text-primary-700 tracking-tighter dark:text-primary-100'>{title}</p>
                    <p className='font-ir-medium text-lg text-primary-800 tracking-tighter dark:text-primary-50'>{value}</p>
                </div>
            )}
            {subValue && (
                <div className='flex flex-col gap-y-1'>
                    <p className='font-ir text-sm text-primary-700 tracking-tighter dark:text-primary-100'>{title}</p>
                    <div className='flex items-center gap-x-1.5'>
                        <p className='font-ir-medium text-lg text-primary-800 tracking-tighter dark:text-primary-50 line-through'>{value}</p>
                        <p className='text-red-400 dark:text-red-600 text-sm'>{subValue}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DetailsBox