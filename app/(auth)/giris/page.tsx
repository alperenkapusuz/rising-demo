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
    <Stack
      spacing={4}
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box sx={{ position: "relative", height: "200px", width: "200px" }}>
        <Image
          src={`${PUBLIC_URL}/rising-logo.webp`}
          alt="rising-logo"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
      <Stack spacing={2}>
        <Typography variant="h5" fontWeight={500} textAlign={"center"}>
          Hoş Geldiniz
        </Typography>
        <Typography variant="body1" textAlign={"center"}>
          Rising Panel
        </Typography>
      </Stack>
      <LoginForm />
    </Stack>
  );
};

export default page;
