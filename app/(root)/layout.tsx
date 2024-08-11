import React from 'react'
import Header from '../_components/Templates/Header/Header'
import Sidebar from '../_components/Templates/Sidebar/Sidebar'
import isAdmin from '../_middlewares/isAdmin';
import { redirect } from 'next/navigation';


const layout = async ({ children }: { children: React.ReactNode }) => {

    const isAdminUser = await isAdmin();
    if (!isAdminUser) redirect('/login');

    return (
        <div className="grid h-screen grid-cols-[300px,1fr] grid-rows-[64px,1fr]" id="root">
            <Header />
            <Sidebar />
            <div className="main lg:overflow-auto bg-gray-50 dark:bg-gray-900 col-span-2 lg:col-span-1" style={{}}>
                <div className="container h-full pt-8 px-4 md:px-8 ">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout