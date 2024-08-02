import { IUser } from '@/app/_types/user'
import React from 'react'
import UserFilter from './UserFilter'
import UserDetailsBoxes from './UserDetailsBoxes'
import UsersList from './UserList'

interface UserContainerProps {
  users: IUser[],
  usersDetails: {
    usersCount: number,
    usersAllCount: number,
    usersAdminCount: number,
    usersBlockCount: number,
  }
}

const UsersContainer = ({ users, usersDetails }: UserContainerProps) => {
  return (
    <div className='flex flex-col gap-y-10 pb-14'>
      <UserFilter />
      <UserDetailsBoxes usersDetails={usersDetails} />
      <UsersList users={users} usersCount={usersDetails.usersCount} />
    </div>
  )
}

export default UsersContainer