import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card({ id = 0, title = "title..", content = "content..", thumbnail = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" }) {
  return (
    <div className="w-full shadow-xl card bg-base-100">
      <figure><img src={thumbnail} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: content }} className='line-clamp-2'></p>
        <div className="justify-end card-actions">
          <NavLink to={"/posts/" + id} className="btn btn-primary">Read More</NavLink>
        </div>
      </div>
    </div>
  )
}
