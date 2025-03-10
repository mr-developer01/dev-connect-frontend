import { Route, Routes } from 'react-router'
import Register from '../core/Register'
import Protected from './protectedRoutes/Protected'
import Blogs from '../core/Blogs'

const AppRoute = () => {
  return (
    <Routes>
      <Route index element={<Register />} />
      <Route element={<Protected />}>
        <Route path="blogs" element={<Blogs />} />
      </Route>
    </Routes>
  )
}

export default AppRoute
