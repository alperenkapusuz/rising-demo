import { Box, Stack, Typography } from "@mui/material";
import React from "react";
//import LoginForm from './_components/LoginForm';
import Image from "next/image";
import { PUBLIC_URL } from "@/lib/config/env";
import LoginForm from "./_components/LoginForm";
//import { sharedMetadata } from '../../../shared-metadata';

export const metadata = {
  title: "Giriş Yap | Rising Panel",
  //...sharedMetadata.openGraph,
};

const page = () => {
  return (
    <React.Fragment>
      <Box sx={{m:1, position: "relative", height: "200px", width: "200px" }}>
        <Image
          src={`${PUBLIC_URL}/rising-logo.webp`}
          alt="rising-logo"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
      <Typography component="h1" variant="h5" mb={3}>
        Welcome
      </Typography>
      <LoginForm />
    </React.Fragment>
  );
};

export default page;
