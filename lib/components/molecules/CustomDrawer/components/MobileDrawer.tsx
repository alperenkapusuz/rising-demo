"use client";
import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { COLOR } from "@/lib/constants/color";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";
import { PUBLIC_URL } from "@/lib/config/env";
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
  exit: boolean;
  setExit: (value: boolean) => void;
  data: {
    icon: React.ReactNode;
    href: string;
  }[]
};

const MobileDrawer = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const handleExitOpen = () => {
    props.setExit(true);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <IconButton onClick={() => router.push("/")}>
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
      </Box>
      <List sx={{ paddingTop: "15px" }}>
        {props.data.map((item, index) => (
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
    </Box>
  );

  return (
    <React.Fragment>
      <IconButton  sx={{ position: "absolute", top: 10, right:10, zIndex: 999 }} onClick={toggleDrawer(true)}>
      <MenuIcon />
      </IconButton>
      <Drawer anchor={"top"} open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default MobileDrawer;
