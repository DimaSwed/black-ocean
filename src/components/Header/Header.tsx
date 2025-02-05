'use client'
import React, { FC, useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { BurgerButton } from './Burger'
import { MobileNav } from './MobileNav'
import Link from 'next/link'
import Logo from '@/common/ui-kit/Logo'
import HeaderListMenu from './HeaderListMenu'
import { LanguageSwitcher } from './LanguageSwitcher'
import Divider from '@/common/ui-kit/Divider'
import { usePathname } from 'next/navigation'

const Header: FC = () => {
  const [lang, setLang] = useState('eng')

  useEffect(() => {
    const storedLang = localStorage.getItem('lang')
    if (storedLang) {
      setLang(storedLang)
    }
  }, [])

  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '166px',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderBottom: '1px solid #FFFFFF33',
        '@media (max-width:768px)': { height: '82px' }
      }}
    >
      <Box
        display="flex"
        // justifyContent="space-between"
        sx={{
          margin: '0 auto',
          maxWidth: '1440px',
          width: '100%',
          position: 'relative',
          padding: '20px 36px',
          '@media (max-width: 1440px)': {
            padding: '20px 40px'
          },
          '@media (max-width: 1280px)': {
            padding: '20px 18px'
          },
          '@media (max-width: 992px)': {
            padding: '20px 16px'
          },
          '@media (max-width: 768px)': {
            padding: '20px 20px',
            justifyContent: 'space-between'
          },
          '@media (max-width: 480px)': {
            padding: '20px 16px'
          },
          '@media (max-width: 320px)': {
            padding: '20px 10px'
          }
        }}
      >
        <Link href="/" passHref style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        <Box
          sx={{
            position: 'absolute',
            top: '20px',
            left: '464px',
            '@media (max-width: 992px) and (min-width: 769px)': {
              left: '300px'
            },
            '@media (max-width:768px)': { display: 'none' }
          }}
        >
          <LanguageSwitcher lang={lang} onChangeLang={setLang} />
        </Box>

        <Stack
          sx={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            display: 'flex',
            gap: '10px',
            '@media (max-width:992px)': { gap: '10px' },
            '@media (max-width:768px)': { display: 'none' }
          }}
        >
          <HeaderListMenu />
        </Stack>

        <Box
          display="flex"
          sx={{
            '@media (max-width:768px)': { display: 'none' }
          }}
        >
          <MobileNav lang={lang} onChangeLang={setLang} />

          <a
            href="tel:+420773635962"
            target="_blank"
            style={{ textDecoration: 'none', position: 'absolute', top: '20px', right: '35px' }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'primary.light',
                textDecoration: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'color 0.2s ease-in-out',
                borderBottom: '2px solid transparent',
                '&:hover': {
                  borderBottom: '2px solid white'
                }
              }}
            >
              (+420) 773 635 962
            </Typography>
          </a>
        </Box>
        <BurgerButton />

        {isHomePage && (
          <>
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
          </>
        )}
      </Box>
    </Box>
  )
}

export default Header
