import React, { FC } from 'react'
import { Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface HeaderListMenuProps {
  customStyles?: React.CSSProperties
  onClick?: () => void
}

const HeaderListMenu: FC<HeaderListMenuProps> = ({ customStyles, onClick }) => {
  const { t } = useTranslation()
  const isLaptop = useMediaQuery(`(max-width: 768px)`)

  const sections = [
    { name: t('about'), id: 'about-section' },
    { name: t('services'), id: 'services-section' },
    { name: t('bridgify'), id: 'bridgify-section' },
    { name: t('whyWe'), id: 'why-we-section' }
  ]

  const sectionsMobile = [
    { name: t('about'), id: 'about-section' },
    { name: t('products'), id: 'services-section' },
    { name: t('whyWe'), id: 'why-we-section' },
    { name: t('contacts'), id: 'contacts-section' }
  ]

  return (
    <>
      {(isLaptop ? sectionsMobile : sections).map((section) => (
        <Typography
          key={section.name}
          component="a"
          onClick={onClick}
          href={`#${section.id}`}
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '110%',
            color: 'success.main',
            transition: 'color 0.2s ease-in-out',
            borderBottom: '2px solid transparent',
            '&:hover': {
              borderBottom: '2px solid white'
            },
            '@media (max-width:768px)': {
              fontSize: '44px'
            },
            '@media (max-width:320px)': {
              fontSize: '34px'
            },
            ...customStyles
          }}
        >
          {section.name}
        </Typography>
      ))}
    </>
  )
}

export default HeaderListMenu
