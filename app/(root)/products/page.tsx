import { getProducts } from '@/app/_actions/product'
import ProductsContainer from '@/app/_components/Pages/products/ProductsContainer'
import React from 'react'

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