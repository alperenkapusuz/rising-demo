"use client";
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { COLOR } from '@/lib/constants/color';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { load } from '@/lib/utils/session-load-action';


const StickyAlert = () => {

  const [alertVisible, setAlertVisible] = useState(() => load('alertVisible'));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const alertState = sessionStorage.getItem('alertVisible');
      if (alertState !== null) {
        setAlertVisible(alertState === 'true');
      }
    }

  }, []);

  const handleClose = () => {
    setAlertVisible(false);
    if (typeof window !== "undefined") { sessionStorage.setItem('alertVisible', 'false');}
   
  };

    return (
      alertVisible  && (
        <Container maxWidth="lg" sx={{ position: "sticky", top: 0, zIndex: 999 }}>
          <Alert
            icon={false}
            action={
              <IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
                <CloseIcon fontSize="inherit" sx={{ color: COLOR.secondary }} />
              </IconButton>
            }
            sx={{
              bgcolor: COLOR.message,
              fontSize: "14px",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "500", fontSize: "14px", color: "black" }}>
              Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card.{" "}
              <Link href={"/"} style={{ color: "black" }}>
                {" "}
                Start Free Trial{" "}
              </Link>
            </Typography>
          </Alert>
        </Container>
      )
    );
};

export default StickyAlert;
