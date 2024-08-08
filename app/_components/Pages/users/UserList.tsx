import React from 'react'
import Pagination from '../../Modules/Pagination'
import NoItemTable from '../../Modules/NoItemTable'
import { SHOW_IN_PAGE } from '@/app/_constants/gobalVariables'
import { IUser } from '@/app/_types/user'
import UserTitleTable from './UserTitleTable'
import UserItem from './UserItem'
import { Table } from '@/components/ui/table'

interface ITicketsList {
    users: IUser[]
    usersCount: number
}

const UsersList = ({ users, usersCount }: ITicketsList) => {
    return (
        <div className='overflow-y-auto rounded-xl dark:bg-primary-900 bg-white dark:divide-primary-800 flex flex-col border divide-y divide-primary-0 border-primary-50 dark:border-primary-800 overflow-hidden'>
            {users.length > 0 ? (<>
                <Table>
                    <UserTitleTable />
                    {users.map((user, i) => (
                        <UserItem key={String(user._id)} user={user} index={i + 1} />
                    ))}
                </Table>
                < Pagination sourceCount={usersCount} showInPage={SHOW_IN_PAGE} />
            </>) : (<NoItemTable text='کاربری' />)}
        </div>
    )
}

export default UsersList