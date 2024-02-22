import React, { useEffect } from 'react'
import NavbarAdmin from '../components/sections/NavbarAdmin'
import FooterAdmin from '../components/sections/FooterAdmin'

import { checkAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

export default function AdminLayout({ children }) {
    const navigate = useNavigate();

    // check if user is logged in
    async function isLogged() {
        const isLogin = await checkAuth();
    }

    useEffect(() => {
        // if user is not logged in, redirect to login page
        if (!isLogged()) {
            navigate('/admin-login');
        }
    }, [])

    return (
        <div className='flex flex-col min-h-screen'>
            {/* navbar */}
            <NavbarAdmin />

            {/* main content */}
            <main>
                {children}
            </main>

            {/* footer */}
            <FooterAdmin />
        </div>
    )
}
