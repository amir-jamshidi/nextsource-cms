import { getProductDetails } from '@/app/_actions/product'
import SingleProductContainer from '@/app/_components/Pages/singleProduct/SingleProductContainer'
import { IGetSingleProduct } from '@/app/_types'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'


export const metadata: Metadata = {
  title: 'جزئیات محصول'
}

interface Props {
  params: {
    productID: string
  }
}

const page = async ({ params: { productID } }: Props) => {

  const singleProduct: IGetSingleProduct | boolean = await getProductDetails({ productID })
  if (!singleProduct) return notFound();
  const { productDetails, product, sellers } = singleProduct
  return (
    <SingleProductContainer sellers={sellers} productDetails={productDetails} product={product} />
  )
}

export default page