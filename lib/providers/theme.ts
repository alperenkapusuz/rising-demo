'use client';
import { Hanken_Grotesk, IBM_Plex_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const HKGrotesk = Hanken_Grotesk({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const IBMPlexSans = IBM_Plex_Sans({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: HKGrotesk.style.fontFamily,
  },
});

export default theme;
