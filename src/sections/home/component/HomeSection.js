import { Box, Typography } from '@mui/material';
import { m } from 'framer-motion';

function HomeSection() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        pt: { xs: '56px', sm: '64px', md: '72px' }, // Responsive top padding
        px: { xs: 2, sm: 4, md: 0 }, // Padding X cho mobile
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Martel", serif',
          color: 'black',
          width: 'auto',
          fontSize: { xs: '28px', sm: '36px', md: '50px' }, // Responsive font
          fontWeight: 600,
          letterSpacing: 0,
          lineHeight: { xs: 1.15, sm: 1.18, md: 1.2 },
          textAlign: 'center',
        }}
      >
        Invest - Incubate - Provide Liquidity
      </Typography>

      <m.div
        initial={{ scale: 0.01, opacity: 0.1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Orbitron", sans-serif',
            fontWeight: 'bold',
            fontSize: { xs: '22px', sm: '30px', md: '46.81px' }, // Responsive font
            lineHeight: { xs: '36px', sm: '48px', md: '73.7px' },
            letterSpacing: 0,
            width: 'auto',
            textAlign: 'center',
            textTransform: 'uppercase',
            background: 'linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            opacity: 1,
            mx: 'auto',
            mt: { xs: 2.5, sm: 3, md: 5 },
            mb: { xs: 2, sm: 2.5, md: 0 },
          }}
        >
          WE EMPOWER WEB3 PROJECTS TO THRIVE
        </Typography>
      </m.div>
    </Box>
  );
}

export default HomeSection;
