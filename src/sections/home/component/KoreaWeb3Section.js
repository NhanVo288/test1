import { Box, Typography, Grid } from '@mui/material';

export default function KoreaInsiderSection() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1200,
        mx: 'auto',
        borderRadius: '32px',
        zIndex: 0,
        py: { xs: 3, md: 5 },
        px: { xs: 1, md: 6 },  
        boxShadow: '0 6px 24px 0 rgba(100,180,100,0.04)',
        mt: 4,
        mb: 4,
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        {/* Left: Text */}
        <Grid item xs={12} md={7}>
          <Typography
            sx={{
              fontFamily: '"Martel", serif',
              fontWeight: 600,
              fontSize: { xs: 24, md: 40 },  
              mb: { xs: 1, md: 1.5 },        
              color: '#212121',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Korea Web3:
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Orbitron", monospace, Arial',
              fontWeight: 600,
              fontSize: { xs: 17, md: 33 },       
              lineHeight: { xs: 1.3, md: '58.3px' },
              letterSpacing: 0,
              mb: { xs: 1.5, md: 3 },
              background: 'linear-gradient(90deg, #164732 0%, #51B949 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              display: 'inline-block',
              textAlign: { xs: 'center', md: 'left' },
              width: '100%',
            }}
          >
            SRLABS’ “INSIDER” ADVANTAGE
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 14, md: 20 },   
              color: '#222',
              fontFamily: '"Martel", serif',
              lineHeight: { xs: 1.5, md: 1.7 },
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              textAlign: { xs: 'center', md: 'left' },
              px: { xs: 0.5, md: 0 },   
            }}
          >
            SRLabs – Pioneering Web3 in Korea since 2018. With an impressive portfolio, strong strategic partnerships, and deep-rooted experience, we are your gateway to Web3 success in the Korean market.
          </Typography>
        </Grid>
        {/* Right: Image */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
            mt: { xs: 2, md: 0 },  
          }}
        >
          <Box
            component="img"
            src="/logo/korea.png"
            alt="SRLabs Korea Insider"
            sx={{
              width: { xs: '90%', md: "100%" }, 
              maxWidth: 360,
              borderRadius: '24px',
              boxShadow: '0 4px 18px 0 rgba(80,180,100,0.11)',
              objectFit: 'cover',
              aspectRatio: '1.7/1',
              mx: { xs: 'auto', md: 0 },  
              display: 'block',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
