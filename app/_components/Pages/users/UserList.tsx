import { SHOW_IN_PAGE } from '@/app/_constants/gobalVariables'
import { IUserList } from '@/app/_types'
import { Table } from '@/components/ui/table'
import NoItemTable from '../../Modules/NoItemTable'
import Pagination from '../../Modules/Pagination'
import UserItem from './UserItem'
import UserTitleTable from './UserTitleTable'

const UsersList = ({ users, usersCount }: IUserList) => {
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