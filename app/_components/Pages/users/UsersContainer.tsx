import { IUser } from '@/app/_types/user'
import React from 'react'
import UserFilter from './UserFilter'
import UserDetailsBoxes from './UserDetailsBoxes'
import UsersList from './UserList'
import PageContainer from '../../Modules/PageContainer'
import { IGetUsers } from '@/app/_types'

const UsersContainer = ({ users, usersDetails }: IGetUsers) => {
  return (
    <PageContainer>
      <UserFilter />
      <UserDetailsBoxes usersDetails={usersDetails} />
      <UsersList users={users} usersCount={usersDetails.usersCount} />
    </PageContainer>
  )
}

export default UsersContainer