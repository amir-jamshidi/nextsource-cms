import React from 'react'
import Filter from '../../Modules/Filter'
import FilterContainer from '../../Modules/FilterContainer'

const ProductFilter = () => {
    return (
        <FilterContainer title='محصــولات'>
            <Filter resetOption={{ key: 'page', value: 1 }} defaultValue={'all'} option={{ key: 'state', options: [{ title: 'رایگان', value: 'free' }, { title: 'غیر رایگان', value: 'nonfree' }, { title: 'در پلن ویژه', value: 'inplan' }, { title: 'همه', value: 'all' }] }} />
        </FilterContainer>
    )
}

export default ProductFilter