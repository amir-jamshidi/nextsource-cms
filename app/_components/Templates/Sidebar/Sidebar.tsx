import SidebarMenus from './SidebarMenus'

const Sidebar = () => {
    return (
        <aside className='hidden lg:flex bg-white dark:bg-primary-900 px-6 border-l border-l-pirmary-100/50 z-[2] overflow-y-auto dark:border-l dark:border-l-primary-800/50 ' style={{gridRow: '1/3' }}>
            <div className='flex flex-1 flex-col justify-around h-full'>
                <div className='flex items-center justify-center gap-x-0.5 pt-12'>
                    <p className='font-mo-bold text-2xl text-primary-800 dark: dark:text-primary-0'>نکستـــ</p>
                    <p className='font-mo-bold text-2xl text-primary-800 dark:text-blue-600'>ســـورس</p>
                </div>
                <SidebarMenus />
                <div className='flex justify-center'>
                </div>
            </div>
        </aside >
    )
}

export default Sidebar