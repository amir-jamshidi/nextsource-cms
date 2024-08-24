'use client'

import { insertProduct, updateProduct } from '@/app/_actions/product'
import { useCategories } from '@/app/_hooks/useCategories'
import { useSellers } from '@/app/_hooks/useSellers'
import { ICategory } from '@/app/_types/category'
import { IProduct } from '@/app/_types/product'
import { IUser } from '@/app/_types/user'
import { editProductSchema } from '@/app/_utils/Schemas'
import { Form } from '@/components/ui/form'
import { SelectItem } from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import CustomFormField from '../../Modules/CustomFormField'
import SubmitButton from '../../Modules/SubmitButton'
import SingleProductRemoveButton from './SingleProductRemoveButton'
import { IProductForm } from '@/app/_types'


const InsertProductForm = ({ product }: { product: IProduct }) => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const { data: categories = [] }: { data: ICategory[] } = useCategories()
    const { data: sellers = [] }: { data: IUser[] } = useSellers();

    const defaultValues = {
        title: product.title,
        description: product.description,
        href: product.href,
        price: String(product.price),
        preView: product.preView,
        size: String(product.size),
        categoryID: String(product.categoryID._id),
        creatorID: String(product.creatorID._id),
        isPlan: product.isPlan,
        isFree: product.isFree,
        isOff: product.isOff,
        precentOff: String(product.precentOff),
        cashBack: String(product.cashBack),
        photo: undefined,
        link: undefined,
    }

    const form = useForm<IProductForm>({
        resolver: zodResolver(editProductSchema),
        defaultValues
    })

    const { watch } = form
    const isOff = watch('isOff');

    const handleUpdateForm = async (values: IProductForm) => {
        try {
            setIsLoading(true)
            const formData = new FormData();
            if (values.photo && values.link) {
                formData.append('photo', values.photo)
                formData.append('link', values.link);
            }
            Reflect.deleteProperty(values, 'photo');
            Reflect.deleteProperty(values, 'link');

            const res = await updateProduct({ productID: String(product._id), values, formData })

            if (!res.state) return toast.error(res.message);

            if (res.state) {
                toast.success(res.message)
                form.reset(defaultValues);
                router.push('/products');
            }

        } catch (error) {
            toast.success('خطای ناشناخته ای رخ داد')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='p-4 bg-white dark:bg-primary-900 rounded-xl border border-primary-50 dark:border-primary-800/50'>
            <div className='flex gap-x-1.5 items-center justify-between'>
                <div className='flex gap-x-1.5 items-center'>
                    <div className='w-5 h-5 bg-blue rounded-full' />
                    <h3 className='font-mo text-lg text_800_100'>فرم ویرایش محصول</h3>
                </div>
                <SingleProductRemoveButton productID={String(product._id)} />
            </div>
            <Form {...form}>
                <form action="" className='my-4' onSubmit={form.handleSubmit(handleUpdateForm)}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2.5'>

                        <CustomFormField
                            control={form.control}
                            fieldType='input'
                            name='title'
                            label='عنوان محصول'
                            placeholder='مثلا سورس کد اموزشی'
                            disabled={isLoading}
                        />
                        <CustomFormField
                            control={form.control}
                            fieldType='input'
                            name='description'
                            label='توضیحات محصول'
                            placeholder='امروزه نیاز زیادی به سورس ...'
                            disabled={isLoading}
                        />
                        <CustomFormField
                            control={form.control}
                            fieldType='input'
                            name='href'
                            label='لینک محصول'
                            disabled={isLoading}
                            placeholder='مثلا nextsource'
                        />
                        <CustomFormField
                            control={form.control}
                            fieldType='input'
                            name='price'
                            label='قیمت محصول'
                            disabled={isLoading}
                            placeholder='مثلا 1,400,000'
                        />
                        <CustomFormField
                            control={form.control}
                            fieldType='input'
                            name='preView'
                            label='لینک پیش نمایش محصول'
                            disabled={isLoading}
                            placeholder='مثلا nextsouce.com'
                        />
                        <CustomFormField
                            control={form.control}
                            fieldType='input'
                            name='cashBack'
                            label='مقدار کش بک به کاربر'
                            disabled={isLoading}
                            placeholder='مثلا 350,000'
                        />
                        <CustomFormField
                            control={form.control}
                            fieldType='input'
                            name='size'
                            label='حجم محصول به مگابایت'
                            disabled={isLoading}
                            placeholder='مثلا 8'
                        />
                        <CustomFormField
                            control={form.control}
                            fieldType='file'
                            name='photo'
                            label='آپلود کاور محصول'
                            disabled={isLoading}
                            accept='image/*'
                        />
                        <CustomFormField
                            control={form.control}
                            fieldType='file'
                            name='link'
                            label='آپلود محصول'
                            disabled={isLoading}
                            accept='.rar,.zip'
                        />

                        <CustomFormField
                            control={form.control}
                            fieldType='select'
                            name='categoryID'
                            label='دسته بندی محصول'
                            disabled={isLoading}
                            placeholder='دسته بندی مورد نظر'
                        >
                            {categories?.map(category => (
                                <SelectItem key={String(category._id)} value={String(category._id)}>{category.title}</SelectItem>
                            ))}
                        </CustomFormField>

                        <CustomFormField
                            control={form.control}
                            fieldType='select'
                            name='creatorID'
                            label='فروشنده'
                            disabled={isLoading}
                            placeholder='فروشنده مورد نظر'
                        >
                            {sellers?.map(seller => (
                                <SelectItem key={String(seller._id)} value={String(seller._id)}>{seller.email}</SelectItem>
                            ))}
                        </CustomFormField>



                        <CustomFormField
                            control={form.control}
                            fieldType='checkbox'
                            name='isPlan'
                            disabled={isLoading}
                            label='محصول در اشتراک ویژه باشد'
                            placeholder='در اشتراک ویژه باشد'
                        />
                        <CustomFormField
                            control={form.control}
                            fieldType='checkbox'
                            name='isFree'
                            disabled={isLoading}
                            label='محصول رایگان باشد'
                            placeholder='رایگان باشد'
                        />
                        <CustomFormField
                            control={form.control}
                            fieldType='checkbox'
                            name='isOff'
                            disabled={isLoading}
                            label='محصول تخفیف داشته باشد '
                            placeholder='تخفیف داشته باشد'
                        />
                        {isOff && (
                            <CustomFormField
                                control={form.control}
                                fieldType='input'
                                name='precentOff'
                                label='درصد تخفیف محصول'
                                disabled={isLoading}
                                placeholder='مثلا 20%'
                            />
                        )}
                    </div>

                    <div className='mt-4'>
                        <SubmitButton isLoading={isLoading} text='آپدیت محصول' />
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default InsertProductForm