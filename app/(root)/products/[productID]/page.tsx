import { getProductDetails } from '@/app/_actions/product'
import SingleProductContainer from '@/app/_components/Pages/singleProduct/SingleProductContainer'
import React from 'react'


interface Props {
  params: {
    productID: string
  }
}

const page = async ({ params: { productID } }: Props) => {

  const { productDetails, product, categories } = await getProductDetails({ productID })

  return (
    <SingleProductContainer productDetails={productDetails} product={product} categories={categories} />
  )
}

export default page