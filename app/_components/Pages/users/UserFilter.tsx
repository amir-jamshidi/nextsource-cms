import React from 'react'
import FilterContainer from '../../Modules/FilterContainer'
import Filter from '../../Modules/Filter'

const UserFilter = () => {
    return (
        <FilterContainer title='کاربــران'>
            <Filter defaultValue={7} resetOption={{ key: 'page', value: 1 }} option={{ key: "day", options: [{ title: 'امروز', value: 1 }, { title: '7 روز', value: 7 }, { title: '30 روز', value: 30 }, { title: 'همه', value: 'all' }] }} />
        </FilterContainer>
    )
}

export default UserFilter