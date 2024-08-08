import { IOrder } from '@/app/_types/order'
import { IProduct } from '@/app/_types/product'
import { IUser } from '@/app/_types/user'
import { TableCell, TableRow } from '@/components/ui/table'
import Badge from '../../Modules/Badge'
import OrderShowButton from '../orders/OrderShowButton'



const OrderItem = ({ order, index }: { order: IOrder, index: number }) => {

    const product = order.productID as IProduct
    const user = order.userID as IUser
    const creator = product.creatorID as IUser;
    return (
        <TableRow className='dark:border-b-primary-800 border-b-primary-50'>
            <TableCell className="text-center">
                <p className='py-2 text-primary-700 dark:text-primary-100'>
                    {index}
                </p>
            </TableCell>
            <TableCell>
                <div className='flex flex-col text-primary-700 dark:text-primary-100'>
                    <p>{product.title}</p>
                    <p>{product.href}/</p>
                </div>
            </TableCell>
            <TableCell>
                <p className='text-primary-700 dark:text-primary-100'>
                    {order.code}
                </p>
            </TableCell>
            <TableCell className="text-right">
                <div>
                    <p className='text-primary-700 dark:text-primary-100'>{new Date(order.createdAt || 0).toLocaleDateString('fa-IR')}</p>
                    <p className='text-primary-600 dark:text-primary-200'>{new Date(order.createdAt || 0).toLocaleTimeString('fa-IR')}</p>
                </div>
            </TableCell>
            <TableCell className="text-right">
                {order.totalPrice > 0 ? (
                    <p className='text-green-500 dark:text-green-600'>{order.totalPrice.toLocaleString()} تومـان</p>

                ) : (
                    <p className='dark:text-red-600 text-red-500'>
                        رایگـان
                    </p>
                )}

            </TableCell>
            <TableCell className="text-right">
                <p className='text-primary-700 dark:text-primary-100'>
                    {user.phone}
                </p>
            </TableCell>
            <TableCell className="text-center">
                <p className='flex justify-center'>
                    {order.action === 'ONLINE' &&
                        <Badge
                            text='پرداخت نقدی'
                            type='blue'
                        />
                    }
                    {order.action === 'WALLET' &&
                        <Badge
                            text='پرداخت ولت'
                            type='green'
                        />
                    }
                </p>
            </TableCell>
            <TableCell className="text-center ">
                <OrderShowButton order={JSON.parse(JSON.stringify(order))} />
            </TableCell>
        </TableRow>
    )
}

export default OrderItem