import React from 'react'
import PageContainer from '../../Modules/PageContainer'
import InsertProductForm from './InsertProductForm'
import InsertProductFilter from './InsertProductFilter'

const InsertProductContainer = () => {
    return (
        <PageContainer>
            <InsertProductFilter />
            <InsertProductForm />
        </PageContainer>
    )
}

export default InsertProductContainer