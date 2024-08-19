import React from 'react'
import FilterContainer from '../../Modules/FilterContainer'
import BackButton from '../../Modules/BackButton'

const SingleUserFilter = () => {
    return (
        <FilterContainer title='مشاهده جزئیات کاربر'>
            <BackButton href='/users' />
        </FilterContainer>
    )
}

export default SingleUserFilter