import React from 'react'
import { HiOutlineBell, HiOutlinePower, HiOutlineSun } from 'react-icons/hi2'
import Profile from '@/public/images/18718850.jpg'
import Image from 'next/image'
import ButtonToggleTheme from '../../Modules/ButtonToggleTheme'

const Header = () => {

    return (
        <header className="h-16 bg-white dark:bg-primary-900 shadow-sm z-[1]" style={{ gridColumn: '3/-1' }}>
            <div className='container h-full'>
                <div className='flex h-full items-center gap-x-1 px-4 justify-between'>
                    <div className='flex gap-x-1 items-center'>
                        <div className='rounded-full overflow-hidden border border-primary-50'>
                            <Image quality={100} width={44} height={44} src={Profile} alt='' />
                        </div>
                        <div className='flex flex-col items-start gap-y-0.5'>
                            <p className='font-mo text-primary-800 tracking-tight'>امیر حسین جمشیدی</p>
                            <p className='text-primary-700 text-xs font-mo bg-green-200 rounded px-2'>مدیریت</p>
                        </div>
                    </div>
                    <div className='flex h-full items-center gap-x-1'>
                        <span className='bg-primary-0 rounded-full p-1 border border-primary-50'>
                            <HiOutlinePower className='text-primary-700' size={25} />
                        </span>
                        <span className='bg-primary-0 rounded-full p-1 border border-primary-50'>
                            <HiOutlineBell className='text-primary-700' size={25} />
                        </span>
                        <ButtonToggleTheme />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header