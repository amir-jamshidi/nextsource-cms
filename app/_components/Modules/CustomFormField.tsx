'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Select } from '@radix-ui/react-select'
import Image from 'next/image'
import React from 'react'
import { Control } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

interface CustomProps {
    control: Control<any>
    fieldType: 'input' | 'textarea' | 'phoneInput' | 'checkbox' | 'datePicket' | 'select' | 'skeleton' | 'file'
    name: string
    label?: string
    placeholder?: string
    iconImg?: React.ReactNode
    iconAlt?: string
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode
    accept?: 'image/*' | '.rar,.zip'
}

const RenderField = ({ field, props }: { field: any, props: CustomProps }) => {

    const { fieldType, iconImg, placeholder } = props

    switch (fieldType) {
        case 'input': {
            return (
                <div className='flex items-center rounded-md border dark:border-primary-800 border-primary-50 bg-gray-50 dark:bg-primary-900 !mt-0.5'>
                    {iconImg && (
                        <div className='h-full flex pr-2.5'>
                            {iconImg}
                        </div>
                    )}
                    <FormControl>
                        <Input
                            disabled={props.disabled}
                            placeholder={placeholder}
                            {...field}
                            className='shad-input border-0'
                        />
                    </FormControl>
                </div>
            )
        }
        case "phoneInput": {
            return (
                <PhoneInput
                    disabled={props.disabled}
                    defaultCountry='IR'
                    placeholder={placeholder}
                    international
                    withCountryCallCode
                    value={field.value}
                    onChange={field.onChange}
                    className='input-phone'
                />
            )
        }
        case "select": {
            return (
                <div className='flex items-center rounded-md border dark:border-primary-800 border-primary-50 bg-gray-50 dark:bg-primary-900 !mt-0.5'>

                    <FormControl>
                        <Select disabled={props.disabled} dir='rtl' onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="shad-select-trigger">
                                    <SelectValue placeholder={props.placeholder} />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent side='top' dir='rtl' className="shad-select-content">
                                {props.children}
                            </SelectContent>
                        </Select>
                    </FormControl>
                </div>
            );
        }
        case "file": {
            return (
                <div className='flex relative items-center rounded-md border dark:border-primary-800 border-primary-50 bg-gray-50 dark:bg-primary-900 !mt-0.5'>
                    <span className={`${props.disabled ? 'dark:text-gray-400 text-gray-400' : 'text-primary-700 dark:text-primary-100'} z-[1] absolute bg-gray-50 dark:bg-primary-900 top-1 bottom-1 right-1 text-center flex justify-center items-center w-[97px] rounded-xl text-sm tracking-tight`}>
                        {props.accept === 'image/*' ? 'انتخاب تصویر' : 'انتخاب فایل'}
                    </span>
                    <FormControl>
                        <Input
                            disabled={props.disabled}
                            className='shad-type py-3.5 h-12 flex items-center justify-center dark:placeholder:text-red-600 dark:text-blue-500'
                            {...field.fieldProps}
                            placeholder={placeholder}
                            type='file'
                            accept={props.accept}
                            onChange={(event) =>
                                field.onChange(event.target.files && event.target.files[0])
                            }
                        />
                    </FormControl>
                </div>
            );
        }
        case "textarea": {
            return (
                <FormControl>
                    {/* <Textarea
                        placeholder={props.placeholder}
                        {...field}
                        className="shad-textArea"
                        disabled={props.disabled}
                    /> */}
                </FormControl>
            )
        }
        case "checkbox": {
            return (
                <FormControl>
                    <div className="flex items-center gap-4 h-12 dark:bg-primary-900 rounded-md border border-primary-50 bg-gray-50 dark:border-primary-800 px-3 !mt-0.5">
                        <Checkbox
                            id={props.name}
                            disabled={props.disabled}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                        <label htmlFor={props.name} className="checkbox-label w-full">
                            {props.placeholder}
                        </label>
                    </div>
                </FormControl>
            )
        }
    }

}


const CustomFormField = (props: CustomProps) => {
    return (
        <FormField
            control={props.control}
            name={props.name}
            render={({ field }) => (
                <FormItem>
                    {props.label && (
                        <FormLabel className='shad-input-label'>{props.label}</FormLabel>
                    )}
                    <RenderField field={field} props={props} />

                    <FormMessage className='shad-error' />
                </FormItem>
            )} />
    )
}

export default CustomFormField