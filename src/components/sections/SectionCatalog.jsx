import React from 'react'

import Card from '../basics/CardArticle'
import Pagination from '../basics/Pagination'

export default function SectionCatalog() {
    return (
        <div className="container flex flex-col">
            <div className='grid grid-cols-4 gap-8 my-10'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            {/* pagination */}
            <Pagination className="w-full" />
        </div>
    )
}
