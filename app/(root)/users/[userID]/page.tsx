import { getUserDetails } from '@/app/_actions/user'
import SingleUserContainer from '@/app/_components/Pages/singleUser/SingleUserContainer'
import { IGetSingleUser } from '@/app/_types'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
  title: 'جزئیات کاربر'
}

const SingleUser = async ({ params: { userID } }: { params: { userID: string } }) => {
  const user: IGetSingleUser | boolean = await getUserDetails({ userID })
  if (!user) return notFound();
  return (
    <SingleUserContainer userInfo={user} />
  )
}

export default SingleUser