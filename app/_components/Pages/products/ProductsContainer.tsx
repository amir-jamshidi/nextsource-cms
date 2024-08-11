import { IProduct } from "@/app/_types/product"
import ProductFilter from "./ProductFilter"
import ProductDetailsBoxes from "./ProductDetailsBoxes"
import ProductList from "./ProductList"
import PageContainer from "../../Modules/PageContainer"


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
        <PageContainer>
            <ProductFilter />
            <ProductDetailsBoxes productsDetails={productsDetails} />
            <ProductList products={products} productsCount={productsDetails.productsCount} />
        </PageContainer>
    )
}

export default ProductsContainer