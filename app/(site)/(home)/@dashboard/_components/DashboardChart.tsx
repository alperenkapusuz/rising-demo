"use client"
import GBChartByDays from "@/lib/components/molecules/GBChartByDays";
import { COLOR } from "@/lib/constants/color";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const DashboardChart = () => {

  const data = [2, 1, 4, 5, 5, 2, 10];

  return (
    <Container maxWidth="lg" sx={{ marginTop: "55px" }}>
      <Box
        sx={{
            paddingY: "20px",
            paddingX: "16px",
            backgroundColor: COLOR.bg_secondary,
            borderRadius: "16px",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>Data usage per network</Typography>
        <GBChartByDays gbData={data} />
      </Box>
    </Container>
  );
};

export default DashboardChart;
