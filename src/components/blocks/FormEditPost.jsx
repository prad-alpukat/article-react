import React, { useState, useEffect } from 'react'
import Input from "../basics/Input"

import { useParams } from 'react-router-dom';
import { getPost, updatePost } from '../../utils/dataFetch';

export default function FormCreatePost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const { id } = useParams()

    async function fetchData() {
        const data = await getPost(id)
        setTitle(data.title.rendered)
        setContent(data.content.rendered)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('submit form')
        const data = { title, content }
        const update = await updatePost(id, data);
        console.log(update)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="container max-w-screen-md my-10">
            <form onSubmit={handleSubmit} >
                <h1 className='text-2xl font-bold'>Edit a Post</h1>
                <Input type="text" label="Title" value={title} placeholder="title..." onInput={(e) => setTitle(e.target.value)} />
                <Input type="text" label="Content" placeholder="content..." value={content} onInput={(e) => setContent(e.target.value)} />
                {/* button action */}
                <div className='flex gap-3'>
                    <button className='btn btn-primary' type="submit">Edit</button>
                </div>
            </form>
        </section>
    )
}
