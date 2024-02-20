import React from 'react'

export default function Pagination({ currentPage = 1 }) {
    return (
        <div className={"join w-full flex justify-center my-10"}>
            <button className="join-item btn">«</button>
            <button className="join-item btn">Page {currentPage}</button>
            <button className="join-item btn">»</button>
        </div>
    )
}
