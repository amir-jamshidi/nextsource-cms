import { useQuery } from '@tanstack/react-query'
import { getSellers } from '../_actions/user'

export const useSellers = () => {
    const { data } = useQuery({
        queryFn: () => getSellers(),
        queryKey: ['sellers']
    })
    return { data }
}
