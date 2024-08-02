'use client'

import { IOrder } from "@/app/_types/order"
import { IProduct } from "@/app/_types/product"
import { IUser } from "@/app/_types/user"
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { HiOutlineBanknotes, HiOutlineBellAlert, HiOutlineClock, HiOutlineCurrencyDollar, HiOutlineEye, HiOutlineGift, HiOutlineHashtag, HiOutlineReceiptPercent, HiOutlineShoppingBag, HiOutlineShoppingCart, HiOutlineSquares2X2, HiOutlineUser, HiOutlineWallet } from "react-icons/hi2"
import OrderModalBox from "./OrderModalBox"
import Modal from "../../Modules/Modal"

interface IOrderShowButtonProps {
    order: IOrder
}

const OrderShowButton = ({ order }: IOrderShowButtonProps) => {

    const user = order.userID as IUser;
    const product = order.productID as IProduct
    const seller = product.creatorID as IUser

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        autoTable(doc, {
            theme: "striped",
            head: [['UserPhone', 'ProductHref', 'A.Paid', 'CashBack', 'P.Method', 'O.Number']],
            body: [
                [user.phone, product.href, order.price.toLocaleString() + ' Toman', order.cashBack.toLocaleString() + ' Toman', order.action === 'ONLINE' ? 'Bank' : 'Wallet', order.code],
            ],
        })
        doc.save(`${order.code}.pdf`)
    }

    return (
        <Modal>
            <Modal.Open>
                <span className='p-1 bg-blue-200 rounded-full cursor-pointer'>
                    <HiOutlineEye size={20} className='text-blue-500' />
                </span>
            </Modal.Open>

            <Modal.Window>
                <div className='overflow-hidden w-2/3 rounded-xl bg-white shadow'>
                    <div className="w-full h-14 bg-primary-50 flex justify-center items-center">
                        <p className="font-mo text-primary-800">نمایش جزئیات سفارش</p>
                    </div>
                    <div className="grid grid-cols-3 w-full gap-2.5 p-4" >
                        <OrderModalBox
                            color="#fecdd3"
                            icon={<HiOutlineUser size={40} className="text-rose-500" />}
                            link="/"
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
                            link="/"
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
                            link="/"
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
                    <div className="h-14 bg-primary-50 w-full flex justify-end items-center px-4">
                        <button onClick={handleDownloadPDF} className="font-mo text-green-500 px-4 py-1 rounded-full text-sm">دریافت PDF</button>
                        <Modal.Close>
                            <button className="font-mo text-red-500 px-4 py-1 rounded-full text-sm">بستن</button>
                        </Modal.Close>
                    </div>
                </div>
            </Modal.Window>
        </Modal>
    )
}

export default OrderShowButton