'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

interface IFilterProps {
    option: {
        options: { title: string, value: number | string }[],
        key: string
    },
    resetOption?: {
        key: string,
        value: number | string
    },
    defaultValue: number | string
}

const Filter = ({ option, resetOption, defaultValue }: IFilterProps) => {

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
                <button onClick={() => handleClick(item.value)} key={item.value} className={`${currentDay == item.value ? 'bg-blue-400 dark:bg-blue-600 text-primary-0 ' : 'bg-gray-50 dark:bg-primary-800 text-primary-700 dark:text-primary-50'} px-4 rounded-xl py-1.5 dark:hover:bg-blue-700 hover:bg-blue-500 transition-all hover:text-primary-0 cursor-pointer`}>{item.title}</button>
            ))}
        </div>
    )
}

export default Filter


// <div className="flex justify-between items-center">
{/* <div className="flex items-center gap-x-1.5">
                <span className="h-4 w-10 rounded-full bg-blue-400 inline-block"></span>
                <h1 className="font-mo-bold text-2xl text-primary-800">{title}</h1>
            </div> 
            </div>
            */}