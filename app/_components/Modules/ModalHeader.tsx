import React from 'react'

const ModalHeader = ({ title }: { title: string }) => {
    return (
        <div className="w-full h-14 border-b border-b-primary-50/50 dark:border-b-primary-700/50 dark:bg-primary-800 bg-gray-50 flex justify-center items-center">
            <p className="font-mo text-primary-800 dark:text-primary-50">{title}</p>
        </div>
    )
}

export default ModalHeader