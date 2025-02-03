import HeroBlock from '@/components/HeroBlock/HeroBlock'
import ServicesBlock from '@/components/ServicesBlock/ServicesBlock'
import AboutBlock from '@/components/AboutBlock/AboutBlock'
import BrifgifyBlock from '@/components/BridgifyBlock/BrifgifyBlock'
import WhyBlock from '@/components/WhyBlock/WhyBlock'
import StepsBlock from '@/components/StepsBlock/StepsBlock'
import { Stack } from '@mui/material'
import NumbersBlock from '@/components/NumbersBlock/NumbersBlock'

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
      <AboutBlock />
      <BrifgifyBlock />
      <WhyBlock />
      <StepsBlock />
      <NumbersBlock />
    </Stack>
  )
}
