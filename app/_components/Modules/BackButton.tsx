'use client'

import { useRouter } from "next/navigation"
import { HiOutlineArrowLeft } from "react-icons/hi2";

const BackButton = ({ href }: { href: string }) => {

    const router = useRouter();

    const handleBack = () => {
        router.push(href);
    }

    return (
        <button onClick={handleBack}>
            <span className="flex justify-center items-center h-10 w-10 rounded-full bg-white border border-primary-50 dark:border-primary-800/50 dark:bg-primary-900">
                <HiOutlineArrowLeft className="dark:text-primary-100 text-primary-600" size={23} />
            </span>
        </button>
    )
}

export default BackButton