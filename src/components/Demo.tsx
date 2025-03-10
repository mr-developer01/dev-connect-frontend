// components/Home.tsx
import { Typography, Button, Container, Box, useTheme } from '@mui/material'

interface HomeProps {
  toggleTheme: () => void
}

export default function Demo({ toggleTheme }: HomeProps) {
  const theme = useTheme() // Access the theme

  return (
    <Container>
      {/* Theme Toggle Button */}
      <Box textAlign="center" my={3}>
        <Button variant="contained" color="primary" onClick={toggleTheme}>
          Toggle Theme (Light / Dark)
        </Button>
      </Box>

      {/* Typography Example */}
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        Hello, MUI Theming!
      </Typography>
      <Typography
        variant="h2"
        sx={{ textAlign: 'center', color: 'secondary.main' }}
      >
        Custom Breakpoints & Responsive Typography
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        This text adjusts based on screen size.
      </Typography>

      {/* Breakpoint Example */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          textAlign: 'center',
          p: 2,
          mt: 4,
          [theme.breakpoints.up('md')]: {
            backgroundColor: 'secondary.main',
          },
          [theme.breakpoints.up('xxl')]: {
            backgroundColor: 'green',
          },
        }}
      >
        This box changes color at different breakpoints!
        <br />
        (Blue → Pink → Green at xxl screens)
      </Box>
    </Container>
  )
}
