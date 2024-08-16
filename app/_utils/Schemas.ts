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

export const categorySchema = z.object({
    title: z.string().min(2, 'عنوان حداقل باید 2 کاراکتر باشه').max(24, 'عنوان حداکثر باید 24 کاراکتر باشه'),
    titleEn: z.string().min(2, 'عنوان لاتین حداقل باید 2 کاراکتر باشه').max(24, 'عنوان لاتین حداکثر باید 24 کاراکتر باشه'),
    href: z.string().min(1, 'لینک حداقل باید 1 کاراکتر باشه').max(64, 'لینک حداکثر باید 64 کاراکتر باشه')
})

export const userSchema = z.object({
    fullname: z.string().min(3, 'نام کامل حداقل باید 3 کاراکتر باشه'),
    email: z.string().email('لطفا یه ایمیل معتبر وارد کن'),
    phone: z.string().regex(/09[\d]{9}/, 'لطفا شماره همراه معتبر وارد کن'),
    role: z.enum(["ADMIN", 'USER']),
    profile: z.custom<File[]>(),
    bio: z.string().optional()
})