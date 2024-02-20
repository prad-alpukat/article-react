import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AdminLayout({ children }) {
    return (
        <>
            {/* navbar */}
            <Navbar />

            {/* main content */}
            <main>
                {children}
            </main>

            {/* footer */}
            <Footer />
        </>
    )
}
