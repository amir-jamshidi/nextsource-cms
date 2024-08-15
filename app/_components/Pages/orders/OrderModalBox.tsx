import Link from 'next/link'
import React from 'react'
import { HiMiniLink } from 'react-icons/hi2'


interface OrderModalBoxProps {
    icon: React.ReactNode, color: string, title: string, text: string, link?: string
}

const OrderModalBox = ({ icon, color, title, text, link }: OrderModalBoxProps) => {
    return (
        <div dir="rtl" className="flex items-center gap-x-2 bg-gray-50 border border-primary-50/50 dark:border-primary-800/50 dark:bg-primary-900 p-1.5 rounded-xl">
            <span style={{ backgroundColor: color }} className={`p-2 rounded-full inline-block`}>
                {icon}
            </span>
            <div className="flex flex-col gap-0.5">
                <p className=" font-ir-medium dark:font-ir-light text-xs tracking-tight text-primary-800 dark:text-primary-50">{title}</p>
                {!link && <p className="font-ir-medium dark:font-ir-light tracking-tight text-primary-800 dark:text-primary-50">{text}</p>}
                {link && (
                    <Link href={link} className='flex items-center gap-x-0.5'>
                        <p className="font-ir-medium dark:font-ir-light tracking-tight text-primary-800 dark:text-primary-50">{text}</p>
                        <span>
                            <HiMiniLink className='text-blue-500' size={15}/>
                        </span>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default OrderModalBox