import React from 'react'
import FilterContainer from '../../Modules/FilterContainer'
import Filter from '../../Modules/Filter'
import FilterButton from '../../Modules/FilterButton'

const CategoryFilter = () => {
    return (
        <FilterContainer title='دسته بندی هــا'>
            <FilterButton link='/categories/insert' title='اضافه کردن دسته بندی' />
            <Filter resetOption={{ key: 'page', value: 1 }} defaultValue={'asc'} option={{ key: 'sort', options: [{ title: 'جدیدترین', value: 'asc' }, { title: 'قدیمی ترین', value: 'desc' }] }} />
        </FilterContainer>
    )
}

export default CategoryFilter