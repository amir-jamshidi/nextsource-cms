'use client'

import { IOrder } from "@/app/_types/order"
import { IProduct } from "@/app/_types/product"
import { IUser } from "@/app/_types/user"
import { HiOutlineBanknotes, HiOutlineBellAlert, HiOutlineClock, HiOutlineCurrencyDollar, HiOutlineEye, HiOutlineGift, HiOutlineHashtag, HiOutlineInformationCircle, HiOutlineReceiptPercent, HiOutlineShoppingBag, HiOutlineShoppingCart, HiOutlineSquares2X2, HiOutlineUser, HiOutlineWallet } from "react-icons/hi2"
import CloseButton from "../../Modules/CloseButton"
import Modal from "../../Modules/Modal"
import TableButton from "../../Modules/TableButton"
import ToltipContainer from "../../Modules/ToltipContainer"
import OrderModalBox from "../../Modules/BoxItem"

interface IOrderShowButtonProps {
    order: IOrder
}

const OrderShowButton = ({ order }: IOrderShowButtonProps) => {

    const user = order.userID as IUser;
    const product = order.productID as IProduct
    const seller = product.creatorID as IUser

    return (
        <Modal>
            <ToltipContainer toltip="مشاهده جزئیات">
                <Modal.Open>
                    <span>
                        <TableButton icon={<HiOutlineEye size={18} />} type="blue" />
                    </span>
                </Modal.Open>
            </ToltipContainer>


            <Modal.Window>
                <div className='my-14 h-[500px] md:h-auto overflow-auto w-full lg:w-3/4 rounded-xl bg-white dark:bg-primary-950 shadow dark:shadow-none dark:border border-primary-800/50'>
                    <div className="px-2.5 py-3.5">
                        <div className='flex items-center justify-center gap-y-2 flex-col'>
                            <div className='dark:bg-green-800/40 bg-green-400/40 p-1.5 inline-block rounded-full'>
                                <span className='p-2 flex bg-green-300 dark:bg-green-700 rounded-full'>
                                    <HiOutlineInformationCircle size={30} className='text-green-600 dark:text-green-300' />
                                </span>
                            </div>
                            <h2 className='text-lg font-mo dark:text-primary-50 text-primary-700'>جزئیات سفارش</h2>
                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-1 md:gap-2.5 px-2 mt-4" >

                            <OrderModalBox
                                color="#fecdd3"
                                icon={<HiOutlineUser size={40} className="text-rose-500" />}
                                link={`/users/${user._id}`}
                                title="کاربر"
                                text={user.phone}
                            />
                            <OrderModalBox
                                color="#fed7aa"
                                icon={<HiOutlineCurrencyDollar size={40} className="text-orange-500" />}
                                link=""
                                title="واریزی"
                                text={order.totalPrice ? order.totalPrice.toLocaleString() + 'تومان' : "رایگان"}
                            />
                            <OrderModalBox
                                color="#bbf7d0"
                                icon={<HiOutlineShoppingBag size={40} className="text-green-500" />}
                                link={`/products/${product._id}`}
                                title="محصول"
                                text={product.title}
                            />
                            <OrderModalBox
                                color="#bfdbfe"
                                icon={<HiOutlineSquares2X2 size={40} className="text-blue-500" />}
                                link=""
                                title="تعداد"
                                text={order.count + ' عدد'}
                            />
                            <OrderModalBox
                                color="#ddd6fe"
                                icon={<HiOutlineWallet size={40} className="text-violet-500" />}
                                link=""
                                title="پرداخت"
                                text={order.action === 'ONLINE' ? 'پرداخت نقدی' : 'پرداخت با ولت'}
                            />
                            <OrderModalBox
                                color="#fbcfe8"
                                icon={<HiOutlineGift size={40} className="text-pink-500" />}
                                link=""
                                title="کش بک"
                                text={order.cashBack ? order.cashBack.toLocaleString() + ' تومان' : 'ندارد'}
                            />
                            <OrderModalBox
                                color="#fde68a"
                                icon={<HiOutlineHashtag size={40} className="text-amber-500" />}
                                link=""
                                title="شناسه خرید"
                                text={order.code}
                            />
                            <OrderModalBox
                                color="#fecaca"
                                icon={<HiOutlineClock size={40} className="text-red-500" />}
                                link=""
                                title="تاریخ سفارش"
                                text={new Date(order.createdAt || 0).toLocaleDateString('fa-IR') + ' - ' + new Date(order.createdAt || 0).toLocaleTimeString('fa-IR')}
                            />
                            <OrderModalBox
                                color="#d9f99d"
                                icon={<HiOutlineShoppingCart size={40} className="text-lime-500" />}
                                link={`/users/${seller._id}`}
                                title="فروشنده"
                                text={seller.phone}
                            />
                            <OrderModalBox
                                color="#c7d2fe"
                                icon={<HiOutlineBellAlert size={40} className="text-indigo-500" />}
                                link=""
                                title="تخفیف"
                                text={order.isOff ? 'دارد' : 'ندارد'}
                            />
                            <OrderModalBox
                                color="#99f6e4"
                                icon={<HiOutlineReceiptPercent size={40} className="text-teal-500" />}
                                link=""
                                title="درصد تخفیف"
                                text={order.percentOff ? order.percentOff + '%' : 'ندارد'}
                            />
                            <OrderModalBox
                                color="#a5f3fc"
                                icon={<HiOutlineBanknotes size={40} className="text-cyan-500" />}
                                link=""
                                title="قیمت محصول"
                                text={order.price.toLocaleString() + ' تومان'}
                            />

                        </div>

                        <div className="mt-6 flex gap-1.5">
                            <CloseButton text="بستن" />
                        </div>
                    </div>
                </div>

            </Modal.Window>
        </Modal >
    )
}

export default OrderShowButton