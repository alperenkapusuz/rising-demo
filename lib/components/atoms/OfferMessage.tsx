import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { COLOR } from '@/lib/constants/color';

const StickyAlert = () => {
  return (
    <Container maxWidth="lg" sx={{ position: "sticky", top: 0, zIndex: 999 }}>
      <Alert
        icon={false}
        action={
          <IconButton aria-label="close" color="inherit" size="small">
            <CloseIcon fontSize="inherit" sx={{ color: COLOR.secondary }} />
          </IconButton>
        }
        sx={{
          bgcolor: COLOR.message,
          fontSize: "14px",
        }}
      >
        Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card.{" "}
        <Link href={"/"} style={{ color: "black" }}>
          {" "}
          Start Free Trial{" "}
        </Link>
      </Alert>
    </Container>
  );
};

export default StickyAlert;
