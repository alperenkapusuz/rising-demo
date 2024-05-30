"use client";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Providers = (props: { children: React.ReactNode }) => {
  queryClient.setDefaultOptions({
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </AppRouterCacheProvider>
    </QueryClientProvider>
  );
};

export default Providers;
