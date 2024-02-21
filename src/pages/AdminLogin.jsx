import React from 'react'
import AdminLayout from "../layout/AdminLayout"
import SectionAdminLogin from '../components/sections/SectionAdminLogin'

export default function AdminLogin() {
    return (
        <AdminLayout>
            {/* login */}
            <SectionAdminLogin />
        </AdminLayout>
    )
}
