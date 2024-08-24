'use client'

import { seeNotifications } from '@/app/_actions/user'
import toast from 'react-hot-toast'

const NotificationButton = () => {

    const handleSeeNotifications = async () => {
        try {
            const res = await seeNotifications();
            if (!res?.state) return toast.error(res?.message || 'در حالت تستی امکان ویرایش نیست')
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        }
    }

    return (
        <div>
            <button onClick={handleSeeNotifications} className="w-full outline-none border-none py-1.5 rounded-xl text-white font-mo text-sm bg-green">دیدم</button>
        </div>
    )
}

export default NotificationButton