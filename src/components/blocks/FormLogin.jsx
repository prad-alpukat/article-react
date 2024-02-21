import React, { useState } from 'react'
import Input from '../basics/Input'
import Swal from 'sweetalert2'

export default function FormLogin() {
    const base_url = "https://blog-fe-batch5.neuversity.id/blog-fe-batch5"
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }

        const res = await fetch(base_url + '/wp-json/jwt-auth/v1/token', option)
        const data = await res.json()
        console.log(data)

    }

    return (
        <form className='flex flex-col p-6 border-2 rounded-lg' onSubmit={handleSubmit} >
            <h3 className='text-3xl font-bold text-center '>Login</h3>
            <Input placeholder="username" value={username} label="Username" onInput={handleUsername} />
            <Input placeholder="password" value={password} type='password' label="Password" onInput={handlePassword} />
            <button className='mt-4 btn btn-primary'>Submit</button>
        </form>
    )
}
