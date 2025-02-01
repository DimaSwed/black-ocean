'use client'
import { FC } from 'react'
import { Box, Stack } from '@mui/system'
import { Typography, useMediaQuery } from '@mui/material'

const AboutBlock: FC = () => {
  const isMobileP = useMediaQuery(`(max-width: 320px)`)
  const isMobileL = useMediaQuery(`(max-width: 480px) and (min-width: 321px)`)

  return (
    <Stack
      id={'services-section'}
      sx={{
        height: 'fit-content',
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
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
          textAlign: 'center',
          fontWeight: 600,
          lineHeight: '110%',
          letterSpacing: -2,
          zIndex: 1
          // '@media (max-width:992px)': { maxWidth: '960px', width: '100%', m: '0 auto' }
        }}
      >
        Our aim - to supply best service in providing web traffic which will grow your sales
        results.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '60px',
          alignSelf: 'flex-end',
          pr: '116px',
          alignItems: 'center',
          mt: '-58px',
          '@media (max-width:1280px)': { pr: '60px' },
          '@media (max-width:992px)': { mt: '-50px', pr: '0px', gap: '30px' },
          '@media (max-width:768px)': {
            mt: '20px',
            pr: '0px',
            gap: '20px',
            alignItems: 'flex-start',
            width: '100%'
          },
          '@media (max-width:480px)': { mt: '15px', flexDirection: 'column', gap: '15px' }
        }}
      >
        <Box
          component="img"
          src={
            isMobileL
              ? '/about-section-img-mobileL.png'
              : isMobileP
                ? '/about-section-img-mobileP.png'
                : '/about-section-img.png'
          }
          sx={{
            maxWidth: '416px',
            height: 'auto',
            width: '100%',
            '@media (max-width:1280px)': { maxWidth: '360px', height: '570px' },
            '@media (max-width:992px)': { maxWidth: '300px', height: '542px' },
            '@media (max-width:768px)': { maxWidth: '354px', height: '417px' },
            '@media (max-width:480px)': { maxWidth: '448px', height: '250px' },
            '@media (max-width:320px)': { maxWidth: '300px', height: '250px' }
          }}
        />
        <Typography
          variant="body1"
          sx={{
            maxWidth: '300px',
            textTransform: 'uppercase',
            color: 'success.main',
            '@media (max-width:768px)': { maxWidth: '354px' },
            '@media (max-width:480px)': { maxWidth: '100%', textAlign: 'center' }
          }}
        >
          Besides that, we supply software for your business which decide your tasks with 100%
          accuracy. Mission of Black Ocean is to guarantee the highest level of quality on the
          market. {isMobileL || isMobileP ? '' : <br />} Team of Black Ocean always provide
          technical support and service for clients.
        </Typography>
      </Box>
    </Stack>
  )
}

export default AboutBlock
