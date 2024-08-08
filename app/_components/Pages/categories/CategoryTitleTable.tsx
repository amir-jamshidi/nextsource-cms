import { TableHead, TableHeader, TableRow } from "@/components/ui/table"

const CategoryTitleTable = () => {
    return (
        <>
            <TableHeader>
                <TableRow className='border-b-primary-50 dark:border-b-primary-800'>
                    <TableHead className='text-center'><p className='py-4'>ردیف</p></TableHead>
                    <TableHead className='text-right min-w-36'>عنوان دسته بندی</TableHead>
                    <TableHead className='text-right min-w-28'>عنوان لاتین</TableHead>
                    <TableHead className='text-right min-w-36'>لینک</TableHead>
                    <TableHead className='text-right min-w-28'>تاریخ ایجاد</TableHead>
                    <TableHead className='text-center min-w-20'>فعال</TableHead>
                    <TableHead className='text-center min-w-20'>بیشتر</TableHead>
                </TableRow>
            </TableHeader>
        </>
    )
}

export default CategoryTitleTable