
import { SHOW_IN_PAGE } from '@/app/_constants/gobalVariables'
import { IProductList } from '@/app/_types'
import { Table } from '@/components/ui/table'
import NoItemTable from '../../Modules/NoItemTable'
import Pagination from '../../Modules/Pagination'
import ProductItem from './ProductItem'
import ProductTitleTable from './ProductTitleTable'

const ProductList = ({ products, productsCount }: IProductList) => {
    return (
        <div className='rounded-xl bg-white dark:bg-primary-900 dark:divide-primary-800/50 dark:border-primary-800/50 flex flex-col border divide-y divide-primary-0 border-primary-50 overflow-hidden'>
            {products.length > 0 ? (<>
                <Table>
                    <ProductTitleTable />
                    {products.map((product, i) => (
                        <ProductItem key={String(product._id)} product={product} index={i + 1} />
                    ))}
                </Table>
                < Pagination sourceCount={productsCount} showInPage={SHOW_IN_PAGE} />
            </>) : (<NoItemTable text='محصولی' />)}
        </div>
    )
}

export default ProductList