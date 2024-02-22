import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Pagination from '../basics/Pagination'
import { getPosts } from '../../utils/dataFetch'
import { dateFormatter } from '../../utils/formatter'

export default function TablePosts() {
    const [posts, setPosts] = useState(null)


    useEffect(() => {
        getPosts()
            .then(data => { setPosts(data) })
    }, [])

    return (
        <section className="container my-10">
            <h3 className='mb-3 text-2xl font-bold'>Posts: </h3>
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
                                        <td>{post.title.rendered}</td>
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
