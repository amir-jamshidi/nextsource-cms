import { IGetProducts } from "@/app/_types"
import PageContainer from "../../Modules/PageContainer"
import ProductDetailsBoxes from "./ProductDetailsBoxes"
import ProductFilter from "./ProductFilter"
import ProductList from "./ProductList"

const ProductsContainer = ({ products, productsDetails }: IGetProducts) => {
    return (
        <PageContainer>
            <ProductFilter />
            <ProductDetailsBoxes productsDetails={productsDetails} />
            <ProductList products={products} productsCount={productsDetails.productsCount} />
        </PageContainer>
    )
}

export default ProductsContainer