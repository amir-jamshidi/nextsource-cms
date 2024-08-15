import { Switch } from '@/components/ui/switch'
import React from 'react'

const SwitchPlan = ({ defaultValue, onChange }: { defaultValue: any, onChange: any }) => {
    return (
        <div>
            <span className='text-xs text-primary-200 px-1 tracking-tight'>دسترسی در پلن</span>
            <div className='h-12 rounded-xl px-2.5 bg-primary-800 flex items-center justify-between border border-primary-700'>
                <p className='text-sm tracking-tight text-primary-100'>برای کاربران ویژه رایگان باشد</p>
                <Switch onCheckedChange={(e) => onChange(e, 'isPlan')} checked={defaultValue} dir='ltr' className='text-red-400 dark:data-[state=checked]:bg-green-600 dark:data-[state=unchecked]:bg-red-800 data-[state=checked]:bg-green-400 data-[state=unchecked]:bg-red-400' />
            </div>
        </div>
    )
}

export default SwitchPlan