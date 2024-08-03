import React from 'react'
import Modal from './Modal'

const ModalFooter = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-14 bg-primary-50 dark:bg-primary-800 w-full flex justify-end items-center px-4">
            {children}
            <Modal.Close>
                <button className="font-mo text-red-500 px-4 py-1 rounded-full text-sm hover:text-red-600 transition-all">بستن</button>
            </Modal.Close>
        </div>
    )
}

export default ModalFooter