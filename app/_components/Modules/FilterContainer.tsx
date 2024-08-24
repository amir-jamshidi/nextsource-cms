import { IFilterContainer } from '@/app/_types'

const FilterContainer = ({ children, title }: IFilterContainer) => {
    return (
        <div className='flex flex-col lg:flex-row gap-y-6 justify-between'>
            <div className="flex items-center gap-x-1.5">
                <span className="h-4 w-10 rounded-full bg-blue-400 dark:bg-blue-600 inline-block"></span>
                <h1 className="font-mo-bold text-2xl text-primary-800 dark:text-primary-0">{title}</h1>
            </div>
            <div className='flex items-end lg:flex-row flex-col-reverse gap-2 self-end'>
                {children}
            </div>
        </div>
    )
}

export default FilterContainer