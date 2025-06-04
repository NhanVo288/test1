import { Box, Stack, Typography, Grid } from "@mui/material";

// Đường dẫn SVG (hoặc import nếu để trong src/assets)
const svgFiles = [
  "/logo/svg/Group.svg",     // 0
  "/logo/svg/ss.svg",        // 1
  "/logo/svg/rr.svg",        // 2
  "/logo/svg/liquidity.svg", // 3
];

export default function SRTitleBanner() {
  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 3, flexWrap: 'wrap' }}
      >
        {/* Group.svg */}
        <img
          src={svgFiles[0]}
          alt="logo"
          style={{
            height: "172px",
            width: "172px",
            marginRight: 18,
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        {/* ss.svg */}
        <img
          src={svgFiles[1]}
          alt="ss"
          style={{
            height: 79,
            width: "auto",
            marginRight: 8, // sát bên rr, để nhỏ lại
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        {/* rr.svg */}
        <img
          src={svgFiles[2]}
          alt="rr"
          style={{
            height: 79,
            width: "auto",
            marginRight: 24, // cách liquidity.svg cho đều
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        {/* liquidity.svg */}
        <img
          src={svgFiles[3]}
          alt="liquidity"
          style={{
            height: 84,
            width: "auto",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
      </Stack>

      {/* Subtext + Metrics (giữ nguyên) */}
      <Typography
        sx={{
          color: "#51B259",
          fontWeight: 600,
          fontSize: 30,
          textAlign: "center",
          fontFamily: "'Martel', serif",
          mt: 8
        }}
      >
        Professional and comprehensive liquidity
      </Typography>
      <Typography
        sx={{
          color: "#222",
          fontSize: 30,
          fontWeight: 600,
          textAlign: "center",
          fontFamily: "'Martel', serif",
          mb: 2,
        }}
      >
        solutions, meeting all the needs of Web3 projects.
      </Typography>

      <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            maxWidth={800}
            sx={{ mt: 10, mx: "auto" }} // căn giữa
            >
        <Grid item xs={12} sm={4}>
          <Typography
            sx={{
              color: "#49b25d",
              fontSize: 70,
              fontWeight: 700,
              fontFamily: "'Martel', serif",
              letterSpacing: 2,
              textAlign: "center",
            }}
          >
            0 +
          </Typography>
          <Typography sx={{ mt: 1, color: "#222", textAlign: "center",fontFamily: "'Martel', serif",fontSize: 20}}>
            CEX and DEX
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            sx={{
              color: "#49b25d",
              fontSize: 70,
              fontWeight: 700,
              fontFamily: "'Martel', serif",
              letterSpacing: 2,
              textAlign: "center",
            }}
          >
            0 M+
          </Typography>
          <Typography sx={{ mt: 1, color: "#222", textAlign: "center",fontFamily: "'Martel', serif",fontSize: 20 }}>
            Engaged Holders
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            sx={{
              color: "#49b25d",
              fontSize: 70,
              fontWeight: 700,
              fontFamily: "'Martel', serif",
              letterSpacing: 2,
              textAlign: "center",
            }}
          >
            x o
          </Typography>
          <Typography sx={{ mt: 1, color: "#222", textAlign: "center",fontFamily: "'Martel', serif"}}>
            Typical Organic Volume
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
