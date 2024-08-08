import { TableHead, TableHeader, TableRow } from "@/components/ui/table"

const ProductTitleTable = () => {
    return (

        <>
            <TableHeader>
                <TableRow className='border-b-primary-50 dark:border-b-primary-800'>
                    <TableHead className='text-center'><p className='py-4'>ردیف</p></TableHead>
                    <TableHead className='text-right min-w-40'>عنوان محصول</TableHead>
                    <TableHead className='text-right min-w-28'>قیمت</TableHead>
                    <TableHead className='text-right min-w-44'>فروشنده</TableHead>
                    <TableHead className='text-center min-w-28 '>دسته بندی</TableHead>
                    <TableHead className='text-center min-w-20'>تخفیف</TableHead>
                    <TableHead className='text-center min-w-20'>رایگان</TableHead>
                    <TableHead className='text-center min-w-20'>درپلن ویژه</TableHead>
                    <TableHead className='text-center min-w-20'>بیشتر</TableHead>
                </TableRow>
            </TableHeader>
        </>
    )
}

export default ProductTitleTable