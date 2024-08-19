'use client'

import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../_actions/category'


export const useCategories = () => {
    const { data } = useQuery({
        queryFn: () => getAllCategories(),
        queryKey: ['categories']
    })
    return { data }
}
