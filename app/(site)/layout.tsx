"use client"
import { Box } from "@mui/material";
import React from "react";
import CustomDrawer from "@/lib/components/molecules/CustomDrawer"

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <React.Fragment>
      <Box
        component={"main"}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        <CustomDrawer>{children}</CustomDrawer>
      </Box>
    </React.Fragment>
  );
}