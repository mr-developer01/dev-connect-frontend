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
import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useRegister } from '../../hooks/authentication/useRegister'
import SimpleSnackbar from '../ui/SimpleSnackbar'

const Register = () => {
  const [open, setOpen] = useState(false)
  const userRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const {
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
    handleRegister,
    showPassword,
    toaster,
  } = useRegister({ userRef, emailRef, passwordRef, setOpen })

  console.log(toaster)

  return (
    <>
      <SimpleSnackbar open={open} setOpen={setOpen} toaster={toaster} />
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
            sx={{
              width: '65%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-user">
                User Name
              </InputLabel>
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
            <Button variant="outlined" onClick={handleRegister}>
              Submit
            </Button>
            <Typography>
              Already Registerd As <Link to="/">Dev</Link>
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </>
  )
}

export default Register
