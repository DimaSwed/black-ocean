import React, { FC } from 'react'
import { Typography } from '@mui/material'

interface HeaderListMenuProps {
  customStyles?: React.CSSProperties
  onClick?: () => void
}

const HeaderListMenu: FC<HeaderListMenuProps> = ({ customStyles, onClick }) => {
  const sections = [
    { name: 'About', id: 'about-section' },
    { name: 'Services', id: 'services-section' },
    { name: 'Why We', id: 'why-we-section' },
    { name: 'Bridgify', id: 'bridgify-section' }
  ]

  return (
    <>
      {sections.map((section) => (
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
