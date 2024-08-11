import React from 'react'

const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col gap-5 md:gap-y-10 pb-14'>
            {children}
        </div>
    )
}

export default PageContainer