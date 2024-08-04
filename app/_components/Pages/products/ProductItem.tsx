import { ICategory } from '@/app/_types/category';
import { IProduct } from '@/app/_types/product';
import { IUser } from '@/app/_types/user';
import Link from 'next/link';
import { HiOutlineCheckCircle, HiOutlineEye, HiOutlinePencil, HiOutlinePencilSquare, HiOutlineXCircle } from 'react-icons/hi2';
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
        <div className='ticket-list h-16 gap-2 px-4'>
            <div className='col-span-1 h-full w-full flex items-center'>
                <p className='font-ir-bold text-sm text-primary-800 dark:text-primary-100 pr-3'>{index}</p>
            </div>
            <div className='col-span-2 h-full w-full flex flex-col justify-center '>
                <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{product.title}</p>
                <p className='font-ir-medium text-primary-600 dark:text-primary-300 text-xs tracking-tight'>{product.href}</p>
            </div>
            <div className='col-span-1 h-full w-full flex items-center'>
                <p className='font-ir-medium text-sm text-green-500 tracking-tight'>{product.price.toLocaleString() + ' تومان'}</p>
            </div>
            <div className='col-span-1 h-full w-full flex justify-center flex-col'>
                <p className='font-ir-medium text-sm text-primary-800 dark:text-primary-100 tracking-tight'>{seller.phone}</p>
                <p className='font-ir-medium text-primary-600 dark:text-primary-300 text-xs tracking-tight'>{seller.email}</p>
            </div>
            <div className='col-span-1 h-full w-full flex items-center justify-center'>
                <Badge text={category.title} type='green' icon={false} />
            </div>

            <div className='col-span-1 h-full w-full flex items-center justify-center'>
                <Switch isActive={product.isOff} />
            </div>
            <div className='col-span-1 h-full w-full flex items-center justify-center'>
                <Switch isActive={product.isFree} />
            </div>
            <div className='col-span-1 h-full w-full flex items-center justify-center'>
                <Switch isActive={product.isPlan} />
            </div>

            <div className='col-span-1 h-full w-full flex items-center gap-x-1 justify-center'>
                <TableButton icon={<HiOutlineEye size={18} />} type='blue' link={`/products/${product._id}`} />
            </div>
        </div>
    )
}

export default ProductItem