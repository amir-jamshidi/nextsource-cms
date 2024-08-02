import { IProduct } from "@/app/_types/product"
import ProductFilter from "./ProductFilter"
import ProductDetailsBoxes from "./ProductDetailsBoxes"
import ProductList from "./ProductList"


interface ProductsContainerProps {
    products: IProduct[],
    productsDetails: {
        productsCount: number,
        productsFreeCount: number,
        productNonFreeCount: number,
        productInPlanCount: number
    }
}

const ProductsContainer = ({ products, productsDetails }: ProductsContainerProps) => {
    return (
        <div className='flex flex-col gap-y-10 pb-14'>
            <ProductFilter />
            <ProductDetailsBoxes productsDetails={productsDetails} />
            <ProductList products={products} productsCount={productsDetails.productsCount} />
        </div>
    )
}

export default ProductsContainer