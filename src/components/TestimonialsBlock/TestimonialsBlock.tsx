'use client'
import { FC, useState } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import ShowMore from '@/common/ui-kit/ShowMoreButton'
// import { testimonialsData } from './TestimonialData'
import { TestimonialCard } from './TestimonialCard'
import { useTranslation } from 'react-i18next'

const TestimonialsBlock: FC = () => {
  const { t } = useTranslation()

  const testimonialsKeys = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth']

  const [isExpanded, setIsExpanded] = useState(false)

  const buttonText = isExpanded ? t('testimonials less button') : t('testimonials show button')

  // const displayedTestimonials = isExpanded ? testimonialsData : testimonialsData.slice(0, 3)

  const displayedTestimonials = isExpanded ? testimonialsKeys : testimonialsKeys.slice(0, 3)

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
          mb: '40px'
        }}
      >
        {t('testimonials title')}
      </Typography>

      <Stack
        sx={{
          gap: '20px',
          mb: '50px',
          '@media (max-width: 480px)': {
            gap: '40px',
            mb: 0
          }
        }}
      >
        {displayedTestimonials.map((key) => {
          const testimonial = t(`testimonials description.${key}`, { returnObjects: true }) as {
            id: string
            name: string
            position: string
            image: string
            tasks: string[]
            feedback: string
          }
          return <TestimonialCard key={testimonial.id} {...testimonial} />
        })}
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '20px',
          '@media (max-width: 768px) and (min-width: 481px)': {
            mt: '0px'
          }
        }}
      >
        <ShowMore
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
          text={buttonText}
        />
      </Box>
    </Stack>
  )
}

export default TestimonialsBlock
