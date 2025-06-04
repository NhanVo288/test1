import { Box, Typography, Grid, useTheme } from "@mui/material";

export default function CexDexSolution() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: { xs: 2, md: 6 },
        background: "#f5fff4",
        borderRadius: { xs: 3, md: 5 },
        boxShadow: "0 6px 32px 0 rgba(52,141,88,0.07)",
        display: "flex",
        alignItems: "center",
        maxWidth: 1200,
        maxHeight: 620,
        mx: "auto",
        mt: { xs: 3, md: 4 },
        mb: { xs: 3, md: 4 },
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Bên trái */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Martel", serif',
              fontWeight: 600,
              fontSize: { xs: 25, sm: 32, md: 40 },
              mb: 1,
              color: "#0c0c0c",
            }}
          >
            CEX & DEX
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Orbitron",sans-serif',
              fontWeight: 700,
              fontSize: { xs: 20, sm: 28, md: 44 },
              background: 'linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              opacity: 1,
              mb: 3,
              letterSpacing: 1,
              lineHeight: 1,
              display: "inline-block"
            }}
          >
            SOLUTION
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontSize: { xs: 15, sm: 17, md: 20 },
              color: "#222",
              fontFamily: '"Martel", serif',
            }}
          >
            Our team of experts leverages advanced trading algorithms and extensive liquidity networks to create optimal liquidity solutions. Through our comprehensive suite of liquidity tools and in-depth market knowledge, we empower projects to effectively manage risk and maximize returns from market.
          </Typography>
        </Grid>

        {/* Bên phải - Hình ảnh */}
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              borderRadius: 2,
              px: { xs: 0, sm: 2, md: 4 },
              py: { xs: 2, sm: 3, md: 6 },
              width: { xs: "100%", sm: 340, md: 540 },
              minWidth: { xs: "auto", md: 340 },
              minHeight: { xs: 140, md: 280 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Hình ảnh bạn upload, giữ nguyên height */}
            <img
              src="/logo/svg/cexdex.svg"
              alt="CEX DEX Solution"
              style={{
                width: "100%",
                maxWidth: 540,
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
