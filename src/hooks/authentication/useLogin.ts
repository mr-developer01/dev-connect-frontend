import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router'

type TUserLogin = {
  emailRef: React.RefObject<HTMLInputElement | null>
  passwordRef: React.RefObject<HTMLInputElement | null>
  setOpen: (arg: boolean) => void
}

export const useLogin = ({ emailRef, passwordRef, setOpen }: TUserLogin) => {
  const [toaster, setToaster] = useState('')
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

  const handleLogin = async () => {
    if (emailRef?.current && passwordRef?.current) {
      const jsonData = await fetch(
        'https://dev-connect-service.onrender.com/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailRef?.current?.value,
            password: passwordRef?.current?.value,
          }),
        },
      )
      const response = await jsonData.json()
      console.log(response)
      if (response.errors) {
        setToaster(response.errors[0]?.msg)
        setOpen(true)
      }
      if (response?.message) {
        setToaster(response?.message)
        setOpen(true)
      }
      if (response?.name) {
        setToaster(`${response?.name} welcome back!!`)
        setOpen(true)
        setTimeout(() => {
          navigate('/', { state: { token: response.token } })
        }, 2000)
      }
    }
  }

  useEffect(() => {
    if (cookies.user) {
      navigate('/')
    }
  }, [cookies.user, navigate])

  return {
    showPassword,
    setShowPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
    handleLogin,
    toaster,
  }
}
