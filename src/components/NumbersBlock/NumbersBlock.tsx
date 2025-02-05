'use client'
import { FC } from 'react'
import { Stack, Typography, useMediaQuery } from '@mui/material'
import NumbersSwiper from './NumbersSwiper'
import NumbersGrid from './NumbersGrid'
import { useTranslation } from 'react-i18next'
import { Language } from '@/models/language.types'

const NumbersBlock: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  const isDesktop = useMediaQuery(`(min-width: 1281px)`)
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
          // '@media (max-width: 1280px)': {
          //   display: 'flex',
          //   flexDirection: 'column',
          //   alignItems: 'flex-start'
          // }
        }}
      >
        <>
          {isEnglish && isDesktop ? (
            <>
              <span>{t('numbers title 3')}</span>
            </>
          ) : (
            <>
              <span>
                {t('numbers title 1')} {isMobile ? '' : ' /'}{' '}
              </span>
              <span
                style={{
                  display: 'block',
                  alignSelf: isMobile ? 'flex-start' : 'flex-end'
                }}
              >
                {t('numbers title 2')}
              </span>
            </>
          )}
        </>
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
        {t('numbers subtitle')}
      </Typography>

      {isTablet ? <NumbersGrid /> : <NumbersSwiper />}
    </Stack>
  )
}

export default NumbersBlock
