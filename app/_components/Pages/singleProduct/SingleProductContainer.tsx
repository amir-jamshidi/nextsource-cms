import React from 'react'
import PageContainer from '../../Modules/PageContainer'
import SingleProductFilter from './SingleProductFilter'
import SingleProductBoxes from './SingleProductBoxes'
import SingleProductForm from './SingleProductForm'

const SingleProductContainer = ({ productDetails, product }) => {
    return (
        <PageContainer>
            <SingleProductFilter />
            <SingleProductBoxes productDetails={productDetails} />
            <SingleProductForm product={product} />
        </PageContainer>
    )
}

export default SingleProductContainer