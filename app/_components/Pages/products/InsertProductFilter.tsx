import React from 'react'
import FilterContainer from '../../Modules/FilterContainer'
import BackButton from '../../Modules/BackButton'

const InsertProductFilter = () => {
    return (
        <FilterContainer title='اضافه کردن محصول جدید'>
            <BackButton href='/products' />
        </FilterContainer>
    )
}

export default InsertProductFilter