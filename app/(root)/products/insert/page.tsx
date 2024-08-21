import InsertProductContainer from '@/app/_components/Pages/products/InsertProductContainer'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: 'افزودن محصول'
}

const page = () => {
  return (
    <InsertProductContainer />
  )
}

export default page