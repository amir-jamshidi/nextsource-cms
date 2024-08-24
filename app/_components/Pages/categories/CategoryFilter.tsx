import Filter from '../../Modules/Filter'
import FilterContainer from '../../Modules/FilterContainer'
import CategoryInsertButton from './CategoryInsertButton'

const CategoryFilter = () => {
    return (
        <FilterContainer title='دسته بندی هــا'>
            <CategoryInsertButton />
            <Filter resetOption={{ key: 'page', value: 1 }} defaultValue={'asc'} option={{ key: 'sort', options: [{ title: 'جدیدترین', value: 'asc' }, { title: 'قدیمی ترین', value: 'desc' }] }} />
        </FilterContainer>
    )
}

export default CategoryFilter