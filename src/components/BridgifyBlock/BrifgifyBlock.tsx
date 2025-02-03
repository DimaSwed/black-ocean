'use client'
import { FC, useState } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import Divider from '@/common/ui-kit/Divider'
import BlackButton from '@/common/ui-kit/ButtonBlack'

const ArrowIcon = styled('img')(() => ({
  cursor: 'pointer',
  width: '22px',
  height: '22px',
  transform: 'rotate(0deg)'
}))

const BrifgifyBlock: FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <Box
      id="bridgify-section"
      sx={{
        backgroundImage: 'url("/bridgify-section.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '808px',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          height: '882px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          height: '885px'
        },
        '@media (max-width: 768px) and (min-width: 481px)': {
          height: '735px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          height: '709px'
        },
        '@media (max-width: 320px)': {
          height: '916px'
        }
      }}
    >
      <Stack
        sx={{
          // height: 'fit-content',
          // height: '808px',
          position: 'relative',
          maxWidth: '1440px',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          m: '0 auto',
          padding: '120px 36px 100px 36px',
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
            mb: '20px'
          }}
        >
          Bridgify: Simplify Your Online Business
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
            mb: '30px',
            '@media (max-width: 1280px) and (min-width: 993px)': {
              mr: '30px'
            },
            '@media (max-width: 992px) and (min-width: 769px)': {
              maxWidth: '630px',
              mr: 0
            },
            '@media (max-width: 768px)': {
              maxWidth: '100%',
              mr: 0
            }
          }}
        >
          At Black Ocean, we not only deliver tailored web traffic and software solutions but also
          innovate with our proprietary tools. One such product is Bridgify – an advanced eCommerce
          solution designed to streamline online store management and boost business efficiency.
        </Typography>

        <Stack
          sx={{
            pr: '268px',
            alignItems: 'flex-end',
            '@media (max-width: 1280px) and (min-width: 993px)': {
              pr: '184px'
            },
            '@media (max-width: 992px) and (min-width: 769px)': {
              pr: '64px'
            },
            '@media (max-width: 768px)': {
              pr: '0px',
              maxWidth: '548px',
              alignSelf: 'flex-end'
            }
          }}
        >
          <Box>
            <Stack
              sx={{
                gap: '20px',
                mb: '40px',
                maxWidth: '416px',
                width: '100%',
                '@media (max-width: 768px)': {
                  maxWidth: '548px'
                },
                '@media (max-width: 480px)': {
                  gap: '15px'
                }
              }}
            >
              <Typography variant="subtitle1" color="primary.main">
                Bridgify specializes in building and optimizing online stores on the Odoo platform.
                It offers automation for up to 10 business tasks and modular functionality to adapt
                to your specific needs.
              </Typography>
              <Typography variant="subtitle1" color="primary.main">
                With tools like SEO, Google Analytics integration, and promo creation, Bridgify
                helps businesses scale efficiently. Ongoing support and training make it your
                trusted partner for seamless eCommerce success.
              </Typography>
            </Stack>
          </Box>

          <Box
            component="a"
            href="#form-section"
            sx={{
              textDecoration: 'none',
              cursor: 'pointer',
              maxWidth: '416px',
              width: '100%',
              display: 'inline-block',
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
            }}
          >
            <BlackButton
              type="button"
              variant="contained"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              sx={{
                height: '58px',
                '@media (max-width: 768px)': { maxWidth: '100%' }
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
                {'Discover bridgify'}
              </Typography>
              <ArrowIcon
                src={isHover ? '/icons/icon-arrow-right-white.svg' : '/icons/icon-arrow-down.svg'}
                alt="Arrow Icon"
                sx={{
                  ml: '8px'
                }}
              />
            </BlackButton>
          </Box>

          <Divider
            sx={{
              position: 'absolute',
              top: 0,
              left: '510px',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                left: '460px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                left: '345px'
              },
              '@media (max-width: 768px)': {
                display: 'none'
              }
            }}
          />
          <Divider
            sx={{
              position: 'absolute',
              top: 0,
              left: '35px',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                left: '40px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                left: '16px'
              },
              '@media (max-width: 768px)': {
                display: 'none'
              }
            }}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default BrifgifyBlock
