import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router'

const Posts = () => {
  const [cookies] = useCookies(['user'])
  const navigate = useNavigate()

  useEffect(() => {
    if (!cookies.user) {
      navigate('/')
    }
  }, [cookies, navigate])

  return <div>Blogs</div>
}

export default Posts
