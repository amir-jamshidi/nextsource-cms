import { TableHead, TableHeader, TableRow } from '@/components/ui/table'

const UserTitleTable = () => {
    return (
        <TableHeader>
            <TableRow className='border-b-primary-50 dark:border-b-primary-800'>
                <TableHead className='text-center'><p className='py-4'>ردیف</p></TableHead>
                <TableHead className='text-right min-w-36'>نام کاربر</TableHead>
                <TableHead className='text-right min-w-28'>ایمیل</TableHead>
                <TableHead className='text-right'>شماره همراه</TableHead>
                <TableHead className='text-right min-w-32'>موجودی ولت</TableHead>
                <TableHead className='text-right min-w-24'>تاریخ ثبت نام</TableHead>
                <TableHead className='text-center min-w-28'>نقش</TableHead>
                <TableHead className='text-center min-w-20'>بیشتر</TableHead>
            </TableRow>
        </TableHeader>
    )
}

export default UserTitleTable