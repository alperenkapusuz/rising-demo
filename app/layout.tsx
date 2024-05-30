import Providers from "@/lib/providers/Providers";
import { Box, CssBaseline } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box sx={{ minHeight: "100vh", width: "100%" }}>
            <CssBaseline />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
