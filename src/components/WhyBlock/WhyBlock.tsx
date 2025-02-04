'use client'
import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ColoredButton from '@/common/ui-kit/ColoredButton'
import { whyData } from './WhyBlockData'

const WhyBlock: FC = () => {
  return (
    <Stack
      id="why-we-section"
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
        Why choose Black Ocean?
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
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            mb: '40px'
          }
        }}
      >
        Expert-driven solutions, proven industry leadership, and dedicated support empower your
        business to achieve lasting success and measurable results.
      </Typography>

      <Stack
        sx={{
          maxWidth: '892px',
          width: '100%',
          alignSelf: 'flex-end',
          gap: '20px',
          mb: '30px',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            maxWidth: '780px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            maxWidth: '630px'
          },
          '@media (max-width: 480px)': {
            mb: '0px'
          }
        }}
      >
        {whyData.map((data, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              gap: '158px',
              p: '20px 10px',
              borderTop: '1px solid #FFFFFF33',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                gap: '130px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                gap: '100px'
              },
              '@media (max-width: 768px) and (min-width: 481px)': {
                gap: '130px'
              },
              '@media (max-width: 480px)': {
                flexDirection: 'column',
                gap: '40px'
              }
            }}
          >
            <Box
              component={'img'}
              src={data.imgSrc}
              sx={{ maxWidth: '40px', width: '100%', height: '40px' }}
            />
            <Box
              sx={{
                display: 'flex',
                gap: '55px',
                width: '100%',
                '@media (max-width: 1280px) and (min-width: 993px)': {
                  gap: '60px',
                  maxWidth: '590px'
                },
                '@media (max-width: 992px) and (min-width: 769px)': {
                  gap: '30px',
                  maxWidth: '470px'
                },
                '@media (max-width: 768px) and (min-width: 481px)': {
                  gap: '60px'
                },
                '@media (max-width: 480px)': {
                  gap: '15px',
                  flexDirection: 'column',
                  maxWidth: '100%'
                }
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  maxWidth: '208px',
                  width: '100%',
                  '@media (max-width: 1280px) and (min-width: 993px)': {
                    maxWidth: '180px'
                  },
                  '@media (max-width: 992px) and (min-width: 769px)': {
                    maxWidth: '150px'
                  },
                  '@media (max-width: 768px) and (min-width: 481px)': {
                    maxWidth: '180px'
                  }
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary.main"
                sx={{
                  maxWidth: '406px',
                  width: '100%',
                  '@media (max-width: 1280px) and (min-width: 993px)': {
                    maxWidth: '350px'
                  },
                  '@media (max-width: 992px) and (min-width: 769px)': {
                    maxWidth: '290px'
                  },
                  '@media (max-width: 768px) and (min-width: 481px)': {
                    maxWidth: '298px'
                  },
                  '@media (max-width: 480px) and (min-width: 321px)': {
                    maxWidth: '100%'
                  }
                }}
              >
                {data.description}
              </Typography>
            </Box>
          </Box>
        ))}

        <Box
          component="a"
          href="#form-section"
          sx={{
            mt: '30px',
            textDecoration: 'none',
            maxWidth: '892px',
            width: '100%'
            // '@media (max-width: 768px)': {
            //   width: '100%'
            // }
          }}
        >
          <ColoredButton
            type="button"
            variant="contained"
            sx={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              textTransform: 'uppercase',
              p: '21px auto',
              lineHeight: '100%',
              letterSpacing: -2,
              '@media (max-width: 768px)': {
                fontSize: '18px'
              }
              // padding: { md: '16px 71.5px', sm: 0, xs: '16px 54px' },
              // margin: '0 auto',
              // '@media (max-width: 411px) and (min-width: 321px) ': {
              //   minHeight: '110px'
              // },
              // '@media (max-width: 320px) ': {
              //   height: '110px'
              // }
            }}
          >
            {'Become a Client'}
          </ColoredButton>
        </Box>
      </Stack>
    </Stack>
  )
}

export default WhyBlock
