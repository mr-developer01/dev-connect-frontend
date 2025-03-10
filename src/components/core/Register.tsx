import {
  Email,
  VerifiedUserOutlined,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router'

const Register = () => {
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies(['name'])
  console.log(cookies)
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const userRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (cookies.name) {
      navigate('/blogs')
    }
  }, [cookies, navigate])

  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" color="primary.secondary">
        Register You As Dev
      </Typography>
      <Paper elevation={4} sx={{ width: 900, height: 450, display: 'flex' }}>
        <Box sx={{ width: '55%', bgcolor: 'secondary.main', height: '100%' }}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1741334632363-58022899ce91?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
        <Stack
          spacing={2}
          direction="column"
          sx={{ width: '65%', justifyContent: 'center', alignItems: 'center' }}
        >
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-user">User Name</InputLabel>
            <Input
              inputRef={userRef}
              id="standard-adornment-user"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <VerifiedUserOutlined />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
            <Input
              inputRef={emailRef}
              id="standard-adornment-email"
              type="Email"
              endAdornment={
                <InputAdornment position="end">
                  <Email />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              inputRef={passwordRef}
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? 'hide the password'
                        : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant="outlined"
            onClick={async () => {
              if (userRef.current && emailRef.current && passwordRef.current) {
                const jsonData = await fetch(
                  'https://dev-connect-service.onrender.com/api/auth/register',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: userRef.current?.value,
                      email: emailRef.current?.value,
                      password: passwordRef.current?.value,
                    }),
                  },
                )
                const response = await jsonData.json()
                setCookie('name', response.token)

                console.log(response)
              }
            }}
          >
            Submit
          </Button>
        </Stack>
      </Paper>
    </Stack>
  )
}

export default Register
