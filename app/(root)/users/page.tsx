import { getUsers } from '@/app/_actions/user'
import UsersContainer from '@/app/_components/Pages/users/UsersContainer'
import { IUser } from '@/app/_types/user'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'کاربران'
  }

  interface IUsersProps {
    searchParams: {
        page: number,
        day: number | string
    }
}

interface IGetUsers {
    users: IUser[],
    usersDetails: {
        usersCount: number,
        usersAllCount: number,
        usersAdminCount: number,
        usersBlockCount: number,
    }
}

const Users = async ({ searchParams: { page = 1, day = 7 } }: IUsersProps) => {
    const { users, usersDetails }: IGetUsers = await getUsers({ day, page });
    return (
        <UsersContainer users={users} usersDetails={usersDetails} />
    )
}

export default Users