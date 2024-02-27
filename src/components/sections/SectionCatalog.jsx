import React, { useState, useEffect } from 'react'

import Card from '../basics/CardArticle'
import Pagination from '../basics/Pagination'
import { getPosts } from "../../utils/dataFetch"

export default function SectionCatalog() {
    const [posts, setPosts] = useState(null)

    async function fetchData() {
        const res = await getPosts()
        const data = await res.json()
        setPosts(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="container flex flex-col">
            <div className='grid grid-cols-4 gap-8 my-10'>
                {
                    posts && posts.map((post, index) => {
                        return (
                            <Card key={index} post={post} />
                        )
                    })
                }
            </div>

            {/* pagination */}
            <Pagination className="w-full" />
        </div>
    )
}
