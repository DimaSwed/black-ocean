import React, { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { numbersData } from './NumbersBlockData'

const NumbersGrid: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        pb: '72px',
        '@media (max-width: 480px)': {
          pb: '54px'
        },
        '@media (max-width:320px)': {
          gap: '16px',
          pb: '0px'
        }
      }}
    >
      {numbersData.map((data, idx) => (
        <Stack
          key={idx}
          sx={{
            maxWidth: '354px',
            width: '100%',
            pt: '40px',
            pr: '20px',
            '@media (max-width:480px)': { maxWidth: '216px' },
            '@media (max-width:320px)': {
              pr: '0px',
              maxWidth: '100%',
              borderTop: '1px solid #FFFFFF33'
            }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'primary.light',
              fontSize: '84px',
              lineHeight: '80%',
              mb: '20px',
              '@media (max-width:480px)': { fontSize: '64px' }
            }}
          >
            {data.numbers}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: 'primary.light',
              mb: '40px',
              lineHeight: '120%',
              '@media (max-width:320px)': { mb: '30px' }
            }}
          >
            {data.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'primary.main',
              width: '100%',
              '@media (max-width:320px)': { maxWidth: '280px' }
            }}
          >
            {data.description}
          </Typography>
        </Stack>
      ))}
    </Box>
  )
}

export default NumbersGrid
