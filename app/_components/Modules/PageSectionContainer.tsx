import React from 'react'

const PageSectionContainer = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (
        <div className='p-4 bg-white dark:bg-primary-900 rounded-xl border border-primary-50 dark:border-primary-800/50'>
            <div className='flex gap-x-1.5 items-center justify-between'>
                <div className='flex gap-x-1.5 items-center'>
                    <div className='w-5 h-5 bg-blue rounded-full' />
                    <h3 className='font-mo text-lg text_800_100'>{title}</h3>
                </div>
            </div>
            {children}
        </div>
    )
}

export default PageSectionContainer