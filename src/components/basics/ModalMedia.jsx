import React, { useEffect, useState } from 'react'
import { getMedia } from "../../utils/dataFetch";
import Swal from 'sweetalert2';

export default function ModalMedia() {
    const [media, setMedia] = useState([])

    const fetchData = async () => {
        const data = await getMedia()
        if (data.length > 0) {
            setMedia(data)
        } else {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No Media Found!',
            })
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button type='button' className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>List Media</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="mb-3 text-lg font-bold">List Media</h3>

                    <div className="grid grid-cols-4 gap-3 overflow-y-auto bg-red-200 modal-body h-96">
                        {
                            media.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center gap-3">
                                        <img src={item.source_url} alt={item.alt_text} className="object-cover w-full h-32 rounded-md" />
                                        <p>{item.alt_text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}

                        <button type='button' className="btn" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>

                    </div>
                </div>
            </dialog>
        </>
    )
}
