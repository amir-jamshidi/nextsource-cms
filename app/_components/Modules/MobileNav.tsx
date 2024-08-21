import isAdmin from "@/app/_middlewares/isAdmin"
import { IUser } from "@/app/_types/user"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { HiOutlineBars3 } from "react-icons/hi2"
import NavContent from "./NavContent"
import Link from "next/link"


export default async function MobileNav() {

    const admin = await isAdmin() as IUser
    return (
        <Sheet>
            <SheetTrigger asChild>
                <span>
                    <HiOutlineBars3 size={35} className="text-primary-700 dark:text-primary-100" />
                </span>
            </SheetTrigger>
            <SheetContent className="mobile-nav dark:bg-primary-900 border-none text-primary-600 dark:text-primary-300 overflow-auto">

                <div className="flex justify-center flex-col items-center py-6 ">
                    <SheetClose asChild>
                        <Link href={'/'}>
                            <div className="flex flex-col">
                                <p className="font-mo-light dark:text-primary-200 text-primary-600 text-sm">پنــل مــدیریت</p>
                                <div className="flex">
                                    <h1 className="font-mo text-3xl text-primary-800 dark:text-primary-50">نکــست</h1>
                                    <h2 className="font-mo text-3xl text-blue-500 dark:text-blue-600">ســورس</h2>
                                </div>
                            </div>
                        </Link>
                    </SheetClose>
                </div>

                <div className="flex border-y border-primary-50 dark:border-primary-800/50 mt-5 mb-6 items-center gap-x-1.5 py-2">
                    <div className="relative h-16 w-16 overflow-hidden">
                        <Image width={64} height={64} alt="Profile IMG" className="rounded-full" src={admin.profile} />
                    </div>
                    <div className="flex flex-col items-start gap-y-0.5">
                        <p className="font-sm tracking-tight text-primary-700 dark:text-gray-100 font-mo">{admin.fullname}</p>
                        <p className='text-white text-xs font-mo bg-green-400 dark:bg-green-600 dark:text-primary-100 rounded px-2'>{admin.role === 'ADMIN' && 'مدیریت'}</p>
                    </div>
                </div>
                <SheetClose asChild>
                    <NavContent />
                </SheetClose>
            </SheetContent>
        </Sheet>
    )
}

