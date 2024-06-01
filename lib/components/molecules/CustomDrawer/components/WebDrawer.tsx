'use client';
import React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { COLOR } from '@/lib/constants/color';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import { PUBLIC_URL } from '@/lib/config/env';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const drawerWidth = 100;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: COLOR.bg_default,
  padding: theme.spacing(0, 1.2),
  ...theme.mixins.toolbar,
}));

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${drawerWidth}px)`,
  backgroundColor: COLOR.bg_default,
  borderRight: `2px solid ${COLOR.border_primary}`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${drawerWidth}px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  position: 'relative',
  ...closedMixin(theme),
  '& .MuiDrawer-paper': closedMixin(theme),
}));

type Props = {
  exit: boolean;
  setExit: (value: boolean) => void;
  data: {
    icon: React.ReactNode;
    href: string;
  }[];
};

const WebDrawer = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleExitOpen = () => {
    props.setExit(true);
  };

  return (
    <Drawer variant="permanent" open={false}>
      <DrawerHeader
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '20px',
        }}
      >
        <IconButton onClick={() => router.push('/')}>
          <Image
            src={`${PUBLIC_URL}/rising-logo.webp`}
            alt="rising-logo"
            width={50}
            height={50}
            style={{
              objectFit: 'contain',
            }}
          />
        </IconButton>
      </DrawerHeader>
      <List sx={{ paddingTop: '15px' }}>
        {props.data.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              marginBottom: '15px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <IconButton
              sx={{
                width: '60px',
                height: '60px',
                borderRadius: '20px',
                backgroundColor: pathname === item.href ? COLOR.hover_bg : 'transparent',
                '& .MuiSvgIcon-root': {
                  color: pathname === item.href ? COLOR.hover : 'inherit',
                },
                '&:hover': {
                  backgroundColor: COLOR.hover_bg,
                  '& .MuiSvgIcon-root': {
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
        <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton
            onClick={handleExitOpen}
            sx={{
              width: '60px',
              height: '60px',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: COLOR.hover_bg_secondary,
                '& .MuiSvgIcon-root': {
                  color: COLOR.hover_secondary,
                },
              },
            }}
          >
            <LogoutIcon sx={{ fontSize: '30px' }} />
          </IconButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default WebDrawer;
