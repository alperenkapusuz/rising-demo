"use client"
import { Box } from "@mui/material";
import React from "react";
import Drawer from "@/lib/components/molecules/Drawer";

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
        <Drawer>{children}</Drawer>
      </Box>
    </React.Fragment>
  );
}