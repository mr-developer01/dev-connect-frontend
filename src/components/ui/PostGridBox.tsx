import { ChatBubble, ThumbUp } from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid2 as Grid,
  IconButton,
  Typography,
} from '@mui/material'

const PostGridBox = () => {
  return (
    <>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 3,
          }}
        >
          <Box sx={{ height: '250px' }}>
            <Box
              component="img"
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'centre',
              }}
              src="https://plus.unsplash.com/premium_photo-1722111091429-dd3dc55979d3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </Box>
          <CardContent
            sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
          >
            <Typography variant="h6" fontWeight="bold">
              Alex
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              24/10/2025
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="caption" sx={{ flexGrow: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              eum? Vero, numquam a nostrum cumque provident magnam, magni
              maiores placeat quidem enim officia atque hic quibusdam officiis
              ea! Illum, quasi.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton>
                <ThumbUp />
              </IconButton>
              <IconButton>
                <ChatBubble />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default PostGridBox
