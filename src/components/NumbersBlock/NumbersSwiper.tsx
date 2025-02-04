'use client'
import React, { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { numbersData } from './NumbersBlockData'

const NumbersSwiper: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'visible'
      }}
    >
      <Box
        sx={{
          marginRight: '-255px',
          overflow: 'visible',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            marginRight: '-10px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            mr: '-258px'
          }
        }}
      >
        <Swiper
          spaceBetween={40}
          slidesPerView={4}
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            992: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 20 },
            1440: { slidesPerView: 4, spaceBetween: 40 }
          }}
          style={{
            overflow: 'visible'
          }}
        >
          {numbersData.map((data, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Stack
                key={idx}
                sx={{
                  maxWidth: '376px',
                  width: '100%',
                  pt: '40px',
                  pr: '40px',
                  '@media (max-width: 992px)': {
                    maxWidth: '336px'
                  }
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: 'primary.light',
                    fontSize: '114px',
                    lineHeight: '80%',
                    mb: '20px',
                    '@media (max-width: 992px)': {
                      fontSize: '104px'
                    }
                  }}
                >
                  {data.numbers}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: 'primary.light',
                    mb: '40px',
                    lineHeight: '120%'
                  }}
                >
                  {data.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'primary.main',
                    width: '100%'
                  }}
                >
                  {data.description}
                </Typography>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}

export default NumbersSwiper
