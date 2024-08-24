import { IGetSingleProduct } from '@/app/_types'
import PageContainer from '../../Modules/PageContainer'
import SingleProductBoxes from './SingleProductBoxes'
import SingleProductFilter from './SingleProductFilter'
import SingleProductForm from './SingleProductForm'
import SingleProductUsers from './SingleProductUsers'

const SingleProductContainer = ({ productDetails, product, sellers }: IGetSingleProduct) => {
    return (
        <PageContainer>
            <SingleProductFilter />
            <SingleProductBoxes productDetails={productDetails} />
            <SingleProductForm product={product} />
            <SingleProductUsers sellers={sellers} />
        </PageContainer>
    )
}

export default SingleProductContainer