import { Box, Container, CssBaseline, Grid } from '@mui/material';
import React from 'react';

export default function ApplicantLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 4,
            borderRadius: 3,
            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
