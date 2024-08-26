import React from 'react'

const DetailsBoxesContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-1 lg:gap-2'>
            {children}
        </div>
    )
}

export default DetailsBoxesContainer