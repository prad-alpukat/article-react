import React, { useState } from 'react'
import Input from "../basics/Input"
import { createPost, createMediaItem } from "../../utils/dataFetch";

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';

import FroalaEditorComponent from 'react-froala-wysiwyg';

export default function FormCreatePost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [featuredMedia, setFeaturedMedia] = useState("")

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

    const handleFeaturedMedia = async (e) => {
        // upload image to media
        const file = e.target.files[0]
        setFeaturedMedia(e.target.value)
        const response = await createMediaItem(file)
        console.log(response)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            title,
            content,
            status: 'publish'
        }
        const response = await createPost(data)
        console.log(response)
    }

    return (
        <section className="container max-w-screen-md my-10">
            <form onSubmit={handleSubmit} >
                <h1 className='text-2xl font-bold'>Create a Post</h1>
                {/* featured */}
                <Input type='file' label="featured image" value={featuredMedia} onInput={handleFeaturedMedia} />

                {/* title */}
                <Input type="text" label="Title" value={title} placeholder="title..." onInput={(e) => setTitle(e.target.value)} />

                {/* content */}
                <FroalaEditorComponent tag='textarea'
                    onModelChange={(model) => setContent(model)}
                    config={config}
                    model={content}
                    className="h-32"
                />

                {/* button action */}
                <div className='flex gap-3'>
                    <button className='btn btn-primary' type="submit">Create</button>
                </div>
            </form>
        </section>
    )
}
