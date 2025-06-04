import { Box, Stack, Typography, Grid } from "@mui/material";

import CountUpNumber from 'src/sections/CountUpNumber';
// Đờng dẫn SVG (hoặc import nếu để trong src/assets)
const svgFiles = [
  "/logo/svg/Group.svg",     // 0
  "/logo/svg/ss.svg",        // 1
  "/logo/svg/rr.svg",        // 2
  "/logo/svg/liquidity.svg", // 3
];

export default function SRTitleBanner() {
  return (
    <Box sx={{ py: { xs: 3, md: 6 }, px: { xs: 1, md: 2 } }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ mb: { xs: 2, md: 3 }, flexWrap: 'wrap' }}
        spacing={0}
      >
        {/* Group.svg */}
        <img
          src={svgFiles[0]}
          alt="logo"
          style={{
            height: "min(28vw,172px)",
            width: "min(28vw,172px)",
            minWidth: 54,
            minHeight: 54,
            marginRight: 10,
            marginBottom: 6,
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        {/* ss.svg */}
        <img
          src={svgFiles[1]}
          alt="ss"
          style={{
            height: "min(13vw,79px)",
            width: "auto",
            marginRight: 4,
            marginBottom: 6,
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        {/* rr.svg */}
        <img
          src={svgFiles[2]}
          alt="rr"
          style={{
            height: "min(13vw,79px)",
            width: "auto",
            marginRight: 14,
            marginBottom: 6,
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        {/* liquidity.svg */}
        <img
          src={svgFiles[3]}
          alt="liquidity"
          style={{
            height: "min(14vw,84px)",
            width: "auto",
            display: "inline-block",
            marginBottom: 6,
            verticalAlign: "middle",
          }}
        />
      </Stack>

      {/* Subtext + Metrics */}
      <Typography
        sx={{
          color: "#51B259",
          fontWeight: 600,
          fontSize: { xs: 18, sm: 22, md: 30 },
          textAlign: "center",
          fontFamily: "'Martel', serif",
          mt: { xs: 2, md: 8 }
        }}
      >
        Professional and comprehensive liquidity
      </Typography>
      <Typography
        sx={{
          color: "#222",
          fontSize: { xs: 18, sm: 22, md: 30 },
          fontWeight: 600,
          textAlign: "center",
          fontFamily: "'Martel', serif",
          mb: { xs: 1, md: 2 },
        }}
      >
        solutions, meeting all the needs of Web3 projects.
      </Typography>

      <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{
            mt: 10,
            mx: "auto",
            maxWidth: 800,
            width: "100%",             // THÊM width 100%
            display: "flex",           // BẮT BUỘC display flex
            justifyContent: "center",  // Đảm bảo căn giữa Grid item
          }}
        >

        <Grid item xs={12} sm={4}>
          <Typography
            sx={{
              color: "#49b25d",
              fontSize: { xs: 36, sm: 50, md: 70 },
              fontWeight: 700,
              fontFamily: "'Martel', serif",
              letterSpacing: 2,
              textAlign: "center",
            }}
          >
            <CountUpNumber value={90} duration={1500} /> +
          </Typography>
          <Typography sx={{ mt: 1, color: "#222", textAlign: "center", fontFamily: "'Martel', serif", fontSize: { xs: 15, md: 20 } }}>
            CEX and DEX
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            sx={{
              color: "#49b25d",
              fontSize: { xs: 36, sm: 50, md: 70 },
              fontWeight: 700,
              fontFamily: "'Martel', serif",
              letterSpacing: 2,
              textAlign: "center",
            }}
          >
            <CountUpNumber value={1} duration={1500} /> M+
          </Typography>
          <Typography sx={{ mt: 1, color: "#222", textAlign: "center", fontFamily: "'Martel', serif", fontSize: { xs: 15, md: 20 } }}>
            Engaged Holders
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            sx={{
              color: "#49b25d",
              fontSize: { xs: 36, sm: 50, md: 70 },
              fontWeight: 700,
              fontFamily: "'Martel', serif",
              letterSpacing: 2,
              textAlign: "center",
            }}
          >
            x <CountUpNumber value={3} duration={1500} />
          </Typography>
          <Typography sx={{ mt: 1, color: "#222", textAlign: "center", fontFamily: "'Martel', serif", fontSize: { xs: 15, md: 20 } }}>
            Typical Organic Volume
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
