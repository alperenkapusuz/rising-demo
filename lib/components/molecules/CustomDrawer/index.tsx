import { COLOR } from '@/lib/constants/color';
import { Box, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import OfferMessage from '../../atoms/OfferMessage';
import CustomModal from '../../atoms/CustomModal';
import { useRouter } from 'next/navigation';
import { deleteToken } from '@/lib/utils/token-action';
import WebDrawer from './components/WebDrawer';
import MobileDrawer from './components/MobileDrawer';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const DrawerData = [
  {
    icon: (
      <HomeRoundedIcon
        sx={{
          fontSize: '30px',
          transition: 'color 0.3s ease',
        }}
      />
    ),
    href: '/',
  },
  {
    icon: (
      <PaymentRoundedIcon
        sx={{
          fontSize: '30px',
          transition: 'color 0.3s ease',
        }}
      />
    ),
    href: '/payment',
  },
  {
    icon: (
      <PersonRoundedIcon
        sx={{
          fontSize: '30px',
          transition: 'color 0.3s ease',
        }}
      />
    ),
    href: '/account',
  },
];

const CustomDrawer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const matches = useMediaQuery('(max-width:768px)', { noSsr: false });

  const [exitModal, setExitModal] = useState(false);

  const handleExit = (exit: boolean) => {
    setExitModal(exit);
  };

  const handleLogout = () => {
    router.push('/login/');
    deleteToken();
  };

  const handleExitClose = () => {
    handleExit(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex' }}>
        {matches ? (
          <MobileDrawer exit={exitModal} setExit={handleExit} data={DrawerData} />
        ) : (
          <WebDrawer exit={exitModal} setExit={handleExit} data={DrawerData} />
        )}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
            backgroundColor: COLOR.bg_default,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <OfferMessage />
          {children}
        </Box>
      </Box>
      <CustomModal
        modalType="WARNING"
        title="Are you sure ?"
        description="Are you sure you want to log out?"
        open={exitModal}
        handleClose={handleExitClose}
        handleAction={handleLogout}
        buttonText="Exit"
      />
    </React.Fragment>
  );
};

export default CustomDrawer;
