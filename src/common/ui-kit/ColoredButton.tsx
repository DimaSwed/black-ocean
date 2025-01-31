import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/system'

const StyledButton = styled(Button)(({ theme }) => ({
  maxWidth: '533px',
  width: '100%',
  height: '58px',
  borderRadius: '0px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.light,
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.background.paper
  }
}))

type ColoredButtonProps = ButtonProps & {
  children: React.ReactNode
}

const ColoredButton: React.FC<ColoredButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default ColoredButton
