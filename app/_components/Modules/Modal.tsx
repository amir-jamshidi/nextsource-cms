'use client'

import React, { cloneElement, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { createPortal } from 'react-dom';

interface ModalContextProps {
    isShowModal: boolean,
    setIsShowModal: (isShow: boolean) => void
}

export const ModalContext = createContext<ModalContextProps | null>(null);

const Modal = ({ children, open, setOpen }: { children: React.ReactNode, open?: boolean, setOpen?: (open: boolean) => void }) => {
    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {
        // if (isShowModal) document.body.style.overflow = 'hidden'
        // if (!isShowModal) document.body.style.overflow = 'auto'
    }, [isShowModal])

    useEffect(() => {
        if (open !== undefined) {
            setIsShowModal(open);
        }
    }, [open])

    useEffect(() => {
        setOpen?.(isShowModal);
    }, [isShowModal])

    return (
        <ModalContext.Provider value={{ isShowModal, setIsShowModal }}>
            {children}
        </ModalContext.Provider>
    )
}
const Open = ({ children }: { children: React.ReactNode }) => {
    const context = useContext(ModalContext);
    if (!context) return
    const { isShowModal, setIsShowModal } = context
    // @ts-ignore comment
    return cloneElement(children, { onClick: () => setIsShowModal(true) })
}
const Close = ({ children }: { children: React.ReactNode }) => {
    const context = useContext(ModalContext);
    if (!context) return
    const { isShowModal, setIsShowModal } = context
    // @ts-ignore comment
    return cloneElement(children, {
        onClick: () => {
            // e.preventDefault();
            setIsShowModal(false)
        }
    })
}
const Window = ({ children }: { children: React.ReactNode }) => {
    const context = useContext(ModalContext);
    if (!context) return
    const { isShowModal, setIsShowModal } = context
    if (!isShowModal) return null
    return createPortal(
        <div onClick={(e) => { setIsShowModal(false) }} className='bg-black/80 min-h-[100vh] dark:bg-black/80 fixed right-0 left-0 top-0 bottom-0 z-10 '>
            <div className='container h-full '>
                <div className='flex justify-center flex-col items-center h-full'>
                    {/* @ts-ignore comment*/}
                    {cloneElement(children, { onClick: (e) => e.stopPropagation() })}
                </div>
            </div>
        </div>, document.body
    )
}

Modal.Open = Open;
Modal.Close = Close
Modal.Window = Window



export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (context === undefined) throw new Error('Error To Access ModalContext');
    return context
}



export default Modal

