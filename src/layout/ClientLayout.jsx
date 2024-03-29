import React from 'react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'

export default function ClientLayout({ children }) {
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
