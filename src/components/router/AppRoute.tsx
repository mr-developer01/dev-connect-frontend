import { Route, Routes } from 'react-router'
import Posts from '../core/Posts'
import Index from '../Index'
import Login from '../core/Login'
import Register from '../core/Register'

const AppRoute = () => {
  return (
    <Routes>
      <Route index element={<Index />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blogs" element={<Posts />} />
    </Routes>
  )
}

export default AppRoute
