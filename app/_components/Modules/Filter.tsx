'use client'

import { IFilter } from "@/app/_types";
import { usePathname, useRouter, useSearchParams } from "next/navigation"



const Filter = ({ option, resetOption, defaultValue }: IFilter) => {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    const currentDay = searchParams.get(option.key) || defaultValue

    const handleClick = (value: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set(option.key, String(value));
        if (resetOption && searchParams.get(resetOption.key)) {
            params.set(resetOption.key, String(resetOption.value));
        }
        router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className="h-14 bg-white dark:bg-primary-900 rounded-xl flex items-center px-4 gap-x-2 border border-primary-100/50 dark:border-primary-800/50">
            {option.options.map(item => (
                <button onClick={() => handleClick(item.value)} key={item.value} className={`${currentDay == item.value ? 'bg-blue-400 dark:bg-blue-600 text-primary-0 ' : 'bg-gray-50 dark:bg-primary-800 text-primary-700 dark:text-primary-50'} px-3 md:px-4 rounded-xl py-1.5 dark:hover:bg-blue-700 hover:bg-blue-500 transition-all hover:text-primary-0 cursor-pointer text-sm md:text-base`}>{item.title}</button>
            ))}
        </div>
    )
}

export default Filter