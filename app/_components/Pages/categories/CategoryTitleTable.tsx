const CategoryTitleTable = () => {
    return (
        <div className='ticket-list gap-2 h-16 bg-primary-0 dark:bg-primary-900 px-4'>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>ردیف</p>
            </div>
            <div className='h-full flex items-center col-span-2'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>عنوان</p>
            </div>
            <div className='h-full flex items-center col-span-2'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>عنوان لاتین</p>
            </div>
            <div className='h-full flex items-center col-span-2'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>لینک</p>
            </div>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>تاریخ ایجاد</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>فعال</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 dark:text-primary-100 dark:font-normal tracking-tight'>بیشتر</p>
            </div>
        </div>
    )
}

export default CategoryTitleTable