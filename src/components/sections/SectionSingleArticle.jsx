import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../../utils/dataFetch'
import { dateFormatter } from '../../utils/formatter'

export default function SectionSingleArticle() {
    const { id } = useParams()

    const [post, setPost] = useState(null)

    async function fetchData() {
        const res = await getPost(id)
        setPost(res)
    }

    useEffect(() => {
        fetchData()
    }
        , [])
    return (
        <div className="container max-w-screen-md my-10">
            {/* title */}
            <div>
                <h1 className='mb-4 text-5xl font-bold text-center'>
                    {post && post.title.rendered}
                </h1>
                <p className='text-center'>
                    {post && dateFormatter(post.date)}
                </p>
            </div>

            {/* body content */}
            <div className='mt-10 prose-lg'>
                {post && <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>}
            </div>
        </div>
    )
}
