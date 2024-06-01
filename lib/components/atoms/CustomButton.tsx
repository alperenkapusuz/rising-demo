'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 17,
  fontWeight: 500,
  padding: '6px 12px',
  lineHeight: 1.5,
  borderRadius: '3px',
  '&:hover': {
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
  color: 'white',
}));

const CustomButton = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default CustomButton;
