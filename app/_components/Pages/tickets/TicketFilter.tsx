import React from 'react'
import Filter from '../../Modules/Filter'
import FilterContainer from '../../Modules/FilterContainer'

const TicketFilter = () => {
    return (
        <FilterContainer title='تیکت هــا'>
            <Filter resetOption={{ key: 'page', value: 1 }} defaultValue={'all'} option={{ key: 'status', options: [{ title: 'با پاسخ', value: 'answer' }, { title: 'بدون پاسخ', value: 'noanswer' }, { title: 'همه', value: 'all' }] }} />
            <Filter defaultValue={7} resetOption={{ key: 'page', value: 1 }} option={{ key: "day", options: [{ title: 'امروز', value: 1 }, { title: '7 روز', value: 7 }, { title: '30 روز', value: 30 }, { title: 'همه', value: 'all' }] }} />
        </FilterContainer>
    )
}

export default TicketFilter