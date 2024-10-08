import React from 'react'

const MiniTitleSection = ({ title }: { title: string }) => {
    return (
        <div className='w-full flex items-center gap-x-3'>
            <span className='flex-1 h-px bg-primary-50 dark:bg-primary-800 inline'></span>
            <p className='text-sm font-mo text-primary-600 dark:text-primary-300'>{title}</p>
            <span className='flex-1 h-px bg-primary-50 dark:bg-primary-800 inline'></span>
        </div>
    )
}

export default MiniTitleSection