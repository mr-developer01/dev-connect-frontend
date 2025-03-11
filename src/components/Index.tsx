import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router'

const Index = () => {
  const [cookies, setCookie] = useCookies(['user'])
  const location = useLocation()
  const data = location.state
  console.log(data)
  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      setCookie('user', data.token)
    }
    if (cookies.user) {
      async function getPosts() {
        const rawData = await fetch(
          'https://dev-connect-service.onrender.com/api/posts?page=1&limit=10',
          {},
        )
        const allPosts = await rawData.json()
        navigate('/posts', { state: allPosts })
      }
      getPosts()
    } else {
      navigate('/login')
    }
  }, [cookies, navigate, data, setCookie])

  return <div>Loading....</div>
}

export default Index
