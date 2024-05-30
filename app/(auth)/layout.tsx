import { Grid } from '@mui/material';
import React from 'react';

export default function ApplicantLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Grid container component="main" height={'100vh'} position={'relative'}>
        <Grid item>
          {children}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}