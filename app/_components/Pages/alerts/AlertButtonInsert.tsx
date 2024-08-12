'use client'

import Modal from "@/app/_components/Modules/Modal"
import ModalFooter from "../../Modules/ModalFooter"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { alertSchema } from "@/app/_utils/Schemas"
import { addAlert } from "@/app/_actions/alert"
import toast from "react-hot-toast"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"
import ModalHeader from "../../Modules/ModalHeader"

interface IFormAlert {
    title: string,
    body: string,
    href: string,
    type: string
}

const AlertButtonInsert = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
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
            setIsOpen(false);
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        // <Dialog>
        //     <DialogTrigger asChild>
        //         <button>open</button>
        //     </DialogTrigger>
        //     <DialogContent onCloseAutoFocus={(e) => { console.log(e) }} className="sm:max-w-md py-8 h-3/4 h w-11/12 rounded-xl dark:border-primary-800 dark:bg-primary-900">
        //         <div className="overflow-auto h-full">
        //             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, debitis amet rerum eius reiciendis ipsa tenetur numquam. Quisquam atque magnam quia sequi voluptate illum quos, ullam nesciunt, inventore enim debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia quisquam, et saepe quaerat expedita porro rem nisi ut asperiores in atque perferendis impedit sit! Incidunt maiores officia rerum autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae obcaecati consectetur non dolorem neque ad illum, fugit, architecto sunt adipisci sed ipsum officiis cumque quaerat accusantium eligendi. Corrupti, amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel obcaecati quas maiores tenetur soluta iusto! Sapiente beatae voluptatum fugiat dolorem corrupti ad vero perferendis ipsum minus! Eius, cupiditate! Alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, veritatis. Sit voluptate ab suscipit amet quisquam id dignissimos, cupiditate tenetur eligendi hic iure possimus dicta repudiandae reprehenderit blanditiis, vero provident. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni mollitia accusantium nesciunt ex officiis necessitatibus doloribus beatae aut quibusdam expedita autem officia soluta voluptas inventore, illo voluptatibus distinctio aliquid sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed rem recusandae eius, eveniet doloribus explicabo expedita dolorem quis earum nesciunt minima maxime aliquid quas ut exercitationem accusantium sit harum!</p>
        //         </div>

        //     </DialogContent>
        // </Dialog>

        <Modal>
            <div className="h-14 bg-white dark:bg-primary-900 rounded-xl flex items-center px-4 gap-x-2 border border-primary-100/50 dark:border-primary-800/50">
                <Modal.Open>
                    <button className={`bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 text-primary-0 px-3 md:px-4 rounded-xl py-1.5 hover:bg-blue-500 transition-all hover:text-primary-0 cursor-pointer text-sm md:text-base`}>اضافه کردن پیام</button>
                </Modal.Open>
            </div>
            <Modal.Window>
                <div className='flex-11 my-14 overflow-auto w-full lg:w-3/4 rounded-xl bg-white dark:bg-primary-900 shadow dark:shadow-none dark:border border-primary-800'>
                    <ModalHeader title="اضافه کردن پیام" />
                    <div className="flex gap-x-1.5 px-4 pt-2.5">
                        {errorsArr.map(error => (
                            <p className="text-sm font-mo text-white py-0.5 px-2 bg-red-500 rounded-xl" key={error[0]}>{error[1].message}</p>
                        ))}
                    </div>
                    <form action="" onSubmit={handleSubmit(handleAddAlert)}>
                        <div className="p-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 lg:gap-2.5 ">
                                <input {...register('title')} type="text" placeholder="عنوان پیام" className="bg-gray-50 dark:bg-primary-800 dark:border-primary-700 dark:text-primary-100 h-11 rounded-xl border text-sm border-primary-50 outline-none text-primary-800 px-2.5" />
                                <input {...register('href')} type="text" placeholder="لینک پیام (اختیاری)" className="bg-gray-50 dark:bg-primary-800 dark:border-primary-700 dark:text-primary-100 h-11 rounded-xl border text-sm border-primary-50 outline-none text-primary-800 px-2.5" />
                                <input {...register('body')} type="text" placeholder="متن پیام" className="col-span-1 md:col-span-2  bg-gray-50 dark:bg-primary-800 dark:border-primary-700 dark:text-primary-100 h-11 rounded-xl border text-sm border-primary-50 outline-none text-primary-800 px-2.5" />
                            </div>
                            <div className="mt-4 flex gap-x-1.5 justify-center mb-2 ">
                                <label className="cursor-pointer bg-gray-50 dark:bg-primary-800 font-mo gap-x-1 flex items-center text-green-500 border rounded-xl py-2 border-primary-50 px-4 dark:border-primary-800/70">
                                    <input type="radio"{...register('type')} value='success' />
                                    موفق
                                </label>
                                <label className="cursor-pointer bg-gray-50 dark:bg-primary-800 font-mo text-amber-500 gap-x-1 flex items-center border rounded-xl py-2 border-primary-50 px-4 dark:border-primary-800/70">
                                    <input type="radio"{...register('type')} value='warning' className="text-red-500 " />
                                    هشدار
                                </label>

                                <label className="cursor-pointer bg-gray-50 dark:bg-primary-800 font-mo gap-x-1 flex items-center text-red-500 border rounded-xl py-2 border-primary-50 px-4 dark:border-primary-800/70">
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