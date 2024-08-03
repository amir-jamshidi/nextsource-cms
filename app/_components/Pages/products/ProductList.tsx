
import React from 'react'
import Pagination from '../../Modules/Pagination'
import NoItemTable from '../../Modules/NoItemTable'
import { SHOW_IN_PAGE } from '@/app/_constants/gobalVariables'
import { IProduct } from '@/app/_types/product'
import ProductTitleTable from './ProductTitleTable'
import ProductItem from './ProductItem'

interface IProductList {
    products: IProduct[]
    productsCount: number
}

const ProductList = ({ products, productsCount }: IProductList) => {
    return (
        <div className='rounded-xl bg-white dark:bg-primary-900 dark:divide-primary-800 dark:border-primary-800 flex flex-col border divide-y divide-primary-0 border-primary-50 overflow-hidden'>
            <ProductTitleTable />
            {products.length > 0 ? (<>
                {products.map((product, i) => (
                    <ProductItem key={String(product._id)} product={product} index={i + 1} />
                ))}
            </>) : (<NoItemTable text='محصولی' />)}
            < Pagination sourceCount={productsCount} showInPage={SHOW_IN_PAGE} />
        </div>
    )
}

export default ProductList