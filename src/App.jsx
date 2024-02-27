import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import SingleArticle from './pages/SingleArticle'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'

// import utils
import ScrollToTop from './utils/ScrollToTop'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          {/* client pages */}
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<SingleArticle />} />

          {/* admin pages */}

          <Route path="/admin" element={<Navigate to="/admin/home" />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/home" element={<AdminDashboard />} />
          <Route path="/admin/media" element={<AdminDashboard />} />
          <Route path="/admin/create-post" element={<CreatePost />} />
          <Route path="/admin/edit-post/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
