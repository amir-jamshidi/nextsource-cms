import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { HiOutlineBars3 } from "react-icons/hi2"
import NavContent from "./NavContent"
import isAdmin from "@/app/_middlewares/isAdmin"
import Image from "next/image"
import { IUser } from "@/app/_types/user"
import Badge from "./Badge"


export default async function MobileNav() {

    const admin = await isAdmin() as IUser

    return (
        <Sheet>
            <SheetTrigger asChild>
                <span>
                    <HiOutlineBars3 size={35} className="text-primary-700 dark:text-primary-100" />
                </span>
            </SheetTrigger>
            <SheetContent className="dark:bg-primary-900 border-none text-primary-600 dark:text-primary-300 overflow-auto">
                <div className="flex justify-center flex-col items-center py-6 border-b border-b-primary-800/50">
                    <div className="flex flex-col">
                        <p className="font-mo-light dark:text-primary-200 text-primary-600 text-sm">پنــل مــدیریت</p>
                        <div className="flex">
                            <h1 className="font-mo text-3xl text-primary-800 dark:text-primary-50">نکــست</h1>
                            <h2 className="font-mo text-3xl text-blue-500 dark:text-blue-600">ســورس</h2>
                        </div>
                    </div>
                </div>
                <div className="flex border-b border-b-primary-800/50  items-center gap-x-1.5 mb-2">
                    <Image width={72} height={72} alt="Profile IMG" src={admin.profile} />
                    <div className="flex flex-col items-start gap-y-0.5">
                        <p className="font-sm tracking-tight text-gray-100 font-mo">{admin.fullname}</p>
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

