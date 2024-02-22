import React, { useEffect, useState } from 'react'
import NavbarAdmin from '../components/sections/NavbarAdmin'
import FooterAdmin from '../components/sections/FooterAdmin'

import { isLogged } from '../utils/auth'
import { useNavigate, useLocation } from 'react-router-dom'

export default function AdminLayout({ children }) {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(false);

    // check if user is logged in
    async function checkAuth() {
        const isLogin = await isLogged();
        setIsLogin(isLogin);
        if (!isLogin) {
            navigate('/admin-login');
        }

        if (isLogin && pathname === '/admin-login') {
            navigate('/admin');
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <div className='flex flex-col min-h-screen'>
            {/* navbar */}
            <NavbarAdmin isLogin={isLogin} />

            {/* main content */}
            <main>
                {children}
            </main>

            {/* footer */}
            <FooterAdmin />
        </div>
    )
}
