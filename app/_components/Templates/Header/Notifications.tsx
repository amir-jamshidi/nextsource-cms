import { getAdminNotifications } from "@/app/_actions/user"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { HiOutlineBell, HiOutlineBellSlash, HiOutlineShoppingBag, HiOutlineTicket, HiOutlineUser } from "react-icons/hi2"
import NotificationButton from "./NotificationButton";

const Notifications = async () => {

    const notifications = await getAdminNotifications();

    const notificationCount = notifications.order || notifications.ticket || notifications.user
    const hasNotification = notificationCount > 0

    return (
        <div dir="rtl" className="flex relative">
            <Popover>
                <PopoverTrigger asChild>
                    <span className='cursor-pointer bg-primary-0 rounded-full p-1 border border-primary-50 dark:bg-primary-800 dark:border-primary-800'>
                        <HiOutlineBell className='text-primary-500 dark:text-primary-200' size={25} />
                    </span>
                </PopoverTrigger>
                <PopoverContent sideOffset={10} side="bottom" className="w-56 ml-4 shadow-none border-primary-50 bg-white dark:bg-primary-900 rounded-xl dark:border-primary-800 p-2.5">
                    <div className="flex justify-center mb-2">
                        <p className="font-mo text-sm text_700_200">اعلان هــا</p>
                    </div>

                    {hasNotification ? (
                        <div className="flex flex-col divide-y dark:divide-primary-800/50 divide-primary-50 mb-2">

                            {notifications.user > 0 && (
                                <div className="flex items-center gap-x-1 py-2">
                                    <span className="flex justify-center items-center p-1 bg-blue rounded-full">
                                        <HiOutlineUser className="text-primary-100" size={18} />
                                    </span>
                                    <p className="font-mo-light text-sm text_700_200"><span className="font-ir ml-0.5">{notifications.user}</span> کاربر جدید اضافه شد</p>
                                </div>
                            )}

                            {notifications.ticket > 0 && (
                                <div className="flex items-center gap-x-1 py-2">
                                    <span className="flex justify-center items-center p-1 bg-red rounded-full">
                                        <HiOutlineTicket className="text-primary-100" size={18} />
                                    </span>
                                    <p className="font-mo-light text-sm text_700_200"><span className="font-ir ml-0.5">{notifications.ticket}</span> تیکت جدید دریافت شد</p>
                                </div>
                            )}

                            {notifications.order > 0 && (
                                <div className="flex items-center gap-x-1 py-2">
                                    <span className="flex justify-center items-center p-1 bg-green rounded-full">
                                        <HiOutlineShoppingBag className="text-primary-100" size={18} />
                                    </span>
                                    <p className="font-mo-light text-sm text_700_200"><span className="font-ir ml-0.5">{notifications.order}</span> سفارش جدید ثبت شد</p>
                                </div>
                            )}

                        </div>
                    ) : (
                        <div className="flex justify-center items-center pt-4 pb-5 gap-x-1">
                            <span className="flex p-1 bg-red rounded-full">
                                <HiOutlineBellSlash size={20} className="text-primary-100" />
                            </span>
                            <p className="text-sm font-mo-light dark:text-primary-300 text-primary-700">اعلانی برای نمایش نیست</p>
                        </div>
                    )}

                    {hasNotification && (
                        <NotificationButton />
                    )}
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default Notifications