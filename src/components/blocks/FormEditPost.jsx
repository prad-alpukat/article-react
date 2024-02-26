import React, { useState, useEffect } from 'react'
import Input from "../basics/Input"

import { useParams } from 'react-router-dom';
import { getPost, updatePost } from '../../utils/dataFetch';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';

import FroalaEditorComponent from 'react-froala-wysiwyg';

export default function FormCreatePost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const { id } = useParams()

    const config = {
        placeholderText: "Edit Your Content Here!",
        height: 300,
        imageUploadURL: `${import.meta.env.VITE_BASE_URL}/wp/v2/media`,
        imageUploadMethod: 'POST',
        imageAllowedTypes: ['jpeg', 'jpg', 'png'],
        requestHeaders: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    }

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

                <FroalaEditorComponent tag='textarea'
                    onModelChange={(model) => setContent(model)}
                    config={config}
                    model={content}
                    className="h-32"
                />

                {/* button action */}
                <div className='flex gap-3'>
                    <button className='btn btn-primary' type="submit">Edit</button>
                </div>
            </form>
        </section>
    )
}
