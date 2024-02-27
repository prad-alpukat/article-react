import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function NavbarAdmin({ isLogin }) {

    const navigate = useNavigate();

    function handleLogout() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('token');
                navigate('/admin/login');
            }
        })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="container">
                <div className="flex-1">
                    <NavLink to={"/admin"} className="text-xl btn btn-ghost">My Article</NavLink>
                </div>
                <div className="flex-none">

                    {
                        isLogin ?

                            <ul className="items-center px-1 menu menu-horizontal">
                                <li><NavLink to={"/admin/home"}>Posts</NavLink></li>
                                <li><NavLink to={"/admin/media"}>Media</NavLink></li>
                                <li>
                                    <button onClick={handleLogout} className=' btn ms-3 btn-sm btn-outline btn-error' >Logout</button>
                                </li>

                            </ul>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}
