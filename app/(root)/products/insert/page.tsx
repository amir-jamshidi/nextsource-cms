import InsertProductContainer from '@/app/_components/Pages/products/InsertProductContainer'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'افزودن محصول'
}

const page = () => {
  return (
    <InsertProductContainer />
  )
}

export default page