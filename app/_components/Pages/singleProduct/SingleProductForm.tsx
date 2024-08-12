'use client'
import { IProduct } from '@/app/_types/product'
import React from 'react'

const SingleProductForm = ({ product }: { product: IProduct }) => {

    const handleUpdateProduct = (value: string, key: string) => {
        console.log(value, key);
    }

    return (
        <div>
            <input type="text" onBlur={(e) => handleUpdateProduct(e.target.value, 'title')} className='' defaultValue={product.title} />
            <input type="text" onBlur={(e) => handleUpdateProduct(e.target.value, 'title')} className='' defaultValue={product.title} />
        </div>
    )
}

export default SingleProductForm
