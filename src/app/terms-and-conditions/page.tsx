import React, { FC } from 'react'

import { Box } from '@mui/material'

const TearmsAndConditions: FC = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: 'background.default',
        overflow: 'hidden',
        fontFamily: 'Open Sans, sans-serif',
        color: 'primary.light'
      }}
    >
      Tearms And Conditions
    </Box>
  )
}

export default TearmsAndConditions
