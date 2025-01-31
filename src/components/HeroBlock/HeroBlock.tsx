'use client'
import React, { FC, useRef } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Header from '../Header/Header'
import Divider from '@/common/ui-kit/Divider'

const HeroBlock: FC = () => {
  const nextSectionRef = useRef<HTMLDivElement | null>(null)

  const handleScrollClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url("./hero-section.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Header />

      <Box
        sx={{
          // height: `calc(100vh - 166px)`,
          height: 'fit-content',
          position: 'relative',
          maxWidth: '1440px',
          width: '100%',
          backgroundColor: 'transparent',
          m: '0 auto',
          padding: '120px 36px 30px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            padding: '80px 40px 30px 40px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            padding: '80px 16px 30px 16px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            padding: '140px 20px 30px 20px'
            // height: `calc(100vh - 82px)`
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            padding: '60px 16px 30px 16px',
            gap: '76px',
            height: '540px'
          },
          '@media (max-width: 320px) ': {
            padding: '40px 10px 20px 10px',
            gap: '20px',
            height: '553px'
          }
        }}
      >
        <Divider
          sx={{
            position: 'absolute',
            top: 0,
            left: '464px',
            '@media (max-width: 992px) and (min-width: 769px)': {
              left: '300px'
            },
            '@media (max-width: 768px) and (min-width: 481px)': {
              left: '26%'
            },
            '@media (max-width: 480px) and (min-width: 321px)': {
              left: '16px'
            },
            '@media (max-width: 320px) ': {
              left: '10px'
            }
          }}
        />
        <Divider
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            '@media (max-width: 480px)': {
              display: 'none'
            }
          }}
        />
        <Divider
          sx={{
            position: 'absolute',
            top: 0,
            right: '35px',
            '@media (max-width: 768px) and (min-width: 481px)': {
              right: '20px'
            },
            '@media (max-width: 480px) and (min-width: 321px)': {
              right: '16px'
            },
            '@media (max-width: 320px) ': {
              right: '10px'
            }
          }}
        />
        <Box sx={{ zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: '400',
              color: 'primary.light',
              letterSpacing: -3,
              textTransform: 'uppercase',
              textIndent: '425px',
              '@media (max-width:993px)': { textIndent: '283px' },
              maxWidth: '929px',
              '@media (max-width: 768px) and (min-width: 481px)': {
                textIndent: '170px',
                maxWidth: '706px'
              },
              '@media (max-width:480px)': { textIndent: '0px', maxWidth: '400px' },
              '@media (max-width:320px)': { maxWidth: '275px' }
            }}
          >
            Simplify your digital journey with tailored web traffic strategies and cutting-edge
            software designed to elevate your business performance.
          </Typography>
        </Box>

        <Stack
          sx={{
            maxWidth: '50%',
            alignSelf: 'flex-end',
            gap: '196px',
            width: '100%',
            height: '100%',
            '@media (max-width: 1280px)': {
              gap: '162px'
            },
            '@media (max-width: 992px)': {
              gap: '212px'
            },
            '@media (max-width: 768px)': {
              gap: '252px'
            },
            '@media (max-width: 480px)': {
              maxWidth: '100%',
              gap: '80px'
            },
            '@media (max-width: 320px)': {
              gap: '31px'
            }
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              maxWidth: '393px',
              width: '100%',
              color: 'primary.light'
            }}
          >
            Optimize your online presence with precision, unlock exclusive tools to tackle business
            challenges, and drive growth with scalable, reliable solutions from Black Ocean.
          </Typography>

          <Box
            onClick={handleScrollClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              position: 'relative',
              animation: 'bounce 3s infinite'
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: '600', lineHeight: '120%' }}>
              Scroll to explore
            </Typography>
            <Box
              component="img"
              src="/icons/icon-block.svg"
              alt="Down Icon"
              sx={{ width: '20px', height: '20px' }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default HeroBlock
