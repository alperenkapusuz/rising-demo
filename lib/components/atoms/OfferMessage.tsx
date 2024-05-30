import { Alert } from "@mui/material";
import React from "react";
import Link from 'next/link'

const OfferMessage = () => {
  return (
    <Alert sx={{bgcolor: "rgba(120, 182, 255, 0.3)"}}>
      Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card. <Link href={"/"}> Start Free Trial </Link>
    </Alert>
  );
};

export default OfferMessage;
