import { Box, Typography, Stack } from '@mui/material'

interface TestimonialProps {
  name: string
  position: string
  image: string
  tasks: string[]
  feedback: string
}

export const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  position,
  image,
  tasks,
  feedback
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        borderTop: '1px solid #FFFFFF33',
        padding: '15px 0 0 0',
        '@media (max-width:768px)': { flexDirection: 'column', gap: '40px' }
      }}
    >
      {/* Блок задач */}
      <Stack
        sx={{
          flex: 1,
          gap: '10px',
          '@media (max-width:992px)': { flex: '1 1 50%' },
          '@media (max-width:768px)': { order: '1' }
        }}
      >
        {tasks.map((task, index) => (
          <Typography variant="subtitle1" key={index} sx={{ color: 'success.main' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#F2F2F2',
                display: 'inline-block',
                marginRight: '10px'
              }}
            />
            {task}
          </Typography>
        ))}
      </Stack>

      {/* Блок информации */}
      <Box sx={{ flex: 2, '@media (max-width:992px)': { flex: '1 1 50%' } }}>
        <Stack
          direction="row"
          alignItems="center"
          gap={'20px'}
          sx={{
            mb: '40px',
            '@media (max-width:768px)': { mb: '20px' }
          }}
        >
          <Box component={'img'} src={image} sx={{ width: '80px', height: '80px' }} />
          <Box>
            <Typography variant="h4" sx={{ color: 'primary.light', mb: '5px' }}>
              {name}
            </Typography>
            <Typography variant="subtitle2" sx={{ lineHeight: '130%', color: 'primary.main' }}>
              {position}
            </Typography>
          </Box>
        </Stack>
        <Typography
          variant="body1"
          sx={{
            color: 'primary.main',
            '@media (max-width:1280px)': { maxWidth: '750px' },
            '@media (max-width:992px)': { maxWidth: '480px' },
            '@media (max-width:768px)': { maxWidth: '100%' },
            '@media (max-width:480px)': { fontSize: '24px' }
          }}
        >
          {feedback}
        </Typography>
      </Box>
    </Box>
  )
}
