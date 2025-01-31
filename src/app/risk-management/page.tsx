import React, { FC } from 'react'

import { Box } from '@mui/material'

const RiskManagementPolicy: FC = () => {
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
      Risk Management Policy
    </Box>
  )
}

export default RiskManagementPolicy
