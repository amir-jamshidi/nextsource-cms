import { getProducts } from '@/app/_actions/product'
import ProductsContainer from '@/app/_components/Pages/products/ProductsContainer'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: 'محصولات'
}

interface ProductsProps {
  searchParams: {
    page: number,
    state: "all" | "free" | "nonfree"
  }
}

const Products = async ({ searchParams: { page = 1, state = "all" } }: ProductsProps) => {
  const { products, productsDetails } = await getProducts({ state, page })
  return (
    <ProductsContainer products={products} productsDetails={productsDetails} />
  )
}

export default Products