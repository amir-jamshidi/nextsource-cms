import React from 'react'
import { HiOutlineCheck } from 'react-icons/hi2'

const Badge = ({ text, type, icon = true }: { text: string, type: "amber"| "green" | "blue" | "red" | "rose" | "violet", icon?: boolean }) => {

    let extraClasses = ``;
    if (type === 'blue') extraClasses = `dark:font-ir dark:bg-blue-900 dark:text-blue-200 font-ir bg-blue-300 text-blue-800`
    if (type === 'green') extraClasses = `dark:font-ir dark:bg-green-900 dark:text-green-200 font-ir bg-green-300 text-green-800`
    if (type === 'rose') extraClasses = `dark:font-ir dark:bg-rose-900 dark:text-rose-200 font-ir bg-rose-300 text-rose-800`
    if (type === 'violet') extraClasses = `dark:font-ir dark:bg-violet-900 dark:text-violet-200 font-ir bg-violet-300 text-violet-800`
    if (type === 'red') extraClasses = `dark:font-ir dark:bg-red-900 dark:text-red-200 font-ir bg-red-300 text-red-800`
    if (type === 'amber') extraClasses = `dark:font-ir dark:bg-amber-900 dark:text-amber-200 font-ir bg-amber-300 text-amber-800`

    return (
        <div className={`${extraClasses} text-xs rounded-xl ${icon ? 'pr-2 pl-3' : 'px-3'}  py-1 flex items-center gap-x-1`}>
            {icon && (
                <span><HiOutlineCheck /></span>
            )}
            <span className='tracking-tighter'>{text}</span>
        </div>
    )
}

export default Badge