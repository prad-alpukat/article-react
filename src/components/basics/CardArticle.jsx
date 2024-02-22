import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card({ post = { id: 0, title: { rendered: "Title" }, excerpt: { rendered: "Content" }, thumbnail: "https://via.placeholder.com/150" } }) {
  return (
    <div className="w-full shadow-xl card bg-base-100">
      <figure>
        <img src={post._embedded['wp:featuredmedia'] ? post._embedded["wp:featuredmedia"][0].source_url : "https://via.placeholder.com/200x150"} alt="Shoes" className='object-cover w-full' />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.title.rendered}</h2>
        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className='line-clamp-2'></p>
        <div className="justify-end card-actions">
          <NavLink to={"/posts/" + post.id} className="btn btn-primary">Read More</NavLink>
        </div>
      </div>
    </div>
  )
}
