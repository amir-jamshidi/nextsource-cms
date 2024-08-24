import { getProducts } from '@/app/_actions/product'
import ProductsContainer from '@/app/_components/Pages/products/ProductsContainer'
import { IGetProducts } from '@/app/_types'
import { Metadata } from 'next'


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
  const { products, productsDetails }: IGetProducts = await getProducts({ state, page })
  return (
    <ProductsContainer products={products} productsDetails={productsDetails} />
  )
}

export default Products