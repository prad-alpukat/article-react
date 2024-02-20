import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="container">
                <div className="flex-1">
                    <NavLink to={"/"} className="text-xl btn btn-ghost">My Article</NavLink>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="search" placeholder="Search" className="w-24 input input-bordered md:w-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}
