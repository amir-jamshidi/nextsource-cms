import { useQuery } from 'react-query'
import { getAllCategories, getCategories } from '../_actions/category'


export const useCategories = () => {
    const { data } = useQuery({
        queryFn: getAllCategories,
        queryKey: ['categories']
    })
    return { data }
}
