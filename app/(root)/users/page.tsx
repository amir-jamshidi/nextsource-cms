import { getUsers } from '@/app/_actions/user'
import UsersContainer from '@/app/_components/Pages/users/UsersContainer'
import { IGetUsers } from '@/app/_types'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'کاربران'
}

interface IUsersProps {
    searchParams: {
        page: number,
        day: number | string
    }
}

const Users = async ({ searchParams: { page = 1, day = 7 } }: IUsersProps) => {
    const { users, usersDetails }: IGetUsers = await getUsers({ day, page });
    return (
        <UsersContainer users={users} usersDetails={usersDetails} />
    )
}

export default Users