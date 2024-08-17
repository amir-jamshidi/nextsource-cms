'use client'
import { productSchema } from '@/app/_utils/Schemas'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import CustomFormField from '../../Modules/CustomFormField'
import SubmitButton from '../../Modules/SubmitButton'
import { SelectItem } from '@/components/ui/select'
import { insertProduct } from '@/app/_actions/product'
import toast from 'react-hot-toast'
import { useCategories } from '@/app/_hooks/useCategories'

const InsertProductForm = () => {


    const { data } = useCategories()

    const form = useForm({
        resolver: zodResolver(productSchema),
    })
    const { watch } = form
    const isOff = watch('isOff');


    const handleForm = async (values) => {
        try {
            Reflect.deleteProperty(values, 'photo');
            Reflect.deleteProperty(values, 'link');
            console.log(values);
            const res = await insertProduct({ values, formData: '' })
            if (res.state) toast.success(res.message)
        } catch (error) {
            console.log(error)
            toast.success('خطای ناشناخته ای رخ داد')
        }
    }


    return (
        <div className='p-4 bg-white dark:bg-primary-900 rounded-xl border border-primary-50 dark:border-primary-800/50'>
            <div className='flex gap-x-1.5 items-center'>
                <div className='w-5 h-5 bg-blue rounded-full' />
                <h3 className='font-mo text-lg text_800_100'>فرم اضافه کردن محصول</h3>
            </div>
            <Form {...form}>
                <form action="" className='my-4' onSubmit={form.handleSubmit(handleForm)}>
                    <CustomFormField
                        control={form.control}
                        fieldType='input'
                        name='title'
                        label='عنوان محصول'
                        placeholder='مثلا سورس کد اموزشی'
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType='input'
                        name='description'
                        label='توضیحات محصول'
                        placeholder='امروزه نیاز زیادی به سورس ...'
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType='input'
                        name='href'
                        label='لینک محصول'
                        placeholder='مثلا nextsource'
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType='input'
                        name='price'
                        label='قیمت محصول'
                        placeholder='مثلا 1,400,000'
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType='input'
                        name='preView'
                        label='لینک پیش نمایش محصول'
                        placeholder='مثلا nextsouce.com'
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType='input'
                        name='cashBack'
                        label='مقدار کش بک به کاربر'
                        placeholder='مثلا 350,000'
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType='input'
                        name='size'
                        label='حجم محصول به مگابایت'
                        placeholder='مثلا 8'
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType='file'
                        name='photo'
                        label='آپلود کاور محصول'
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType='file'
                        name='link'
                        label='آپلود محصول'
                    />

                    <CustomFormField
                        control={form.control}
                        fieldType='select'
                        name='categoryID'
                        label='دسته بندی محصول'
                        placeholder='دسته بندی مورد نظر'
                    >
                        {data.map(category => (
                            <SelectItem key={category._id} value={category._id}>{category.title}</SelectItem>
                        ))}
                    </CustomFormField>

                    <CustomFormField
                        control={form.control}
                        fieldType='select'
                        name='sellerID'
                        label='فروشنده'
                        placeholder='فروشنده مورد نظر'
                    >
                        <SelectItem value='tezt'>امیر</SelectItem>
                    </CustomFormField>



                    <CustomFormField
                        control={form.control}
                        fieldType='checkbox'
                        name='isPlan'
                        label='محصول در اشتراک ویژه باشد'
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType='checkbox'
                        name='isFree'
                        label='محصول رایگان باشد'
                    />
                    <CustomFormField
                        control={form.control}
                        fieldType='checkbox'
                        name='isOff'
                        label='محصول تخفیف داشته باشد '
                    />
                    {isOff && (
                        <CustomFormField
                            control={form.control}
                            fieldType='input'
                            name='precentOff'
                            label='درصد تخفیف محصول'
                            placeholder='مثلا 20%'
                        />
                    )}



                    <div className='mt-4'>
                        <SubmitButton isLoading={false} text='اضافه کردن' />
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default InsertProductForm