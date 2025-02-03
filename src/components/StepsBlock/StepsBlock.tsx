import { FC } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { stepsData } from './StepsBlockData'

const StepsBlock: FC = () => {
  return (
    <Box
      id="bridgify-section"
      sx={{
        backgroundImage: 'url("/hero-section.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto'
      }}
    >
      <Stack
        sx={{
          position: 'relative',
          maxWidth: '1440px',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          m: '0 auto',
          padding: '100px 36px 100px 36px',
          display: 'flex',
          flexDirection: 'column',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            padding: '100px 40px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            padding: '100px 16px'
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
            mb: '10px'
          }}
        >
          This is exactly how it works
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: '790px',
            width: '100%',
            textTransform: 'uppercase',
            color: 'success.main',
            alignSelf: 'flex-end',
            mr: '102px',
            mb: '40px',
            '@media (max-width: 1280px) and (min-width: 993px)': {
              maxWidth: '750px',
              mr: '30px'
            },
            '@media (max-width: 992px) and (min-width: 769px)': {
              maxWidth: '630px',
              mr: 0,
              fontSize: '22px'
            },
            '@media (max-width: 768px)': {
              maxWidth: '100%',
              mr: 0
            }
          }}
        >
          Over the long experience of working with clients, we have built our own scheme of work.
          Our cooperation scheme is extremely effective. We are able to provide you with the highest
          quality service and products.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: '100px',
            '@media (max-width:480px)': { flexDirection: 'column', gap: '40px', mb: '60px' }
          }}
        >
          {stepsData.map((step, idx) => (
            <Stack
              key={idx}
              sx={{
                maxWidth: '416px',
                width: '100%',
                p: '15px',
                '@media (max-width: 992px)': {
                  maxWidth: '300px'
                },
                '@media (max-width:480px)': { maxWidth: '100%' }
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: 'primary.light',
                  fontSize: '44px',
                  lineHeight: '80%',
                  mb: '60px',
                  '@media (max-width:480px)': { mb: '40px' }
                }}
              >
                {step.id}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: 'primary.light',
                  mb: '20px',
                  lineHeight: '120%'
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'primary.main',
                  maxWidth: '350px',
                  '@media (max-width: 1280px) and (min-width: 993px)': {
                    maxWidth: '330px'
                  },
                  '@media (max-width: 768px) and (min-width: 481px)': {
                    maxWidth: '200px'
                  },
                  '@media (max-width:480px)': { maxWidth: '100%' }
                }}
              >
                {step.description}
              </Typography>
            </Stack>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            '@media (max-width:320px)': { flexDirection: 'column', gap: '10px' }
          }}
        >
          <Box
            component="img"
            src={'/steps-section-img.png'}
            sx={{
              maxWidth: '350px',
              height: 'fit-content',
              width: '100%',
              '@media (max-width:1280px)': { maxWidth: '320px' },
              '@media (max-width:992px)': { maxWidth: '250px' },
              '@media (max-width:768px)': { maxWidth: '180px' },
              '@media (max-width:480px)': { maxWidth: '150px' }
            }}
          />

          <Box
            component="img"
            src={'/steps-section-img-2.png'}
            sx={{
              maxWidth: '684px',
              height: 'auto',
              width: '100%',
              '@media (max-width:1280px)': { maxWidth: '600px' },
              '@media (max-width:992px)': { maxWidth: '480px' },
              '@media (max-width:768px)': { maxWidth: '364px' },
              '@media (max-width:480px)': { maxWidth: '216px' },
              '@media (max-width:320px)': { maxWidth: '300px' }
            }}
          />
        </Box>
      </Stack>
    </Box>
  )
}

export default StepsBlock
