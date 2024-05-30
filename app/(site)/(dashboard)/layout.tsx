"use client";
import { Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";

const Layout = ({
  children,
  myProxies,
  dashboard,
}: {
  children: React.ReactNode;
  myProxies: React.ReactNode;
  dashboard: React.ReactNode;
}) => {
  const [value, setValue] = useState("2");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      {children}
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="My Proxies" value="1" />
            <Tab label="Dashboard" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ border: "1px solid red" }}>
          {myProxies}
        </TabPanel>
        <TabPanel value="2" style={{ border: "1px solid red" }}>
          {dashboard}
        </TabPanel>
      </TabContext>
    </React.Fragment>
  );
};

export default Layout;
