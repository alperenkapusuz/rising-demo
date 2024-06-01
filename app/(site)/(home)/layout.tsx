'use client';
import { Container, styled } from '@mui/material';
import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';
import { COLOR } from '@/lib/constants/color';

const CustomTab = styled((props: any) => <Tab disableRipple {...props} />)(() => ({
  textTransform: 'none',
  fontWeight: '500',
  color: COLOR.text,
  fontSize: '20px',
}));

const Layout = ({
  children,
  myProxies,
  dashboard,
}: {
  children: React.ReactNode;
  myProxies: React.ReactNode;
  dashboard: React.ReactNode;
}) => {
  const [value, setValue] = useState('2');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      {children}
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: `1px solid ${COLOR.border_primary}`,
            mt: 3,
            ml:2
          }}
        >
          <Container maxWidth="lg">
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <CustomTab label="My Proxies" value="1" />
              <CustomTab label="Dashboard" value="2" />
            </TabList>
          </Container>
        </Box>
        <TabPanel value="1">{myProxies}</TabPanel>
        <TabPanel value="2">{dashboard}</TabPanel>
      </TabContext>
    </React.Fragment>
  );
};

export default Layout;
