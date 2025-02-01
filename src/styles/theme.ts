'use client'
import { createTheme, ThemeOptions } from '@mui/material/styles'

const commonSettings: ThemeOptions = {
  breakpoints: { values: { xs: 320, sm: 480, md: 992, lg: 1280, xl: 1440 } }
}

const lightTheme = createTheme({
  ...commonSettings,
  typography: {
    fontFamily: '"Open Sans", "Helvetica Neue", "SF Pro Display", "Roboto", "Inter", sans-serif',
    body1: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '120%',
      transition: 'font-size 2s ease',
      '@media (max-width:480px)': { fontSize: '20px' }
    },
    body2: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '110%',
      fontStyle: 'normal'
    },
    button: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '110%',
      fontStyle: 'normal',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'font-size 2s ease',
      '@media (max-width:768px)': { fontSize: '34px' },
      '@media (max-width:320px)': { fontSize: '28px' }
    },
    subtitle1: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '16px',
      fontWeight: '600',
      fontStyle: 'normal',
      lineHeight: '125%',
      transition: 'font-size 2s ease'
      // '@media (max-width:1440px)': { fontSize: '15px' },
      // '@media (max-width:720px)': { fontSize: '14px' }
    },
    subtitle2: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '110%',
      transition: 'font-size 2s ease'
      // '@media (max-width:1440px)': { fontSize: '13px' },
      // '@media (max-width:720px)': { fontSize: '12px' }
    },
    h1: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '64px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '100%',
      textTransform: 'none',
      transition: 'font-size 2s ease',
      '@media (max-width:992px)': { fontSize: '54px' },
      '@media (max-width:768px)': { fontSize: '44px' },
      '@media (max-width:480px)': { fontSize: '32px' }
    },
    h2: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '34px',
      fontWeight: 600,
      fontStyle: 'normal',
      // lineHeight: '110%',
      textTransform: 'none',
      transition: 'font-size 2s ease'
      // '@media (max-width: 480px)': {
      //   fontSize: '36px'
      // }
    },
    h3: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '22px',
      fontWeight: 600,
      fontStyle: 'normal',
      // lineHeight: '110%',
      textTransform: 'none',
      transition: 'font-size 2s ease'
      // '@media (max-width:1440px)': { fontSize: '35px' },
      // '@media (max-width:720px)': { fontSize: '28px' },
      // '@media (max-width:500px)': { fontSize: '24px' }
    },
    h4: {
      fontSize: '18px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '120%',
      textTransform: 'none',
      transition: 'font-size 2s ease'
      // '@media (max-width:1440px)': { fontSize: '24px', lineHeight: '130%' },
      // '@media (max-width:1230px)': { fontSize: '22px', lineHeight: '130%' },
      // '@media (max-width:720px)': { fontSize: '20px', lineHeight: '130%' },
      // '@media (max-width:500px)': { fontSize: '18px', lineHeight: '130%' }
    }
    // h5: {
    //   fontFamily: 'Helvetica Neue',
    //   fontSize: '16px',
    //   fontWeight: '700',
    //   fontStyle: 'normal',
    //   lineHeight: '130%'
    // }
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#c3c3c3', // Серый (grey) +
      light: '#fff' // Белый (white) +
    },
    secondary: {
      main: '#505050' // Темно-серый (dark-grey) +
    },
    background: {
      default: '#070b30', // Фоновый цвет (bg) +
      paper: 'rgba(255, 255, 255, 0.2)' // Полупрозрачный белый (white-20) +
    },
    text: {
      primary: '#010418', // Текст основной (black) +
      secondary: '#070b30' // Темно-синий (dark-blue) +
    },
    success: {
      main: '#f2f2f2' // Светло-серый (light-grey) +
    },
    error: {
      main: '#FF0004' // Ошибка (red) +
    },
    divider: '#505050' // Линия темно-серый
  }
})

export { lightTheme }
