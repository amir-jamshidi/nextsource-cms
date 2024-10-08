'use client'

import { IPagination } from '@/app/_types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'



const Pagination = ({ sourceCount, showInPage }: IPagination) => {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();
    const currentPage = searchParams.get('page') || 1

    const isFirstPage = +currentPage <= 1
    const isLastPage = (Number(currentPage) * showInPage) >= sourceCount

    const handleNext = () => {
        if ((+currentPage * showInPage) >= sourceCount) return
        const params = new URLSearchParams(searchParams);
        params.set('page', String(+currentPage + 1));
        router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    }
    const handlePrev = () => {
        if (+currentPage <= 1) return
        const params = new URLSearchParams(searchParams);
        params.set('page', String(+currentPage - 1));
        router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    }

    return (

        <div className='h-14 bg-white dark:bg-primary-900 flex justify-between items-center px-4'>
            {sourceCount > 0 ? (
                <p className='text-xs font-semibold tracking-tighter text-primary-700 dark:font-normal dark:text-primary-200'>نمایش {((+currentPage - 1) * showInPage) + 1} تا {(+currentPage * showInPage) > sourceCount ? sourceCount : +currentPage * showInPage} از {sourceCount} نتیجه</p>
            ) : (
                <p className='text-xs font-semibold tracking-tighter text-primary-700 dark:font-normal dark:text-primary-200'>بدون نتیجه </p>
            )}
            <div className='flex gap-x-1'>
                {(sourceCount > showInPage) && (<>
                    <button disabled={isLastPage} onClick={handleNext} className='bg-primary-50 dark:bg-primary-800 dark:hover:bg-primary-950 disabled:cursor-not-allowed rounded-full p-1 w-9 h-9 flex justify-center items-center hover:bg-green-300 transition-all cursor-pointer'>
                        <HiOutlineChevronRight className='text-primary-700 dark:text-primary-100' size={20} />
                    </button>
                    <button disabled={isFirstPage} onClick={handlePrev} className='bg-primary-50 dark:bg-primary-800 dark:hover:bg-primary-950 disabled:cursor-not-allowed rounded-full p-1 w-9 h-9 flex justify-center items-center hover:bg-green-300 transition-all cursor-pointer'>
                        <HiOutlineChevronLeft className='text-primary-700 dark:text-primary-100' size={20} />
                    </button>
                </>)}

            </div>
        </div>

    )
}

export default Pagination