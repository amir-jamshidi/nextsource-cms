import { IUser } from '@/app/_types/user'
import React from 'react'
import UserFilter from './UserFilter'
import UserDetailsBoxes from './UserDetailsBoxes'
import UsersList from './UserList'
import PageContainer from '../../Modules/PageContainer'

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
    <PageContainer>
      <UserFilter />
      <UserDetailsBoxes usersDetails={usersDetails} />
      <UsersList users={users} usersCount={usersDetails.usersCount} />
    </PageContainer>
  )
}

export default UsersContainer