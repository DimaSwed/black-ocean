import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import i18next from 'i18next'

interface LanguageSwitcherProps {
  lang: string
  onChangeLang: (lang: string) => void
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ lang, onChangeLang }) => {
  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language)
    onChangeLang(language)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: 'primary.main'
      }}
    >
      <Typography
        variant="button"
        // onClick={() => onChangeLang('eng')}
        onClick={() => changeLanguage('eng')}
        color={lang === 'eng' ? 'primary.light' : 'primary.main'}
        border="none"
        sx={{ backgroundColor: 'transparent' }}
      >
        ENG
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: 'primary.main',
          '@media (max-width:768px)': { fontSize: '34px', fontWeight: 600 }
        }}
      >
        /
      </Typography>
      <Typography
        variant="button"
        // onClick={() => onChangeLang('cs')}
        onClick={() => changeLanguage('cs')}
        color={lang === 'cs' ? 'primary.light' : 'primary.main'}
        border="none"
        sx={{
          backgroundColor: 'transparent'
        }}
      >
        CS
      </Typography>
    </Box>
  )
}
