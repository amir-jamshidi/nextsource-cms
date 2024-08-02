'use client'
import Modal from "@/app/_components/Modules/Modal"
import ModalFooter from "../../Modules/ModalFooter"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { alertSchema } from "@/app/_utils/Schemas"
import { addAlert } from "@/app/_actions/alert"
import toast from "react-hot-toast"
import { useState } from "react"

interface IFormAlert {
    title: string,
    body: string,
    href: string,
    type: string
}

const AlertButtonInsert = () => {

    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState,
        reset,
    } = useForm<IFormAlert>({ resolver: zodResolver(alertSchema), defaultValues: { type: 'success' } })
    const { errors, defaultValues } = formState
    const errorsArr = Object.entries(errors);

    const handleAddAlert = async ({ title, body, href, type }: { title: string, body: string, href?: string, type: string }) => {
        try {
            setIsLoading(true);
            const res = await addAlert({ title, body, href, type });
            reset({ title: '', href: '', body: '', type: 'success' });
            if (res.state) toast.success(res.message)
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Modal>
            <div className="h-14 bg-white rounded-xl flex items-center px-4 gap-x-2 shadow-sm">
                <Modal.Open>
                    <button className={`bg-blue-400 text-primary-0 px-4 rounded-xl py-1.5 hover:bg-blue-500 transition-all hover:text-primary-0 cursor-pointer`}>اضافه کردن پیام</button>
                </Modal.Open>
            </div>
            <Modal.Window>
                <div className='overflow-hidden w-2/3 rounded-xl bg-white shadow'>
                    <div className="w-full h-14 bg-primary-50 flex justify-center items-center">
                        <p className="font-mo text-primary-800">اضافه کردن پیام</p>
                    </div>
                    <div className="flex gap-x-1.5 px-4 pt-2.5">
                        {errorsArr.map(error => (
                            <p className="text-sm text-white py-0.5 px-2 bg-red-500 rounded-xl" key={error[0]}>{error[1].message}</p>
                        ))}
                    </div>
                    <form action="" onSubmit={handleSubmit(handleAddAlert)}>
                        <div className="p-4">
                            <div className="grid grid-cols-2 gap-2.5">
                                <input {...register('title')} type="text" placeholder="عنوان پیام" className="bg-primary-0 h-11 rounded-xl border text-sm border-gray-100 outline-none text-primary-800 px-2.5" />
                                <input {...register('href')} type="text" placeholder="لینک پیام (اختیاری)" className="bg-primary-0 h-11 rounded-xl border text-sm border-gray-100 outline-none text-primary-800 px-2.5" />
                                <input {...register('body')} type="text" placeholder="متن پیام" className="col-span-2 bg-primary-0 h-11 rounded-xl border text-sm border-gray-100 outline-none text-primary-800 px-2.5" />
                            </div>
                            <div className="mt-4 flex gap-x-2.5 items-center">
                                <p className="text-sm font-ir-medium text-primary-800 tracking-tight ">نوع پیام : </p>
                                <label className=" cursor-pointer font-mo gap-x-0.5 flex items-center text-green-500 border-l border-l-primary-50 pl-2.5">
                                    <input type="radio"{...register('type')} value='success' />
                                    موفق
                                </label>
                                <label className=" cursor-pointer font-mo text-amber-500 gap-x-0.5 flex items-center border-l border-l-primary-50 pl-2.5">
                                    <input type="radio"{...register('type')} value='warning' className="text-red-500" />
                                    هشدار
                                </label>

                                <label className=" cursor-pointer font-mo gap-x-0.5 flex items-center text-red-500">
                                    <input type="radio"{...register('type')} value='error' />
                                    خطا
                                </label>
                            </div>

                        </div>
                        <ModalFooter>
                            <input disabled={isLoading} type="submit" className="text-sm font-mo text-green-500 cursor-pointer disabled:text-primary-400 disabled:cursor-not-allowed" value='اضافه کردن' />
                        </ModalFooter>
                    </form>
                </div>
            </Modal.Window >
        </Modal >
    )
}

export default AlertButtonInsert