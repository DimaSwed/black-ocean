'use client'
import { FC } from 'react'
import { Stack, Typography, useMediaQuery } from '@mui/material'
import NumbersSwiper from './NumbersSwiper'
import NumbersGrid from './NumbersGrid'

const NumbersBlock: FC = () => {
  const isDesktop = useMediaQuery(`(max-width: 1280px)`)
  const isTablet = useMediaQuery(`(max-width: 768px)`)
  const isMobile = useMediaQuery(`(max-width: 320px)`)

  return (
    <Stack
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        m: '0 auto',
        padding: '120px 36px 120px 36px',
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '120px 40px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '120px 16px'
        },
        '@media (max-width: 768px) and (min-width: 481px)': {
          padding: '80px 20px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          padding: '60px 16px'
        },
        '@media (max-width: 320px) ': {
          padding: '60px 10px'
        }
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textTransform: 'uppercase',
          fontWeight: 600,
          lineHeight: '110%',
          letterSpacing: -2,
          zIndex: 1,
          mb: '10px',
          '@media (max-width: 1280px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }
        }}
      >
        {isDesktop ? (
          <>
            <span>Trust the numbers {isMobile ? '' : ' /'} </span>
            <span style={{ display: 'block', alignSelf: isMobile ? 'flex-start' : 'flex-end' }}>
              Trust Black Ocean
            </span>
          </>
        ) : (
          <span>Trust the numbers / Trust Black Ocean</span>
        )}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: '750px',
          width: '100%',
          textTransform: 'uppercase',
          color: 'success.main',
          alignSelf: 'flex-end',
          mr: '142px',
          mb: '80px',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            maxWidth: '750px',
            mr: '30px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            maxWidth: '630px',
            mr: 0
          },
          '@media (max-width: 768px)': {
            maxWidth: '100%',
            mr: 0,
            mb: '60px'
          },
          '@media (max-width: 480px)': {
            mb: '40px'
          }
        }}
      >
        When you work with us, you’re choosing a team that values excellence in every detail, from
        project completion to ongoing support.
      </Typography>

      {isTablet ? <NumbersGrid /> : <NumbersSwiper />}
    </Stack>
  )
}

export default NumbersBlock
