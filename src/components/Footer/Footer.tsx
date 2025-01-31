'use client'
import React, { FC } from 'react'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'

const Footer: FC = () => {
  const isDesktop = useMediaQuery(`(max-width: 992px) and (min-width: 769px)`)
  const isTablet = useMediaQuery(`(max-width: 768px) and (min-width: 481px)`)
  const isMobileP = useMediaQuery(`(max-width: 320px)`)
  return (
    <Stack
      id="contacts-section"
      sx={{
        maxWidth: '1440px',
        height: 'fit-content',
        m: '0 auto',
        width: '100%',
        padding: '60px 36px',
        gap: '60px',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '60px 40px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '60px 16px'
        },
        '@media (max-width: 768px) and (min-width: 481px)': {
          padding: '60px 20px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          padding: '60px 16px 40px 16px'
          // height: 'fit-content'
        },
        '@media (max-width: 320px)': {
          padding: '40px 10px',
          height: 'fit-content',
          gap: '40px'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '@media (max-width: 480px)': {
            flexDirection: 'column',
            gap: '20px',
            textAlign: 'center'
          },
          '@media (max-width: 320px)': {
            gap: '15px'
          }
        }}
      >
        <Box
          sx={{
            flex: '1 1 50%',
            p: '20px',
            borderRight: '1px solid #FFFFFF33',
            borderTop: '1px solid #FFFFFF33',
            '@media (max-width: 1280px) and (min-width: 993px)': {
              padding: '20px 0px'
            },
            '@media (max-width: 992px) ': {
              padding: '20px 0px 0px 0px'
            },
            '@media (max-width: 480px) ': {
              borderRight: 'none'
            }
          }}
        >
          <Typography
            component="a"
            href="https://www.google.com/maps/search/?api=1&query=Michelská+966/74,+141+00+Prague+4+-+Michle"
            target="_blank"
            rel="noopener noreferrer"
            variant="body1"
            color="primary.main"
            sx={{
              textDecoration: 'none',
              textTransform: 'uppercase',
              '@media (max-width:320px)': { fontSize: '20px' }
            }}
          >
            Michelská 966/74, 141 00 Prague 4 - Michle
          </Typography>
        </Box>

        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flex: '1 1 50%',
            gap: '20px',
            p: '20px',
            borderTop: '1px solid #FFFFFF33',
            '@media (max-width: 992px) and (min-width: 481px)': {
              padding: '20px 0px 0px 20px '
            },
            '@media (max-width: 480px) ': {
              borderBottom: '1px solid #FFFFFF33'
            }
          }}
        >
          <Typography
            variant="body1"
            component={'a'}
            href="tel:+420773635962"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              '&:hover': { color: 'primary.light' },
              '@media (max-width:320px)': { fontSize: '20px' }
            }}
          >
            +420 773 635 962
          </Typography>

          <Typography
            variant="body1"
            component={'a'}
            href="mailto:info@oceanperform.com"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              '&:hover': { color: 'primary.light' },
              '@media (max-width:320px)': { fontSize: '20px' }
            }}
          >
            info@oceanperform.com
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          display: 'flex',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '20px'
          }
        }}
      >
        <Box
          sx={{
            flex: '1 1 50%',
            p: '20px',
            '@media (max-width: 1280px) and (min-width: 993px)': {
              padding: '20px 0px',
              maxWidth: '416px'
            },
            '@media (max-width: 992px) and (min-width: 769px)': {
              padding: '0px',
              maxWidth: '330px'
            },
            '@media (max-width: 768px)': {
              order: '1',
              padding: '0px'
            }
          }}
        >
          <Typography variant="subtitle1" color="divider" sx={{ flex: '1 1 50%' }}>
            Black Ocean s. r. o. All rights reserved.
          </Typography>
        </Box>

        <Box
          sx={{
            flex: '1 1 50%',
            order: '0',
            display: 'flex',
            justifyContent: 'space-between',
            p: '20px',
            '@media (max-width: 992px)': {
              padding: '0px'
            },
            '@media (max-width: 480px)': {
              flexDirection: 'column',
              gap: '10px'
            }
          }}
        >
          {['/cookie-policy', '/privacy-policy', '/risk-management', '/terms-and-conditions'].map(
            (path, index) => (
              <Link href={path} passHref key={index}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    cursor: 'pointer',
                    color: 'divider',
                    '&:hover': { color: 'primary.main' },
                    textDecoration: 'none'
                  }}
                >
                  {path === '/cookie-policy' && 'Cookie Policy'}
                  {path === '/privacy-policy' && 'Privacy Policy'}
                  {path === '/risk-management' && 'Risk Management'}
                  {path === '/terms-and-conditions' && 'Policy Terms and Conditions'}
                </Typography>
              </Link>
            )
          )}
        </Box>
      </Box>
    </Stack>
  )
}

export default Footer
