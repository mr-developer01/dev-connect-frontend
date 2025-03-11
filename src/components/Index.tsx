import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router'

const Index = () => {
  const [cookies, setCookie] = useCookies(['user'])
  const location = useLocation()
  const data = location.state
  console.log(data)
  const navigate = useNavigate()

  if (data) {
    setCookie('user', data.token)
  }

  useEffect(() => {
    if (cookies.user) {
      navigate('/blogs')
    } else {
      navigate('/login')
    }
  }, [cookies, navigate, data, setCookie])

  return <div>Loading....</div>
}

export default Index
