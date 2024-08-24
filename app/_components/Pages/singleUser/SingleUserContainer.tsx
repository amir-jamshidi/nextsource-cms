import React from 'react'
import PageContainer from '../../Modules/PageContainer'
import SingleUserFilter from './SingleUserFilter'
import SingleUserForm from './SingleUserForm'
import SingleUserDetailsBoxes from './SingleUserDetailsBoxes'
import SingleUserSections from './SingleUserSections'
import { IGetSingleUser } from '@/app/_types'

interface ISingleUserContainer {
    userInfo: IGetSingleUser
}

const SingleUserContainer = ({ userInfo: { user, tickets, orders, userDetails } }: ISingleUserContainer) => {
    return (
        <PageContainer>
            <SingleUserFilter />
            <SingleUserDetailsBoxes user={user} userDetails={userDetails} />
            <SingleUserSections tickets={tickets} orders={orders} />
            <SingleUserForm user={user} />
        </PageContainer>
    )
}

export default SingleUserContainer