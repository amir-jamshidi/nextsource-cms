'use client'

import { seeNotifications } from '@/app/_actions/user'
import toast from 'react-hot-toast'

const NotificationButton = () => {

    const handleSeeNotifications = async () => {
        try {
            await seeNotifications();
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