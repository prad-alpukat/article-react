import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import SingleArticle from './pages/SingleArticle'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'

// import components


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* client pages */}
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<SingleArticle />} />

          {/* admin pages */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/create-post" element={<CreatePost />} />
          <Route path="/admin/edit-post/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
