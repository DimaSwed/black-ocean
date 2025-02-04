import React from 'react'
import { Box } from '@mui/material'

const SubmittedText = () => {
  return (
    <Box
      component="h2"
      sx={{
        maxWidth: '400px',
        lineHeight: '110%',
        color: 'primary.light'
      }}
    >
      Thank you! <br /> Your submission has been received!
    </Box>
  )
}

export default SubmittedText
