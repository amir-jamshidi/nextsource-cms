import SidebarMenus from './SidebarMenus'

const Sidebar = () => {
    return (
        <aside className='bg-white dark:bg-gray-800 px-6 shadow z-[2] overflow-y-auto' style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}>
            <div className='flex flex-col justify-around h-full'>
                <div className='flex items-center justify-center gap-x-0.5'>
                    <p className='font-mo-bold text-2xl text-primary-800'>نکستـــ</p>
                    <p className='font-mo-bold text-xl text-primary-800'>ســـورس</p>
                </div>
                <SidebarMenus />
                <div className='flex justify-center'>
                    <span className='font-medium text-primary-800 text-sm mx-auto py-1.5 font-mo'>توسعه توسط امیر حسین جمشیدی</span>
                </div>
            </div>
        </aside >
    )
}

export default Sidebar