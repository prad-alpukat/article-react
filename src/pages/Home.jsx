import React from 'react'
import ClientLayout from '../layout/ClientLayout'
import SectionCatalog from '../components/sections/SectionCatalog'
import SectionHero from '../components/sections/SectionHero'

export default function Home() {
    return (
        <ClientLayout>
            <SectionHero />
            <SectionCatalog />
        </ClientLayout>
    )
}
