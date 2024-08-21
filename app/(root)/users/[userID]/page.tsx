import { getUserDetails } from '@/app/_actions/user'
import SingleUserContainer from '@/app/_components/Pages/singleUser/SingleUserContainer'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'جزئیات کاربر'
}

const SingleUser = async ({ params: { userID } }: { params: { userID: string } }) => {

  const user = await getUserDetails({ userID })

  return (
    <SingleUserContainer userInfo={user} />
  )
}

export default SingleUser