import React from 'react'
import LayoutAdmin from '../layout/AdminLayout'
import TablePosts from '../components/sections/TablePosts'
import HeaderAdmin from '../components/sections/HeaderAdmin'

export default function AdminDashboard() {
    return (
        <LayoutAdmin>
            <HeaderAdmin />
            <TablePosts />
        </LayoutAdmin>
    )
}
