import React from 'react'

interface DetailsBoxProps {
    title: string,
    color: string,
    value: number | string,
    icon: React.ReactNode
}

const DetailsBox = ({ title, color, value, icon }: DetailsBoxProps) => {

    return (
        <div className='h-24 bg-white rounded-xl shadow-sm flex items-center px-2 gap-x-3'>
            <div className={`${color} rounded-full p-3`}>
                {icon}
            </div>
            <div className='flex flex-col gap-y-1'>
                <p className='font-ir text-sm text-primary-700 tracking-tighter'>{title}</p>
                <p className='font-ir-medium text-lg text-primary-800 tracking-tighter'>{value}</p>
            </div>
        </div>
    )
}

export default DetailsBox