import React from 'react'

const DetailsBoxesContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-2'>
            {children}
        </div>
    )
}

export default DetailsBoxesContainer