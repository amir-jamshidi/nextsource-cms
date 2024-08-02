import React from 'react'
import Filter from '../../Modules/Filter'
import FilterContainer from '../../Modules/FilterContainer'
import FilterButton from '../../Modules/FilterButton'

const ProductFilter = () => {
    return (
        <FilterContainer title='محصــولات'>
            <FilterButton link='/products/insert' title='اضافه کردن محصول' />
            <Filter resetOption={{ key: 'page', value: 1 }} defaultValue={'all'} option={{ key: 'state', options: [{ title: 'رایگان', value: 'free' }, { title: 'غیر رایگان', value: 'nonfree' }, { title: 'در پلن ویژه', value: 'inplan' }, { title: 'همه', value: 'all' }] }} />
        </FilterContainer>
    )
}

export default ProductFilter