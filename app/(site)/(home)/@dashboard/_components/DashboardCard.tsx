"use client";
import { useGetInfo } from "@/lib/api/panelQueryFns";
import CustomCard from "@/lib/components/atoms/CustomCard";
import { ICard } from "@/lib/interface/panel/panel.response.interface";
import { Container, Grid } from "@mui/material";
import React from "react";

const DashboardCard = () => {
  const query = useGetInfo();

  const cardData: Array<ICard> = [
    {
      title: "Subscription expires on",
      value: query.data?.expireTime,
      bgColor: "blue",
      fontWeight: "medium",
    },
    {
      title: "Last charge",
      value: (
        <>
          {query.data?.lastChargeAmount}{" "}
          <span style={{ fontSize: "15px" }}>{query.data?.lastCharge}</span>
        </>
      ),
      bgColor: "gray",
      fontWeight: "medium",
    },
    {
      title: "Total Usage Data",
      value: query.data?.totalDataUsage,
      bgColor: "blue",
      fontWeight: "bold",
    },
    {
      title: "Subscription expires on",
      value: query.data?.dailyUsage,
      bgColor: "blue",
      fontWeight: "bold",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container  spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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
