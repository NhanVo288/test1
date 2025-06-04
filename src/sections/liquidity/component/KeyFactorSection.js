import { Box, Paper, Typography, Grid } from "@mui/material";
import { useState } from "react";

const cardData = [
  {
    title: "High-Frequency Trading (HFT)Algorithm Performance and Reliability",
    desc: "We provide cutting-edge HFT solutions that ensure stability and superior performance. Our algorithms deliver reliable trade execution. A dedicated 24/7 support team guarantees over 98% uptime.",
    bgColor: "#EDFFEB",
  },
  {
    title: "Liquidity Management and Market Stability",
    desc: "Our experienced team actively optimizes liquidity, creating a healthy trading environment. We effectively mitigate common market risks such as abnormal price fluctuations, inconsistent trading volume, and severe slippage.",
    bgColor: "#DAFFD7",
  },
  {
    title: "Analytical and Technical Capabilities for Strategic Growth",
    desc: "A specialized R&D team combines in-depth analysis with proprietary algorithms to develop highly effective trading strategies. We support budgeting and planning for sustainable long-term growth strategies.",
    bgColor: "#C8FFC4",
  },
  {
    title: "Global Strategic Partner Networks",
    desc: "Strategic partnerships with over 80 reputable exchanges, launchpads, leading venture capital (VC) funds, and experienced advisors. This networks connect you with industry-leading organizations, driving success in the cryptocurrency space.",
    bgColor: "#B6FFB0",
  },
];

// Responsive values
const CARD_WIDTH = { xs: "100%", sm: 340, md: 400, lg: 420 };
const MARGIN_COLLAPSED = { xs: -12, sm: -15, md: -18 };   // card chồng lên nhau trên từng cỡ màn
const MARGIN_EXPANDED = { xs: -2, sm: -4, md: -1 };

export default function KeyFactorSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={0}
        sx={{
          minHeight: { xs: "unset", md: "70vh" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-start",
          px: { xs: 1, sm: 2, md: 8 },
          py: { xs: 3, md: 7 }
        }}
      >
        {/* Cột trái: Chữ lớn */}
        <Grid item xs={12} md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            mt: { xs: 2, md: 20 },
            justifyContent: { xs: "center", md: "right" },
            pr: { md: 7, xs: 0 }
          }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              fontSize: { xs: 26, sm: 34, md: 50 },
              color: "#232C36",
              lineHeight: 1.15,
              fontFamily: "'Martel', serif",
              textAlign: { xs: "center", md: "left" },
              maxWidth: 500,
              display: 'block',
            }}
          >
            Key Factors in {"\n"} Liquidity Provider
          </Typography>
        </Grid>
        {/* Cột phải: Card chồng */}
        <Grid item xs={12} md={6}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: { xs: "center", md: "flex-start" },
            pl: { md: 7, xs: 0 },
          }}>
          <Box sx={{ width: CARD_WIDTH, position: "relative", mt: { xs: 5, md: 0 }, maxWidth: 500 }}>
            {cardData.map((card, idx) => {
              let marginTop;
              if (idx === 0) {
                marginTop = 0;
              } else if (hoveredIdx !== null && idx === hoveredIdx + 1) {
                marginTop = MARGIN_EXPANDED;
              } else {
                marginTop = MARGIN_COLLAPSED;
              }
              return (
                <Paper
                  key={idx}
                  elevation={6}
                  sx={{
                    width: CARD_WIDTH,
                    borderRadius: "18px",
                    background: card.bgColor,
                    p: { xs: 1.5, sm: 2.2 },
                    mt: marginTop,
                    boxShadow: `
                      0 20px 80px 0 rgba(51, 76, 67, 0.34),
                      0 8px 32px 0 rgba(51, 76, 67, 0.22),
                      0 1.5px 6px 0 rgba(51, 76, 67, 0.13)
                    `,
                    position: "relative",
                    zIndex: 10 + idx,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    overflow: "hidden",
                    transition: "margin-top 0.35s cubic-bezier(0.4,0,0.2,1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: '"Orbitron", "Roboto", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: 15, sm: 16.5, md: 17 },
                      mb: 0.7,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      background: "linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#233A29",
                      fontSize: { xs: 13.5, sm: 14.5, md: 15 },
                      lineHeight: 1.48,
                      fontFamily: "'Martel', serif",
                      fontWeight: 400,
                    }}
                  >
                    {card.desc}
                  </Typography>
                </Paper>
              );
            })}
          </Box>
        </Grid>
      </Grid>
      <Typography
        sx={{
          mt: { xs: 2, md: 4 },
          mb: { xs: 7, sm: 10, md: 16 },
          fontFamily: '"Orbitron", "Roboto", sans-serif',
          fontWeight: 700,
          fontSize: { xs: 20, sm: 30, md: 44 },
          letterSpacing: 2,
          textAlign: "center",
          textTransform: "uppercase",
          background: 'linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 1,
          width: "100%",
          lineHeight: 1.12,
        }}
      >
        UNLOCK YOUR LIQUIDITY
      </Typography>
    </Box>
  );
}
