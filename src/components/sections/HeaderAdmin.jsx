import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderAdmin() {
    return (
        <section className='container flex items-center gap-3'>
            <h3 className='text-3xl font-bold'>Posts</h3>
            <NavLink to={"/admin/create-post"} className={"btn btn-primary btn-sm"}>Create a New Post</NavLink>
        </section>
    )
}
