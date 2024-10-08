import { ISingleProductDetails } from '@/app/_types'
import { HiOutlineBanknotes, HiOutlineCircleStack, HiOutlineReceiptPercent, HiOutlineShoppingBag, HiOutlineShoppingCart, HiOutlineSquares2X2, HiOutlineTrophy, HiOutlineUser } from 'react-icons/hi2'
import DetailsBox from '../../Modules/DetailsBox'
import DetailsBoxesContainer from '../../Modules/DetailsBoxesContainer'

interface ISingleProductDetailsProps {
    productDetails: ISingleProductDetails
}

const SingleProductBoxes = ({ productDetails }: ISingleProductDetailsProps) => {
    const offStr = ((productDetails.isOff && productDetails.isFree) || productDetails.isFree) ? 'محصول رایگان می باشد' : productDetails.isOff ? `${productDetails.precentOff}% تخقیف` : 'بدون تخفیف'
    let OffPrice;
    if (productDetails.isOff && !productDetails.isFree) {
        OffPrice = ((productDetails.price - (productDetails.price * productDetails.precentOff) / 100)).toLocaleString()
    }
    if (productDetails.isFree) {
        OffPrice = 'رایگان'
    }
    return (
        <DetailsBoxesContainer>
            <DetailsBox color='bg-blue-200 dark:bg-blue-800' title='عنوان محصول' value={productDetails.title} icon={<HiOutlineShoppingBag size={45} className='text-blue-600 dark:text-blue-300' />} />
            <DetailsBox color='bg-green-200 dark:bg-green-800' title='قیمت محصول' subValue={OffPrice} value={`${productDetails.price.toLocaleString()} تومان`} icon={<HiOutlineCircleStack size={45} className='text-green-600 dark:text-green-300' />} />
            <DetailsBox color='bg-rose-200 dark:bg-rose-800' title='کل تعداد فروش' value={`${productDetails.productSaleCount} عدد`} icon={<HiOutlineShoppingCart size={45} className='text-rose-600 dark:text-rose-300' />} />
            <DetailsBox color='bg-violet-200 dark:bg-violet-800' title='کل مبلغ فروش' value={`${productDetails.productSalePrice.toLocaleString()} تومان`} icon={<HiOutlineBanknotes size={45} className='text-violet-600 dark:text-violet-300' />} />
            <DetailsBox color='bg-blue-200 dark:bg-blue-800' title='فروشنده' value={`${productDetails.creatorID.phone}`} icon={<HiOutlineUser size={45} className='text-blue-600 dark:text-blue-300' />} />
            <DetailsBox color='bg-green-200 dark:bg-green-800' title='دسته بندی' value={`${productDetails.categoryID.title}`} icon={<HiOutlineSquares2X2 size={45} className='text-green-600 dark:text-green-300' />} />
            <DetailsBox color='bg-rose-200 dark:bg-rose-800' title='موجود در پلن ویژه' value={`${productDetails.isPlan ? 'موجود می باشد' : 'موجود نمی باشد'}`} icon={<HiOutlineTrophy size={45} className='text-rose-600 dark:text-rose-300' />} />
            <DetailsBox color='bg-violet-200 dark:bg-violet-800' title='دارای تخفیف' value={offStr} icon={<HiOutlineReceiptPercent size={45} className='text-violet-600 dark:text-violet-300' />} />
        </DetailsBoxesContainer>
    )
}

export default SingleProductBoxes