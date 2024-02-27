import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Pagination from '../basics/Pagination'
import { getPosts } from '../../utils/dataFetch'
import { dateFormatter } from '../../utils/formatter'

export default function TablePosts() {
    const [posts, setPosts] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

    async function fetchData() {
        const response_post = await getPosts(currentPage)
        const data = await response_post.json()
        setTotalPage(response_post.headers.get('X-WP-TotalPages'))
        setPosts(data)
        console.log(response_post.headers.get('X-WP-TotalPages'))
    }

    useEffect(() => {
        fetchData()
    }, [currentPage])

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
            <Pagination currentPage={currentPage} onNext={() => { setCurrentPage(currentPage + 1) }} onPrev={() => { setCurrentPage(currentPage - 1) }} totalPage={totalPage} />
        </section>
    )
}
