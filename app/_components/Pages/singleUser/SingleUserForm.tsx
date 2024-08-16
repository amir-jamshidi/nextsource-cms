'use client'

import { updateUser } from '@/app/_actions/user'
import { IUser } from '@/app/_types/user'
import { userSchema } from '@/app/_utils/Schemas'
import { Form } from '@/components/ui/form'
import { SelectItem } from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { HiOutlineAtSymbol, HiOutlineUser } from 'react-icons/hi2'
import CustomFormField from '../../Modules/CustomFormField'
import SubmitButton from '../../Modules/SubmitButton'
import Image from 'next/image'

interface IFormUser {
    fullname: string,
    phone: string,
    email: string,
    role: 'ADMIN' | 'USER',
    profile: File,
    bio: string
}

const SingleUserForm = ({ user }: { user: IUser }) => {

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<IFormUser>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            fullname: user.fullname || '',
            phone: user.phone || '',
            email: user.email || '',
            role: user.role || 'USER',
            bio: user.bio || ''
        }
    })

    const handleEditUser = async (values: { fullname: string, phone: string, email: string, bio: string, role: 'ADMIN' | 'USER', profile: File }) => {
        const formData = new FormData();
        formData.append('userID', String(user._id));
        formData.append('fullname', values.fullname);
        formData.append('phone', values.phone);
        formData.append('email', values.email);
        formData.append('profile', values.profile);
        formData.append('bio', values.bio);
        formData.append('role', values.role);
        try {
            setIsLoading(true);
            const res = await updateUser(formData);
            form.reset({ profile: undefined });
            if (res.state) return toast.success(res.message)
            if (!res.state) return toast.success(res.message)
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='p-4 bg-white border border-primary-50 dark:bg-primary-900 dark:border-primary-800/50 rounded-xl'>
            <div className='flex gap-x-1.5 items-center'>
                <div className='w-5 h-5 bg-blue rounded-full' />
                <h3 className='font-mo text-lg text_800_100'>فرم ویرایش کاربر</h3>
            </div>
            <Form {...form}>
                <form action="" className='mt-4' onSubmit={form.handleSubmit(handleEditUser)}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <CustomFormField
                            control={form.control}
                            name='fullname'
                            fieldType='input'
                            label='نام کامل'
                            placeholder='نام کامل کاربر'
                            disabled={isLoading}
                            iconImg={<HiOutlineUser size={20} className="dark:text-primary-300 text-primary-700" />}
                        />
                        <CustomFormField
                            control={form.control}
                            name='phone'
                            fieldType='input'
                            label='شماره همراه'
                            disabled={isLoading}
                            placeholder='شماره همراه کاربر'
                            iconImg={<HiOutlineUser size={20} className="dark:text-primary-300 text-primary-700" />}
                        />
                        <CustomFormField
                            control={form.control}
                            name='email'
                            fieldType='input'
                            label='ایمیل'
                            disabled={isLoading}
                            placeholder='ایمیل کاربر'
                            iconImg={<HiOutlineAtSymbol size={20} className="dark:text-primary-300 text-primary-700" />}
                        />
                        <CustomFormField
                            control={form.control}
                            name='bio'
                            fieldType='input'
                            label='بیوگرافی'
                            disabled={isLoading}
                            placeholder='متن بیوگرافی'
                            iconImg={<HiOutlineAtSymbol size={20} className="dark:text-primary-300 text-primary-700" />}
                        />
                        <CustomFormField
                            fieldType='file'
                            control={form.control}
                            name='profile'
                            label='اپلود تصویر پروفایل'
                            disabled={isLoading}
                        />
                        <CustomFormField
                            label='نقش کاربر'
                            fieldType='select'
                            disabled={isLoading}
                            control={form.control}
                            name='role'
                            placeholder='نقش کاربر'
                        >
                            <SelectItem value='ADMIN'>مدیر</SelectItem>
                            <SelectItem value='USER'>کاربر</SelectItem>
                        </CustomFormField>

                        <div className='mt-4'>
                            <SubmitButton text='ثبت تغییرات' isLoading={isLoading} />
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default SingleUserForm