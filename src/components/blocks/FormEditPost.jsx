import React, { useState } from 'react'
import Input from "../basics/Input"

export default function FormCreatePost({ onSubmit }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <section className="container max-w-screen-md my-10">
            <form onSubmit={onSubmit} >
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
