import { useState } from 'react'
import toast from 'react-hot-toast'


type InputProps = {
    placeholder: string,
    disabled: boolean,
    keyItem: string,
    onBlur: (value: string | boolean | number, key: string) => void,
    classes?: string,
    defaultValue: string | number
    type?: 'text' | 'textarea' | 'number'
}

const Input = ({ type = 'text', placeholder, disabled, keyItem, onBlur, classes, defaultValue }: InputProps) => {

    const [isError, setIsError] = useState(false);

    const handleBlur = (value: string | number | boolean, key: string) => {
        if (type === 'number') {
            const req = /\d+/
            if (Number(defaultValue) === Number(value)) return
            if (String(value).length === 0 || !req.test(String(value))) {
                setIsError(true)
                return toast.error('لطفا مقدار معتبری وارد کنید');
            }
            setIsError(false)
            onBlur(value, key);
        }
        if (type === 'text' || type === 'textarea') {
            if (String(value).trim() === String(defaultValue).trim()) return;
            if (String(value).trim().length === 0) {
                setIsError(true);
                return toast.error('لطفا مقدار معتبری وارد کنید');
            }
            setIsError(false);
            onBlur(value, key);
        }

    }

    if (type === 'textarea')
        return (
            <div className='lg:col-span-3 col-span-1'>
                <span className={` ${isError ? 'text-red-700' : 'text-primary-200'} text-xs  px-1 tracking-tight`}>{placeholder}</span>
                <textarea disabled={disabled} placeholder={placeholder} onBlur={(e) => handleBlur(e.target.value, keyItem)} className={`${classes} ${isError ? 'border-red-800' : 'border-primary-700'} w-full h-full rounded-xl px-2.5 bg-primary-800 outline-none text-sm text-primary-100 disabled:bg-primary-900 disabled:cursor-not-allowed transition-all min-h-32 max-h-36 py-2 border inline-block`} defaultValue={defaultValue} />
            </div>
        )

    if (type === 'text')
        return (
            <div>
                <span className={` ${isError ? 'text-red-700' : 'text-primary-200'} text-xs  px-1 tracking-tight`}>{placeholder}</span>
                <div className={`${isError ? 'border-red-800' : 'border-primary-700'} bg h-12 bg-primary-800 rounded-xl border`}>
                    <input disabled={disabled} placeholder={placeholder} type="text" onBlur={(e) => handleBlur(e.target.value, keyItem)} className={`${classes} w-full h-full rounded-xl px-2.5 bg-primary-800 outline-none border-none text-sm text-primary-100 disabled:bg-primary-900 disabled:cursor-not-allowed transition-all`} defaultValue={defaultValue} />
                </div>
            </div>
        )

    if (type === 'number')
        return (
            <div>
                <span className={` ${isError ? 'text-red-700' : 'text-primary-200'} text-xs  px-1 tracking-tight`}>{placeholder}</span>
                <div className={`${isError ? 'border-red-800' : 'border-primary-700'} bg h-12 bg-primary-800 rounded-xl border`}>
                    <input disabled={disabled} placeholder={placeholder} type="number" onBlur={(e) => handleBlur(e.target.value, keyItem)} className={`${classes} w-full h-full rounded-xl px-2.5 bg-primary-800 outline-none border-none text-sm text-primary-100 disabled:bg-primary-900 disabled:cursor-not-allowed transition-all`} defaultValue={defaultValue} />
                </div>
            </div>
        )
}

export default Input