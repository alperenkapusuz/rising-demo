'use client';
import { Hanken_Grotesk } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const HKGrotesk = Hanken_Grotesk({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: HKGrotesk.style.fontFamily,
  },
});

export default theme;
