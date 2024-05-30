"use client";
import { useGetInfo } from "@/lib/api/panelQueryFns";
import CustomCard from "@/lib/components/atoms/CustomCard";
import { ICard } from "@/lib/interface/panel/panel.response.interface";
import { undefinedControl } from "@/lib/utils/undefined-control";
import {  Container, Grid, Skeleton } from "@mui/material";
import React from "react";

const DashboardCard = () => {
  const query = useGetInfo();
  const expireTime = undefinedControl(query.data?.expireTime)
  const lastChargeAmount = undefinedControl(query.data?.lastChargeAmount)
  const lastCharge = undefinedControl(query.data?.lastCharge)
  const totalDataUsage = parseInt(undefinedControl(query.data?.totalDataUsage)) > 1000 ? (parseInt(undefinedControl(query.data?.totalDataUsage)) / 1000).toFixed(3) : parseInt(undefinedControl(query.data?.totalDataUsage))
  const dailyUsage = parseInt(undefinedControl(query.data?.dailyUsage)) > 1000 ? (parseInt(undefinedControl(query.data?.dailyUsage)) / 1000).toFixed(3) : parseInt(undefinedControl(query.data?.dailyUsage))


  const cardData: Array<ICard> = [
    {
      title: "Subscription expires on",
      value: expireTime,
      bgColor: "blue",
      fontWeight: "medium",
    },
    {
      title: "Last charge",
      value: (
        <>
          {lastChargeAmount}{" "}
          <span style={{ fontSize: "15px" }}>{lastCharge}</span>
        </>
      ),
      bgColor: "gray",
      fontWeight: "medium",
    },
    {
      title: "Total Usage Data",
      value:`${totalDataUsage} GB` ,
      bgColor: "blue",
      fontWeight: "bold",
    },
    {
      title: "Subscription expires on",
      value:`${dailyUsage} GB`,
      bgColor: "blue",
      fontWeight: "bold",
    },
  ];

  if (query.isLoading)
    return (
      <Container maxWidth="lg" sx={{ marginTop: "60px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <Skeleton sx={{borderRadius:"16px"}}  variant="rounded" height={112} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );

  return (
    <Container maxWidth="lg" sx={{ marginTop: "60px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cardData.map((card, index) => (
          <Grid item xs={4} sm={4} md={3} key={index}>
            <CustomCard
              key={index}
              title={card.title}
              value={card.value}
              bgColor={card.bgColor}
              fontWeight={card.fontWeight}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardCard;
