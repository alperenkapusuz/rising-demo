import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import rising_logo from '@/public/rising-logo.webp'; 
import LoginForm from './_components/LoginForm';
import { sharedMetadata } from '@/shared-metadata';

export const metadata = {
  title: 'Login | Rising Panel',
  ...sharedMetadata.openGraph,
};

const page = () => {
  return (
    <React.Fragment>
      <Box sx={{ position: 'relative', height: '100px', width: '100px' }}>
        <Image
          src={rising_logo}
          alt="rising-logo"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>
      <Typography component="h1" variant="h5" mb={2}>
        Welcome
      </Typography>
      <LoginForm />
    </React.Fragment>
  );
};

export default page;
