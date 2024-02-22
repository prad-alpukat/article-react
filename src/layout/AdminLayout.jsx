import React from 'react'
import NavbarAdmin from '../components/sections/NavbarAdmin'
import FooterAdmin from '../components/sections/FooterAdmin'

export default function AdminLayout({ children }) {
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
