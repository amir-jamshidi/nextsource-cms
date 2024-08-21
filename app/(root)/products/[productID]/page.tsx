import { getProductDetails } from '@/app/_actions/product'
import SingleProductContainer from '@/app/_components/Pages/singleProduct/SingleProductContainer'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: 'جزئیات محصول'
}

interface Props {
  params: {
    productID: string
  }
}

const page = async ({ params: { productID } }: Props) => {

  const { productDetails, product, categories, sellers } = await getProductDetails({ productID })

  return (
    <SingleProductContainer sellers={sellers} productDetails={productDetails} product={product} categories={categories} />
  )
}

export default page