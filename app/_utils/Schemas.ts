import z from 'zod'

export const alertSchema = z.object({
    title: z.string().min(3, 'عنوان حداقل سه کاراکتر باشد').max(12, 'عنوان حداکثر 12 کاراکتر باشد'),
    body: z.string().min(8, 'متن حداقل 8 کاراکتر باشد').max(128, 'متن حداکثر 128 کاراکتر باشد'),
    href: z.string(),
    type: z.string().min(1, 'نوع پیام را مشخص کنید'),
})