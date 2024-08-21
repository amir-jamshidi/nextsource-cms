import React from 'react'
import PageContainer from '../../Modules/PageContainer'
import SingleProductFilter from './SingleProductFilter'
import SingleProductBoxes from './SingleProductBoxes'
import SingleProductForm from './SingleProductForm'
import InsertProductForm from '../products/InsertProductForm'
import { IProduct } from '@/app/_types/product'
import SingleProductUsers from './SingleProductUsers'
import { IOrder } from '@/app/_types/order'

const SingleProductContainer = ({ productDetails, product, sellers }: { productDetails: {}, product: IProduct, sellers: IOrder }) => {
    return (
        <PageContainer>
            <SingleProductFilter />
            <SingleProductBoxes product={product} productDetails={productDetails} />
            <SingleProductForm product={product} />
            <SingleProductUsers sellers={sellers} />
        </PageContainer>
    )
}

export default SingleProductContainer