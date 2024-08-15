import Modal from './Modal'

const CloseButton = ({ text }: { text: string }) => {
    return (
        <Modal.Close>
            <button className="bg-red py-3 rounded-xl font-mo text-white text-sm w-32">{text}</button>
        </Modal.Close>
    )
}

export default CloseButton