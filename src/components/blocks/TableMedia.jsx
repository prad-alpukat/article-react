import React, { useState, useEffect } from 'react'
import { getMedia, deleteMediaItem } from '../../utils/dataFetch'
import Swal from 'sweetalert2';

export default function TableMedia() {

    const [media, setMedia] = useState([]);

    async function fetchData() {
        const data = await getMedia();
        setMedia(data);
    }

    async function handleDelete(id) {
        // confirm modal before delete
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        // if user confirm delete
        if (confirm.isConfirmed) {
            const data = await deleteMediaItem(id);
            if (data) {
                await fetchData();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        media.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 mask mask-squircle">
                                                    <img src={item.source_url} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.title.rendered}</div>
                                                <div className="text-sm opacity-50">{item.alt_text}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.date}</td>
                                    <td>
                                        <button className="btn btn-sm btn-error" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
