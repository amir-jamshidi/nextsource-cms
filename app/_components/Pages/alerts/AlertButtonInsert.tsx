'use client'

import { addAlert } from "@/app/_actions/alert"
import Modal from "@/app/_components/Modules/Modal"
import { alertSchema } from "@/app/_utils/Schemas"
import { SelectItem } from "@/components/ui/select"
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import { Form } from "@/components/ui/form"
import { HiOutlineBell, HiOutlineLink, HiOutlinePencil, HiOutlinePlus } from "react-icons/hi2"
import CloseButton from "../../Modules/CloseButton"
import CustomField from "../../Modules/CustomFormField"
import SubmitButton from "../../Modules/SubmitButton"
import { IAlertsForm } from "@/app/_types"



const AlertButtonInsert = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState<undefined | boolean>(undefined);
    const form = useForm<IAlertsForm>({
        resolver: zodResolver(alertSchema),
        defaultValues: {
            title: "",
            href: "",
            body: "",
            type: 'success'
        },
    })
    const handleAddAlert = async ({ title, body, href, type }: IAlertsForm) => {
        try {
            setIsLoading(true);
            const res = await addAlert({ title, body, href, type });
            if (!res.state) return toast.error(res.message);
            if (res.state) {
                toast.success(res.message)
                form.reset({ title: '', href: '', body: '', type: 'success' });
            }
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        } finally {
            setIsOpen(false);
            setIsLoading(false);
        }
    }
    return (
        <Modal setOpen={setIsOpen} open={isOpen}>
            <div className="h-14 bg-white dark:bg-primary-900 rounded-xl flex items-center px-4 gap-x-2 border border-primary-100/50 dark:border-primary-800/50">
                <Modal.Open>
                    <button className={`bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 text-primary-0 px-3 md:px-4 rounded-xl py-1.5 hover:bg-blue-500 transition-all hover:text-primary-0 cursor-pointer text-sm md:text-base`}>اضافه کردن پیام</button>
                </Modal.Open>
            </div>
            <Modal.Window>
                <div className='flex-11 my-14 overflow-auto w-full lg:w-3/4 rounded-xl bg-white dark:bg-primary-950 shadow dark:shadow-none dark:border border-primary-800/50'>
                    <div className="px-2.5 py-3.5">
                        <div className='flex items-center justify-center gap-y-2 flex-col'>
                            <div className='dark:bg-blue-800/40 bg-blue-400/40 p-1.5 inline-block rounded-full'>
                                <span className='p-2 flex bg-blue-300 dark:bg-blue-700 rounded-full'>
                                    <HiOutlinePlus size={30} className='text-blue-600 dark:text-blue-300' />
                                </span>
                            </div>
                            <h2 className='text-lg font-mo dark:text-primary-50 text-primary-700'>اضافه کردن پیام</h2>
                        </div>
                        <Form {...form}>
                            <form action="" onSubmit={form.handleSubmit(handleAddAlert)}>
                                <div className="px-2 mt-4">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2.5 ">

                                        <CustomField
                                            fieldType={'input'}
                                            control={form.control}
                                            name="title"
                                            label="عنوان پیام"
                                            placeholder="عنوان پیام"
                                            iconImg={<HiOutlineBell size={20} className="dark:text-primary-300 text-primary-700" />}
                                            iconAlt="User"
                                        />
                                        <CustomField
                                            fieldType={'input'}
                                            control={form.control}
                                            name="href"
                                            label="لینک ریدارکت کاربر (اختیاری)"
                                            placeholder="لینک پیام"
                                            iconImg={<HiOutlineLink size={20} className="dark:text-primary-300 text-primary-700" />}
                                            iconAlt="User"
                                        />
                                        <CustomField
                                            fieldType={'input'}
                                            control={form.control}
                                            name="body"
                                            label="متن پیام"
                                            placeholder="متن پیام"
                                            iconImg={<HiOutlinePencil size={20} className="dark:text-primary-300 text-primary-700" />}
                                            iconAlt="User"
                                        />

                                        <CustomField
                                            label="حالت نمایش پیام"
                                            fieldType="select"
                                            control={form.control}
                                            name="type"
                                        >
                                            <SelectItem value="success" className="py-2 rounded-xl">حالت موفق</SelectItem>
                                            <SelectItem value="warning" className="py-2 rounded-xl">حالت هشدار</SelectItem>
                                            <SelectItem value="error" className="py-2 rounded-xl">حالت خطا</SelectItem>
                                        </CustomField>

                                    </div>

                                </div>
                                <div className="mt-8 gap-x-1.5 flex">
                                    <SubmitButton text="اضافه کن" isLoading={isLoading} />
                                    <CloseButton text="بیخیال" />
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </Modal.Window >
        </Modal >
    )
}

export default AlertButtonInsert