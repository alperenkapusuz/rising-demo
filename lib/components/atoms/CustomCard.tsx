import { COLOR } from "@/lib/constants/color";
import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  bgColor: "blue" | "gray";
  fontWeight: "medium" | "bold";
  title: string;
  value: ReactNode | undefined;
};

const CustomCard = (props: Props) => {
  return (
    <Box
      sx={{
        backgroundColor:
          props.bgColor == "blue" ? COLOR.card_primary : COLOR.card_secondary,
        borderRadius: "16px",
        paddingY: "24px",
        paddingLeft: "22px",
      }}
    >
      <Typography
        fontSize={"14px"}
        lineHeight={"20px"}
        mb={"8px"}
        color={COLOR.text_secondary}
        sx={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 1,
        }}
        fontWeight={props.fontWeight == "medium" ? "600" : "900"}
      >
        {props.title}
      </Typography>
      <Typography
        fontWeight={props.fontWeight == "medium" ? "500" : "900"}
        fontSize={"24px"}
        color={COLOR.text_secondary}
        sx={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 1,
        }}
        lineHeight={"36px"}
      >
        {props.value}
      </Typography>
    </Box>
  );
};

export default CustomCard;
