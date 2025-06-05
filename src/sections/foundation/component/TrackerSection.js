import { Box, Typography, Grid } from '@mui/material';
import CountUpNumber from 'src/sections/CountUpNumber';

export default function TrackSection() {
  return (
    <Box
      sx={{
        width: '100%',           // Sửa lại chỗ này!
        overflowX: 'hidden',     // Tùy chọn
        py: { xs: 4, md: 6 },
        background: 'transparent',
      }}
    >
      <Typography
        align="center"
        sx={{
          fontFamily: '"Martel", serif',
          fontWeight: 500,
          fontSize: { xs: 24, md: 40 }, 
          mb: { xs: 2, md: 4 },
          lineHeight: 1.5, 
          display: 'block'
        }}
      >
        <Box component="span" sx={{ color: '#51B949', fontWeight: 700 }}>
          A solid
        </Box>{" "}
        launchpad, empowering founders to turn
        <br />
        their ideas into{" "}
        <Box component="span" sx={{ color: '#51B949', fontWeight: 700 }}>
          successful projects.
        </Box>
      </Typography>

      <Grid
        justifyContent="center"
        spacing={{ xs: 3, md: 1 }} 
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: 1100 },
          mx: 'auto',
          mt: { xs: 4, md: 10 }, 
          px: { xs: 1, md: 2 },  
        }}
      >
        <Grid item xs={12} md={4} sx={{ textAlign: 'center', mt: { xs: 3, md: 0 } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
            }}
          >
            <Typography
              component="span"
              sx={{
                color: '#51B949',
                fontWeight: 700,
                fontFamily: '"Martel", serif',
                fontSize: { xs: 40, md: 56 },
                letterSpacing: 1,
                lineHeight: 1.1,
                mr: 1,
                display: 'inline-block',
              }}
            >
              <CountUpNumber value={100}  duration={1500}/>
            </Typography>
            <Typography
              component="span"
              sx={{
                color: '#51B949',
                fontWeight: 600,
                fontFamily: '"Martel", serif',
                fontSize: { xs: 40, md: 56 },
                letterSpacing: 1,
                lineHeight: 1.1,
                display: 'inline-block',
              }}
            >
              +
            </Typography>
          </Box>
          <Typography sx={{ mt: 1, fontSize: { xs: 16, md: 18 } }}>
            Projects Incubated
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
            }}
          >
            <Typography
              component="span"
              sx={{
                color: '#51B949',
                fontWeight: 700,
                fontFamily: '"Martel", serif',
                fontSize: { xs: 40, md: 56 },
                letterSpacing: 1,
                lineHeight: 1.1,
                mr: 1,
                display: 'inline-block',
              }}
            >
              <CountUpNumber value={12} duration={1500} />
            </Typography>
            <Typography
              component="span"
              sx={{
                color: '#51B949',
                fontWeight: 600,
                fontFamily: '"Martel", serif',
                fontSize: { xs: 40, md: 56 },
                letterSpacing: 1,
                lineHeight: 1.1,
                display: 'inline-block',
              }}
            >
              M+
            </Typography>
          </Box>
          <Typography sx={{ mt: 1, fontSize: { xs: 16, md: 18 } }}>
            Invested
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
