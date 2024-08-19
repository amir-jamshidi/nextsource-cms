import React from 'react'
import PageContainer from '../../Modules/PageContainer'
import SingleProductFilter from './SingleProductFilter'
import SingleProductBoxes from './SingleProductBoxes'
import SingleProductForm from './SingleProductForm'
import InsertProductForm from '../products/InsertProductForm'
import { IProduct } from '@/app/_types/product'

const SingleProductContainer = ({ productDetails, product }: { productDetails: {}, product: IProduct, }) => {
    return (
        <PageContainer>
            <SingleProductFilter />
            <SingleProductBoxes productDetails={productDetails} />
            <SingleProductForm product={product} />
            {/* <InsertProductForm /> */}
        </PageContainer>
    )
}

export default SingleProductContainer