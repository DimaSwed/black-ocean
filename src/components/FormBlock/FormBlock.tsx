'use client'
import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import ContactForm from '../FormBlock/Form'

const Form: FC = () => {
  return (
    <Box
      sx={{
        margin: '0 auto',
        maxWidth: '1440px',
        width: '100%',
        padding: '60px 36px 0px 36px',
        display: 'flex',
        gap: '60px',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '60px 40px 0px 40px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '60px 16px 0 16px',
          gap: 0
        },
        '@media (max-width: 768px)': {
          padding: '60px 20px 0 20px',
          flexDirection: 'column',
          gap: '20px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          padding: '40px 16px 0px 16px'
        },
        '@media (max-width: 320px) ': {
          padding: '40px 10px 0 10px'
        }
      }}
      id="form-section"
    >
      <Box sx={{ flex: '1 1 50%' }}>
        <Typography
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '114px',
            fontWeight: '600',
            fontStyle: 'normal',
            lineHeight: '90%',
            letterSpacing: -4,
            color: 'primary.light',
            textTransform: 'uppercase',
            maxWidth: '550px',
            '@media (max-width: 992px) and (min-width: 769px)': {
              maxWidth: '100%',
              fontSize: '104px'
            },
            '@media (max-width: 768px) and (min-width: 481px)': {
              maxWidth: '100%',
              fontSize: '84px'
            },
            '@media (max-width: 480px) ': {
              fontSize: '64px'
            },
            '@media (max-width: 320px) ': {
              maxWidth: '290px'
            }
          }}
        >
          Drop us a line
        </Typography>
      </Box>

      <Box
        sx={{
          flex: '1 1 50%'
        }}
      >
        <ContactForm />
      </Box>
    </Box>
  )
}

export default Form
