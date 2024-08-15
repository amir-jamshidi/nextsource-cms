'use client'
import { updateProduct } from '@/app/_actions/product'
import { IProduct } from '@/app/_types/product'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Input from './Input'
import SelectCategory from './Select'
import { ICategory } from '@/app/_types/category'
import { Switch } from '@/components/ui/switch'
import SwitchPlan from './SwitchPlan'


const SingleProductForm = ({ product, categories }: { product: IProduct, categories: ICategory[] }) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleUpdateProduct = async (value: string | number | boolean, key: string) => {
        try {
            setIsLoading(true);
            const res = await updateProduct({ productID: String(product._id), value, key });
            if (res) toast.success(res.message);
        } catch (error) {
            toast.error('خطای غیر منتظره ای رخ داد')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='p-4 rounded-xl bg-primary-900'>
            <h2 className='font-mo text-xl text-center text-primary-50 mb-4'>ویرایش محصول</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-2.5'>
                <Input placeholder='نام محصول' defaultValue={product.title} disabled={isLoading} onBlur={handleUpdateProduct} keyItem='title' />
                <Input type='number' placeholder='قیمت محصول' defaultValue={product.price} disabled={isLoading} onBlur={handleUpdateProduct} keyItem='price' />
                <Input placeholder='لینک محصول' defaultValue={product.href} disabled={isLoading} onBlur={handleUpdateProduct} keyItem='href' />
                <Input placeholder='تصویر محصول' defaultValue={product.photo} disabled={isLoading} onBlur={handleUpdateProduct} keyItem='photo' />
                <Input type='number' placeholder='سایز محصول' defaultValue={product.size} disabled={isLoading} onBlur={handleUpdateProduct} keyItem='size' />
                <Input placeholder='لینک پیش نمایش محصول' defaultValue={product.preView} disabled={isLoading} onBlur={handleUpdateProduct} keyItem='preView' />
                {product.links.map((link, i) => (
                    <Input key={link} placeholder='لینک فایل محصول' defaultValue={link} disabled={isLoading} onBlur={handleUpdateProduct} keyItem='size' />
                ))}
                <Input placeholder='تخفیف محصول (100% به معنی رایگان و 0 به معنی بدون تخفیف)' defaultValue={product.precentOff} disabled={isLoading} onBlur={handleUpdateProduct} keyItem='precentOff' />

                <Input classes='mb-1.5' placeholder='توضیحات محصول' defaultValue={product.description} disabled={isLoading} onBlur={handleUpdateProduct} keyItem='description' type='textarea' />

                <SelectCategory disabled={isLoading} onChange={handleUpdateProduct} categoryID={String(product.categoryID._id)} categories={categories} />
                <SwitchPlan defaultValue={product.isPlan} onChange={handleUpdateProduct} />


            </div>
        </div>
    )
}

export default SingleProductForm
