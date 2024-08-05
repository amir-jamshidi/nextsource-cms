import React from 'react'
import FilterContainer from '../../Modules/FilterContainer'
import Filter from '../../Modules/Filter'

const DashboardFilter = () => {
    return (
        <FilterContainer title='داشبــورد'>
            <Filter defaultValue={7} resetOption={{ key: 'page', value: 1 }} option={{ key: "day", options: [{ title: '7 روز', value: 7 }, { title: '30 روز', value: 30 }, { title: '90 روز', value: 90 }] }} />
        </FilterContainer>
    )
}

export default DashboardFilter