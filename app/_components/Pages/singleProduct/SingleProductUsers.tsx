import { IOrder } from '@/app/_types/order'
import { IUser } from '@/app/_types/user'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Image from 'next/image'
import Badge from '../../Modules/Badge'
import PageSectionContainer from '../../Modules/PageSectionContainer'

const SingleProductUsers = ({ sellers }: { sellers: IOrder[] }) => {
    return (
        <PageSectionContainer title='خریداران'>
            <div className='bg-white dark:bg-primary-900 flex flex-col divide-y dark:divide-primary-800 divide-primary-0 my-4 overflow-hidden'>
                <Table dir='rtl' className='border-red-500'>
                    <TableHeader dir='rtl'>
                        <TableRow dir='rtl' className='border-b-primary-50 dark:border-b-primary-800'>
                            <TableHead className="text-center">ردیف</TableHead>
                            <TableHead className='text-right min-w-56'>کاربر</TableHead>
                            <TableHead className='text-right min-w-56'>شناسه خرید</TableHead>
                            <TableHead className='text-right min-w-32'>واریزی</TableHead>
                            <TableHead className='text-right min-w-32'>کش بک</TableHead>
                            <TableHead className='text-center min-w-28'>نوع پرداخت</TableHead>
                            <TableHead className='text-center min-w-28'>تاریخ</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody dir='rtl'>
                        {sellers.map((order, i) => {
                            const user = order.userID as IUser
                            return (
                                <TableRow className='border-b-primary-50 dark:border-b-primary-800' key={String(order._id)}>
                                    <TableCell >
                                        <p className='text-center py-2 text-primary-800 dark:text-primary-100'>{i + 1}</p>
                                    </TableCell>
                                    <TableCell >
                                        <div className='flex items-center gap-x-1.5'>
                                            <div className='h-9 w-9 border border-primary-50 dark:border-primary-800/50 relative rounded-full overflow-hidden'>
                                                <Image
                                                    src={user.profile}
                                                    fill
                                                    alt='Profile'
                                                />
                                            </div>
                                            <p className='flex flex-col'>
                                                <p className='text-sm text-primary-700 tracking-tight dark:text-primary-100'>{user.fullname}</p>
                                                <p className='text-sm text-primary-600 tracking-tight dark:text-primary-200'>{user.phone}</p>
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell >
                                        <div className='flex items-center gap-x-1.5'>
                                            <p className='flex flex-col'>
                                                <p className='text-sm text-primary-700 tracking-tight dark:text-primary-100'>{order.code}</p>
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <p className='text-green-400 dark:text-green-600'>
                                            {order.price.toLocaleString() + ' تومان'}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        {order.cashBack > 0 ? (
                                            <p className='text-green-400 dark:text-green-600'>
                                                {order.cashBack.toLocaleString() + ' تومان'}
                                            </p>
                                        ) : (
                                            <div className='flex'>
                                                <Badge
                                                    text='بدون کش بک'
                                                    type='red'
                                                    icon={false}
                                                />
                                            </div>
                                        )}

                                    </TableCell>
                                    <TableCell className='text-center'>
                                        <div className='flex justify-center'>
                                            <Badge
                                                text={order.action === 'ONLINE' ? 'نقدی' : "ولت"}
                                                type={order.action === 'ONLINE' ? 'green' : 'violet'}
                                                icon={false}
                                            />
                                        </div>
                                    </TableCell>
                                    <TableCell className='text-center'>
                                        <div className='flex justify-center'>
                                            <Badge
                                                text={new Date(order.createdAt || 0).toLocaleDateString('fa-IR')}
                                                type='blue'
                                                icon={false}
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </PageSectionContainer>
    )
}

export default SingleProductUsers