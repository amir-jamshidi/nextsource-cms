import z from 'zod'

export const alertSchema = z.object({
    title: z
        .string()
        .min(3, "عنوان حداقل باید 3 کاراکتر باشه")
        .max(12, "عنوان حداکثر باید 12 کاراکتر باشه"),
    body: z.
        string()
        .min(8, 'متن حداقل 8 کاراکتر باشه')
        .max(128, 'متن حداکثر 128 کاراکتر باشه'),
    href: z.string(),
    type: z.string().min(1, 'نوع پیام را مشخص کنید'),
})