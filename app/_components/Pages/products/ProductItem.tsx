'use client'

import { ICategory } from '@/app/_types/category';
import { IProduct } from '@/app/_types/product';
import { IUser } from '@/app/_types/user';
import { TableCell, TableRow } from '@/components/ui/table';
import { HiOutlineEye } from 'react-icons/hi2';
import Badge from '../../Modules/Badge';
import Switch from '../../Modules/Switch';
import TableButton from '../../Modules/TableButton';

interface ProductItemProps {
    product: IProduct,
    index: number
}

const ProductItem = ({ product, index }: ProductItemProps) => {

    const seller = product.creatorID as IUser;
    const category = product.categoryID as ICategory;

    return (
        <>
            <TableRow className='dark:border-b-primary-800 border-b-primary-50'>
                <TableCell className="text-center">
                    <p className='py-2 text-primary-700 dark:text-primary-100'>
                        {index}
                    </p>
                </TableCell>
                <TableCell>
                    <div className='flex flex-col '>
                        <p className='text-primary-700 dark:text-primary-100'>{product.title}</p>
                        <p className='text-primary-600 dark:text-primary-200'>{product.href}</p>
                    </div>
                </TableCell>
                <TableCell>
                    <div className='flex flex-col'>
                        {product.isOff && !product.isFree &&
                            (<>
                                <p className='text-green-500 dark:text-green-600 line-through'>
                                    {product.price.toLocaleString() + ' تومان'}
                                </p>
                                <p className='text-red-500 dark:text-red-600'>
                                    {((product.price - (product.price * product.precentOff) / 100)).toLocaleString()}
                                </p>
                            </>
                            )
                        }
                        {product.isFree &&
                            (<>
                                <p className='text-green-500 dark:text-green-600 line-through'>
                                    {product.price.toLocaleString() + ' تومان'}
                                </p>
                                <p className='text-red-500 dark:text-red-600'>
                                    رایگان
                                </p>
                            </>
                            )
                        }
                        {!product.isOff && !product.isFree &&
                            (<>
                                <p className='text-green-500 dark:text-green-600 '>
                                    {product.price.toLocaleString() + ' تومان'}
                                </p>
                            </>
                            )
                        }


                    </div>
                </TableCell >
                <TableCell className="text-right">
                    <div className='flex flex-col '>
                        <p className='text-primary-700 dark:text-primary-100'>{seller?.email}</p>
                        <p className='text-primary-600 dark:text-primary-200'>{seller?.phone}</p>
                    </div>
                </TableCell>
                <TableCell className="text-center">
                    <div className='flex justify-center'>
                        <Badge text={category.title} type='green' icon={false} />
                    </div>
                </TableCell>
                <TableCell className="text-center">
                    <div className='flex justify-center'>
                        <Switch isActive={product.isOff} />
                    </div>
                </TableCell>
                <TableCell className="text-center">
                    <div className='flex justify-center'>
                        <Switch isActive={product.isFree} />
                    </div>
                </TableCell>
                <TableCell className="text-center ">
                    <div className='flex justify-center'>
                        <Switch isActive={product.isPlan} />
                    </div>
                </TableCell>
                <TableCell className="text-center ">
                    <div className='flex justify-center'>
                        <TableButton icon={<HiOutlineEye size={18} />} type='blue' link={`/products/${product._id}`} />
                    </div>
                </TableCell>
            </TableRow >
        </>
    )
}

export default ProductItem