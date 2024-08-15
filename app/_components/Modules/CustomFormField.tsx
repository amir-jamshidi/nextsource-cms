'use client'

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
    fieldType: 'input' | 'textarea' | 'phoneInput' | 'checkbox' | 'datePicket' | 'select' | 'skeleton'
    name: string
    label?: string
    placeholder?: string
    iconImg?: React.ReactNode
    iconAlt: string
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode
}

const RenderField = ({ field, props }: { field: any, props: CustomProps }) => {

    const { fieldType, iconImg, iconAlt, placeholder } = props

    switch (fieldType) {
        case 'input':
            return (
                <div className='flex items-center rounded-md border dark:border-primary-800 border-primary-50 bg-gray-50 dark:bg-primary-900 !mt-0.5'>
                    {iconImg && (
                        <div className='h-full flex pr-2.5'>
                            {iconImg}
                        </div>
                    )}
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className='shad-input border-0'
                        />
                    </FormControl>
                </div>
            )

        case "phoneInput":
            return (
                <PhoneInput
                    defaultCountry='IR'
                    placeholder={placeholder}
                    international
                    withCountryCallCode
                    value={field.value}
                    onChange={field.onChange}
                    className='input-phone'
                />
            )
        case "select": {
            return (
                <div className='!mt-0.5'>
                    <FormControl>
                        <Select dir='rtl' onValueChange={field.onChange} defaultValue={field.value}>
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
    }

    return (
        <Input
            type='text'
        />
    )

}


const CustomFormField = (props: CustomProps) => {
    return (
        <FormField
            control={props.control}
            name={props.name}
            render={({ field }) => (
                <FormItem>
                    {props.fieldType !== 'checkbox' && props.label && (
                        <FormLabel className='shad-input-label'>{props.label}</FormLabel>
                    )}
                    <RenderField field={field} props={props} />

                    <FormMessage className='shad-error' />
                </FormItem>
            )} />
    )
}

export default CustomFormField