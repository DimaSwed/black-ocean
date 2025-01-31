import { FC } from 'react'
import { Box } from '@mui/material'

const Logo: FC = () => {
  return (
    <Box
      component="img"
      sx={{
        height: '40px',
        width: '232px',
        cursor: 'pointer',
        '@media (max-width:480px)': { height: '37px', width: '212px' },
        '@media (max-width:320px)': { height: '26px', width: '150px' }
      }}
      alt="Logo"
      src="./black_ocean_logo 2.svg"
    />
  )
}

export default Logo
