const AlertTitleTable = () => {
    return (
        <div className='ticket-list gap-2 h-16 bg-primary-0 px-4'>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>ردیف</p>
            </div>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>عنوان</p>
            </div>
            <div className='h-full flex items-center col-span-4'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>متن</p>
            </div>
            <div className='h-full flex items-center col-span-1'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>لینک</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>حالت</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>فعال</p>
            </div>
            <div className='h-full flex items-center col-span-1 justify-center'>
                <p className='font-ir-medium font-semibold text-sm text-primary-800 tracking-tight'>بیشتر</p>
            </div>
        </div>
    )
}

export default AlertTitleTable