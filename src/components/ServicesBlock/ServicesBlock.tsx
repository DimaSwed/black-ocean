'use client'
import React, { FC } from 'react'
import BlackButton from '@/common/ui-kit/ButtonBlack'
import { Box, Stack, Typography } from '@mui/material'
import Divider from '@/common/ui-kit/Divider'
import { services } from './ServicesData'

const BulletPoint = () => (
  <span
    style={{
      position: 'absolute',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '10px',
      height: '10px',
      backgroundColor: '#f2f2f2',
      display: 'inline-block'
    }}
  />
)

const ServicesBlock: FC = () => {
  return (
    <Box
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
        gap: '30px',
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
          padding: '60px 16px',
          gap: '20px'
        },
        '@media (max-width: 320px) ': {
          padding: '60px 10px',
          gap: '20px'
        }
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: '600',
          color: 'primary.light',
          letterSpacing: -2,
          textTransform: 'uppercase'
        }}
      >
        Our Services
      </Typography>

      <Stack>
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              borderTop: '1px solid #FFFFFF33',
              borderBottom: '1px solid #FFFFFF33',
              p: '10px 0 40px 0',
              '@media (max-width: 480px)': {
                flexDirection: 'column-reverse',
                gap: '30px'
              }
            }}
          >
            <Box sx={{ flex: '1 1 50%' }}>
              <Typography
                variant="subtitle2"
                sx={{
                  lineHeight: '130%',
                  color: 'primary.main',
                  maxWidth: '270px',
                  '@media (max-width:480px)': { maxWidth: '100%', lineHeight: '130%' }
                }}
              >
                {service.description}
              </Typography>
            </Box>

            <Stack
              sx={{
                flex: '1 1 50%',
                gap: '25px',
                '@media (max-width: 992px) and (min-width: 769px)': {
                  gap: '30px'
                },
                '@media (max-width: 768px)': {
                  gap: '25px'
                },
                '@media (max-width: 480px) and (min-width: 321px)': {
                  gap: '15px'
                }
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{ color: 'primary.light', '@media (max-width:480px)': { fontSize: '26px' } }}
                >
                  {service.title}
                </Typography>
              </Box>
              <Stack>
                <Typography variant="subtitle1" gutterBottom color="success.main" fontWeight={600}>
                  <Box
                    component="ul"
                    sx={{
                      display: 'flex', // Добавляем flex-контейнер
                      flexDirection: 'column', // Для вертикального списка
                      gap: '15px',
                      '@media (max-width: 480px) and (min-width: 321px)': {
                        gap: '10px'
                      }
                    }}
                  >
                    {service.bulletPoints.map((point, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{
                          position: 'relative',
                          paddingLeft: '20px'
                        }}
                      >
                        <BulletPoint />
                        {point}
                      </Box>
                    ))}
                  </Box>
                </Typography>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Stack>

      <Stack
        sx={{
          width: '416px',
          height: '174px',
          m: '0 auto',
          position: 'relative',
          alignItems: 'center',
          gap: '20px',
          mt: '-30px',
          '@media (max-width: 992px)': { width: '300px' },
          '@media (max-width: 480px)': { height: '124px', mt: '-20px' }
        }}
      >
        <Divider
          sx={{
            maxHeight: '100px',
            '@media (max-width: 480px)': { maxHeight: '50px' }
          }}
        />
        <Box
          component="a"
          href="#form-section"
          sx={{ textDecoration: 'none', cursor: 'pointer', width: '100%' }}
        >
          <BlackButton
            type="button"
            variant="contained"
            sx={{
              '@media (max-width: 992px)': { maxWidth: '300px' }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: '700',
                lineHeight: '100%',
                letterSpacing: -2,
                textTransform: 'uppercase'
              }}
            >
              {'Become a Client'}
            </Typography>
          </BlackButton>
        </Box>
      </Stack>
    </Box>
  )
}

export default ServicesBlock
