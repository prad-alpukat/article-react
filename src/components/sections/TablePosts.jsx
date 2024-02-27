import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Pagination from '../basics/Pagination'
import { getPosts } from '../../utils/dataFetch'
import { dateFormatter } from '../../utils/formatter'

export default function TablePosts() {
    const [posts, setPosts] = useState(null)

    async function fetchData() {
        const data = await getPosts()
        setPosts(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="container my-10">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts && posts.map((post, index) => {
                                return (
                                    <tr key={post.id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="w-12 h-12 mask mask-squircle">
                                                        <img src={post._embedded['wp:featuredmedia'] ? post._embedded["wp:featuredmedia"][0].source_url : "https://via.placeholder.com/200x150"} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{post.title.rendered}</div>
                                                    <div className="text-sm opacity-50">{post.alt_text}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{dateFormatter(post.date)}</td>
                                        <td>
                                            <div className='flex gap-3'>
                                                <NavLink to={`/admin/edit-post/${post.id}`} className="btn btn-secondary btn-sm">Edit</NavLink>
                                                <button className="btn btn-error btn-sm">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Pagination />
        </section>
    )
}
