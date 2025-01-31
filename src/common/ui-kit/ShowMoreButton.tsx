import { FC } from 'react'
import { Box } from '@mui/material'

import { styled } from '@mui/system'

export const ShowMoreButton = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '58px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  cursor: 'pointer',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.light,
  fontFamily: 'Poppins',
  fontSize: '26px',
  fontWeight: '400',
  fontStyle: 'normal',
  lineHeight: '120%',
  textTransform: 'uppercase',
  borderRadius: '0px',
  border: 'transparent',
  outline: 'none',
  '&:hover': {
    backgroundColor: theme.palette.background.paper
  },
  '&:focus': {
    backgroundColor: theme.palette.background.paper
  },
  '&:active': {
    backgroundColor: theme.palette.background.paper
  }
}))

const ArrowIcon = styled('img')(() => ({
  width: '24px',
  height: '24px',
  transition: 'transform 0.2s ease-in-out',
  transform: 'rotate(0deg)'
}))

interface ShowMoreProps {
  isExpanded: boolean
  onClick: () => void
  text: string
}

const ShowMore: FC<ShowMoreProps> = ({ isExpanded, onClick, text }) => {
  return (
    <ShowMoreButton onClick={onClick}>
      {text}
      <ArrowIcon
        src="/icons/icon-arrow down-white.svg"
        alt="Arrow Icon"
        style={{
          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
      />
    </ShowMoreButton>
  )
}

export default ShowMore
