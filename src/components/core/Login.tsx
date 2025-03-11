import { Email, Visibility, VisibilityOff } from '@mui/icons-material'
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
import React, { useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router'

const Login = () => {
  const [cookies] = useCookies(['user'])
  const navigate = useNavigate()
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

  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (cookies.user) {
      navigate('/')
    }
  }, [cookies.user, navigate])

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
        Login As You Are A Dev
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
              if (emailRef.current && passwordRef.current) {
                const jsonData = await fetch(
                  'https://dev-connect-service.onrender.com/api/auth/login',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      email: emailRef.current?.value,
                      password: passwordRef.current?.value,
                    }),
                  },
                )
                const response = await jsonData.json()
                console.log(response)
                navigate('/', { state: { token: response.token } })
              }
            }}
          >
            Login
          </Button>
          <Typography>
            Register as a <Link to="/register">New Dev</Link>
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  )
}

export default Login
