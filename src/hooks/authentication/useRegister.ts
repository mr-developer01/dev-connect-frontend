import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router'

type TUserRegister = {
  userRef?: React.RefObject<HTMLInputElement | null>
  emailRef: React.RefObject<HTMLInputElement | null>
  passwordRef: React.RefObject<HTMLInputElement | null>
  setOpen: (arg: boolean) => void
}

export const useRegister = ({
  userRef,
  emailRef,
  passwordRef,
  setOpen,
}: TUserRegister) => {
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

  const handleRegister = async () => {
    if (userRef?.current && emailRef?.current && passwordRef?.current) {
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
      if (response.token) {
        setToaster('User register successfuly!!')
        setOpen(true)
        setTimeout(() => {
          navigate('/', { state: { token: response?.token } })
        }, 2000)
      } else {
        if (response?.message) {
          setToaster(response?.message)
        }
        if (response?.errors) {
          setToaster(response?.errors[0]?.msg)
        }
        setOpen(true)
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
    handleRegister,
    toaster,
  }
}
