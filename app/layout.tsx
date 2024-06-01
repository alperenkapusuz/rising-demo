import { COLOR } from '@/lib/constants/color';
import Providers from '@/lib/providers/Providers';
import { Box, CssBaseline } from '@mui/material';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box sx={{ minHeight: '100vh', width: '100%', backgroundColor: COLOR.bg_default }}>
            <CssBaseline />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
