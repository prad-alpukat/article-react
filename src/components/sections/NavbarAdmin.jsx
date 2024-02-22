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
                navigate('/admin-login');
            }
        })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="container">
                <div className="flex-1">
                    <NavLink to={"/admin"} className="text-xl btn btn-ghost">My Article</NavLink>
                </div>
                <div className="flex items-center flex-none gap-2">
                    {/* logout */}
                    {
                        isLogin &&
                        <button onClick={handleLogout} className="btn btn-error btn-outline">Logout</button>
                    }
                </div>
            </div>
        </div>
    )
}
