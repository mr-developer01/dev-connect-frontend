import * as React from 'react'
import Button from '@mui/material/Button'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

type TSimpleSnackbar = {
  open: boolean
  setOpen: (arg: boolean) => void
  toaster: string
}

export default function SimpleSnackbar({
  open,
  setOpen,
  toaster,
}: TSimpleSnackbar) {
  //   const handleClick = () => {
  //     setOpen(true)
  //   }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <div>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toaster}
        action={action}
      />
    </div>
  )
}
