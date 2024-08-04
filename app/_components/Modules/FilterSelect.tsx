'use client';

import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const FilterSelect = () => {

    const pathName = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleClick = (value: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('category', String(value));
        // if (resetOption && searchParams.get(resetOption.key)) {
        // params.set(resetOption.key, String(resetOption.value));
        // }
        router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    }



    return (
        <div className='h-14 rounded-xl bg-white shadow-sm dark:bg-primary-900 px-4 flex items-center justify-center'>
            <Select onValueChange={handleClick}>
                <SelectTrigger dir="rtl" className="w-40 bg-primary-0 dark:bg-primary-800 focus:ring-transparent rounded-xl px-4 text-base dark:ring-0 border-none text-primary-800 dark:text-primary-0">
                    <SelectValue placeholder="دسته بندی" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-primary-800 rounded-xl">
                    <SelectItem className="rounded-xl py-2 text-right" dir='rtl' value="ai">هوش مصنوعی</SelectItem>
                    <SelectItem className="rounded-xl py-2 align-right" dir="rtl" value="front">فرانت اند</SelectItem>
                    <SelectItem className="rounded-xl py-2 align-right" dir="rtl" value="back">بک اند</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}

export default FilterSelect