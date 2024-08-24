import Filter from '../../Modules/Filter'
import FilterContainer from '../../Modules/FilterContainer'
import AlertButtonInsert from './AlertButtonInsert'

const AlertFilter = () => {
    return (
        <FilterContainer title='پیــام همگانـی'>
            <AlertButtonInsert />
            <Filter resetOption={{ key: 'page', value: 1 }} defaultValue={'all'} option={{ key: 'type', options: [{ title: 'موفق', value: 'success' }, { title: 'هشدار', value: 'warning' }, { title: 'خطا', value: 'error' }, { title: 'همه', value: 'all' }] }} />
        </FilterContainer>
    )
}

export default AlertFilter