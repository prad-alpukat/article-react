import React from 'react'
import { NavLink } from 'react-router-dom'
import Pagination from '../basics/Pagination'

export default function TablePosts() {
    return (
        <section className="container my-10">
            <h3 className='mb-3 text-2xl font-bold'>Posts: </h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>22-01-2024</td>
                            <td>
                                <div className='flex gap-3'>
                                    <NavLink to="/admin/edit-post/1" className="btn btn-secondary btn-sm">Edit</NavLink>
                                    <button className="btn btn-error btn-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>22-01-2024</td>
                            <td>
                                <div className='flex gap-3'>
                                    <NavLink to="/admin/edit-post/1" className="btn btn-secondary btn-sm">Edit</NavLink>
                                    <button className="btn btn-error btn-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>22-01-2024</td>
                            <td>
                                <div className='flex gap-3'>
                                    <NavLink to="/admin/edit-post/1" className="btn btn-secondary btn-sm">Edit</NavLink>
                                    <button className="btn btn-error btn-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>22-01-2024</td>
                            <td>
                                <div className='flex gap-3'>
                                    <NavLink to="/admin/edit-post/1" className="btn btn-secondary btn-sm">Edit</NavLink>
                                    <button className="btn btn-error btn-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Pagination />
        </section>
    )
}
