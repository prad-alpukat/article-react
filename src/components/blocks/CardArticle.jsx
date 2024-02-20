import React from 'react'

export default function Card({ title = "title..", content = "content..", thumbnail = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" }) {
  return (
    <div className="w-full shadow-xl card bg-base-100">
      <figure><img src={thumbnail} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: content }} className='line-clamp-2'></p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
