import HeroBlock from '@/components/HeroBlock/HeroBlock'
import ServicesBlock from '@/components/ServicesBlock/ServicesBlock'
import { Stack } from '@mui/material'

export const metadata = {
  title: 'BLACK OCEAN',
  description: 'BLACK OCEAN',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function Home() {
  return (
    <Stack
      component="main"
      sx={{
        backgroundColor: 'background.default',
        overflow: 'hidden',
        fontFamily: 'Open Sans, sans-serif',
        color: 'primary.light'
      }}
    >
      <HeroBlock />
      <ServicesBlock />
    </Stack>
  )
}
