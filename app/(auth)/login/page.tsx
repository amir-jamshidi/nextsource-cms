import LoginContainer from '@/app/_components/Pages/login/LoginContainer'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'ورود به حساب'
  }

const page = () => {
    return (
        <LoginContainer />
    )
}

export default page