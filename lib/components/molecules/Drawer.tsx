"use client";
import React, { useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { COLOR } from "@/lib/constants/color";
import LogoutIcon from "@mui/icons-material/Logout";
import { deleteToken } from "@/lib/utils/token-action";
import CustomModal from "../atoms/CustomModal";
import { Container, IconButton } from "@mui/material";
import Image from "next/image";
import { PUBLIC_URL } from "@/lib/config/env";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import OfferMessage from "../atoms/OfferMessage";

const drawerWidth = 100;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: COLOR.bg_default,
  padding: theme.spacing(0, 1.2),
  ...theme.mixins.toolbar,
}));

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${drawerWidth}px)`,
  backgroundColor: COLOR.bg_default,
  borderRight: `2px solid ${COLOR.border_primary}`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${drawerWidth}px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  position: "relative",
  ...closedMixin(theme),
  "& .MuiDrawer-paper": closedMixin(theme),
}));

const DrawerData = [
  {
    icon: (
      <HomeRoundedIcon
        sx={{
          fontSize: "30px",
          transition: "color 0.3s ease",
        }}
      />
    ),
    href: "/",
  },
  {
    icon: (
      <PaymentRoundedIcon
        sx={{
          fontSize: "30px",
          transition: "color 0.3s ease",
        }}
      />
    ),
    href: "/payment",
  },
  {
    icon: (
      <PersonRoundedIcon
        sx={{
          fontSize: "30px",
          transition: "color 0.3s ease",
        }}
      />
    ),
    href: "/account",
  },
];

export default function MiniDrawer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const [exitModal, setExitModal] = useState(false);

  const handleLogout = () => {
    router.push("/giris/");
    deleteToken();
  };

  const handleExitOpen = () => {
    setExitModal(true);
  };

  const handleExitClose = () => {
    setExitModal(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" open={false}>
          <DrawerHeader
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <IconButton>
              <Image
                src={`${PUBLIC_URL}/rising-logo.webp`}
                alt="rising-logo"
                width={50}
                height={50}
                style={{
                  objectFit: "contain",
                }}
              />
            </IconButton>
          </DrawerHeader>
          <List sx={{ paddingTop: "15px" }}>
            {DrawerData.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  marginBottom: "15px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "20px",
                    backgroundColor:
                      pathname === item.href ? COLOR.hover_bg : "transparent",
                    "& .MuiSvgIcon-root": {
                      color: pathname === item.href ? COLOR.hover : "inherit",
                    },
                    "&:hover": {
                      backgroundColor: COLOR.hover_bg,
                      "& .MuiSvgIcon-root": {
                        color: COLOR.hover,
                      },
                    },
                  }}
                  onClick={() => router.push(item.href)}
                >
                  {item.icon}
                </IconButton>
              </ListItem>
            ))}
            <ListItem
              disablePadding
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <IconButton
                onClick={handleExitOpen}
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: COLOR.hover_bg_secondary,
                    "& .MuiSvgIcon-root": {
                      color: COLOR.hover_secondary,
                    },
                  },
                }}
              >
                <LogoutIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
            backgroundColor: COLOR.bg_default,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <OfferMessage />
          {children}
        </Box>
      </Box>
      <CustomModal
        modalType="WARNING"
        title="Emin misiniz ?"
        description="Çıkış yapmak istediğinize emin misiniz?"
        open={exitModal}
        handleClose={handleExitClose}
        handleAction={handleLogout}
        buttonText="Çıkış Yap"
      />
    </React.Fragment>
  );
}
