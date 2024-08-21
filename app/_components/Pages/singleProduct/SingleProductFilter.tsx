import React from 'react'
import FilterContainer from '../../Modules/FilterContainer'
import BackButton from '../../Modules/BackButton'

const SingleProductFilter = () => {
    return (
        <FilterContainer title='جزئیات محصــول'>
            <BackButton href='/products' />
        </FilterContainer>
    )
}

export default SingleProductFilter