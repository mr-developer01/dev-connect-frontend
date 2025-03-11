import { Box, Grid2 as Grid } from '@mui/material'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router'
import PostGridBox from '../ui/PostGridBox'

const Posts = () => {
  const [cookies] = useCookies(['user'])
  const navigate = useNavigate()
  const { state } = useLocation()

  console.log(state)

  useEffect(() => {
    if (!cookies.user) {
      navigate('/')
    }
  }, [cookies, navigate])

  // ${import.meta.env.VITE_HOST_URL}${API_KEYS}

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh' }}>
      <Grid container spacing={2}>
        <PostGridBox />
      </Grid>
    </Box>
  )
}

export default Posts
