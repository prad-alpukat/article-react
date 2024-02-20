import React from 'react'
import dummyjson from '../../data/dummy-posts.json'

import Card from '../blocks/CardArticle'
import Pagination from '../basics/Pagination'

export default function SectionCatalog() {
    return (
        <div className="container flex flex-col">
            <div className='grid grid-cols-4 gap-8 my-10'>
                {
                    dummyjson.map((post, index) => {
                        return (
                            <Card
                                key={index}
                                title={post.title.rendered}
                                content={post.excerpt.rendered}
                            />
                        )
                    })
                }
            </div>

            {/* pagination */}
            <Pagination className="w-full" />
        </div>
    )
}
