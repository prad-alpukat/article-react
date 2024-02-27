import React from 'react'

export default function Pagination({ currentPage = 1, onNext, onPrev, totalPage }) {
    return (
        <div className={"join w-full flex justify-center my-10"}>
            <button className="join-item btn" onClick={onPrev} disabled={currentPage == 1}>«</button>
            <button className="join-item btn">Page {currentPage}</button>
            <button className="join-item btn" onClick={onNext} disabled={currentPage == totalPage}>»</button>
        </div>
    )
}
