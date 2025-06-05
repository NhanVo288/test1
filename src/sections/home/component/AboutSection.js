import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AboutUsSection() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 4, sm: 6, md: 8 },
        px: { xs: 1.5, sm: 3, md: 2 },
      }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: 500,
          fontSize: { xs: 28, sm: 36, md: 54 },
          mb: { xs: 2, md: 3 },
          fontFamily: '"Martel", serif',
        }}
      >
        About Us
      </Typography>

      <Typography
        variant="h6"
        align="center"
        sx={{
          maxWidth: { xs: '100%', sm: 600, md: 900 },
          mx: 'auto',
          mb: { xs: 1.5, md: 2 },
          fontWeight: 400,
          fontSize: { xs: 15, sm: 18, md: 24 },
          lineHeight: { xs: 1.5, md: 1.6 },
        }}
      >
        Founded in 2018, SRLabs is a{' '}
        <Box component="span" sx={{ color: '#51B949', fontWeight: 600, display: 'inline' }}>
          pioneering venture capital fund
        </Box>{' '}
        focused on Web3. We take pride in empowering leading crypto companies and networks to thrive.
      </Typography>

      <Typography
        variant="h6"
        align="center"
        sx={{
          maxWidth: { xs: '100%', sm: 600, md: 900 },
          mx: 'auto',
          mb: { xs: 2, md: 4 },
          fontWeight: 400,
          fontSize: { xs: 15, sm: 18, md: 24 },
          lineHeight: { xs: 1.5, md: 1.6 },
        }}
      >
        With a track record of collaborating with exceptional teams, deep crypto market expertise, and global networks of partners, we are{' '}
        <Box component="span" sx={{ color: '#51B949', fontWeight: 600, display: 'inline' }}>
          committed to building lasting value and partnering
        </Box>
        {' '}with founders to conquer this exciting market.
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/about-us"
        sx={{
          background: '#181818',
          color: '#fff',
          px: { xs: 2, sm: 3 },
          py: { xs: 0.5, sm: 1 },
          borderRadius: 1,
          fontWeight: 400,
          fontSize: { xs: 14, sm: 16 },
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': { background: '#333' },
        }}
      >
        Explore More
      </Button>
    </Box>
  );
}
