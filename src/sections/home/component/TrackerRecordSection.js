import { Box, Typography, Grid } from '@mui/material';
import CountUpNumber from 'src/sections/CountUpNumber';

export default function TrackRecordSection() {
  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 4, md: 6 },
        background: 'transparent',
      }}
    >
      {/* Title */}
      <Typography
        align="center"
        sx={{
          fontFamily: '"Martel", serif',
          fontWeight: 500,
          fontSize: { xs: 32, md: 48 },
          mb: { xs: 2, md: 4 },
        }}
      >
        Our Track Record
      </Typography>

      <Grid
        container
        justifyContent="center"
        spacing={1}
        sx={{ maxWidth: 1100, mx: 'auto' }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            textAlign: 'center',
            mb: { xs: 3, md: 0 }, 
          }}
        >
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
              <CountUpNumber value={100} duration={1000} />
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
          <Typography sx={{ mt: 1, fontSize: { xs: 15, md: 18 } }}>
            Projects Incubated
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            textAlign: 'center',
            mb: { xs: 3, md: 0 }, // Thêm khoảng cách cho mobile
          }}
        >
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
              <CountUpNumber value={50} duration={1000} />
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
          <Typography sx={{ mt: 1, fontSize: { xs: 15, md: 18 } }}>
            Assets Under Management
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            textAlign: 'center',
            mb: { xs: 0, md: 0 }, // Cột cuối không cần margin dưới
          }}
        >
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
              x
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
              <CountUpNumber value={3} duration={1000} />
            </Typography>
          </Box>
          <Typography sx={{ mt: 1, fontSize: { xs: 15, md: 18 } }}>
            Typical organic volume
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
