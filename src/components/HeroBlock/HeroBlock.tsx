'use client'
import React, { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Header from '../Header/Header'
import Divider from '@/common/ui-kit/Divider'
import { useTranslation } from 'react-i18next'
import { Language } from '@/models/language.types'

const HeroBlock: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG
  const handleScroll = () => {
    const section = document.getElementById('services-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url("/hero-section.png")',
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
            gap: isEnglish ? '76px' : '30px',
            height: '540px'
          },
          '@media (max-width: 320px) ': {
            padding: '40px 10px 20px 10px',
            gap: '20px',
            height: isEnglish ? '553px' : '635px'
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
        <Box sx={{ zIndex: 1, width: '100%' }}>
          <Typography
            variant="h1"
            sx={{
              maxWidth: '1368px',
              width: '100%',
              fontWeight: '400',
              color: 'primary.light',
              letterSpacing: -3,
              textTransform: 'uppercase',
              textIndent: isEnglish ? '425px' : '285px',
              '@media (max-width:992px) and (min-width: 769px)': {
                textIndent: isEnglish ? '283px' : '180px',
                maxWidth: isEnglish ? '929px' : '910px'
              },

              '@media (max-width: 768px) and (min-width: 481px)': {
                textIndent: isEnglish ? '170px' : '105px',
                maxWidth: isEnglish ? '706px' : '690px'
              },
              '@media (max-width:480px)': {
                textIndent: '0px',
                maxWidth: isEnglish ? '400px' : '391px'
              },
              '@media (max-width:320px)': { maxWidth: '275px' }
            }}
          >
            {t('hero title')}
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
              gap: isEnglish ? '80px' : '42px'
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
            {t('hero subtitle')}
          </Typography>

          <Box
            onClick={handleScroll}
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
              {t('hero scroll')}
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
