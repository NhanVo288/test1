import { Box, Paper, Typography, Grid } from "@mui/material";
import { useState } from "react";

const cardData = [
  {
    title: "Advisory",
    desc: "Leveraging our extensive experience, we provide expert advisory on launch strategy, fundraising, product structuring, tokenomics, M&A, and more. We are your trusted partner, empowering you to make optimal strategic decisions.",
    bgColor: "#edffeb",
  },
  {
    title: "DEVELOPMENT",
    desc: "We have a talented team of engineers ready to support you with all your technology needs, from smart contract development and blockchain platform building to decentralized application (dApp) design.",
    bgColor: "#daffd7",
  },
  {
    title: "LIQUIDITY",
    desc: "Advanced Liquidity Solutions with Cutting-Edge Algorithms. Optimize market depth, reduce price volatility and bid-ask spreads. Enhance trading efficiency and drive token growth.",
    bgColor: "#c8ffc4",
  },
  {
    title: "FUNDING",
    desc: "We connect you with global networks of investors and partners, particularly in Korea and Japan. We help you select the right investors and optimize your fundraising process.",
    bgColor: "#b6ffb0",
  },
  {
    title: "SOCIAL GROWTH",
    desc: "We execute impactful Growth Hacking campaigns, helping your project build community, expand partnerships, and increase revenue and profitability.",
    bgColor: "#a4ff9c",
  },
];

const CARD_WIDTH = 420;
const MARGIN_COLLAPSED = -7;
const MARGIN_EXPANDED = -1;

export default function CardListWithTitle() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <Grid
      container
      spacing={0}
      sx={{
        minHeight: "70vh",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-start",
        px: { xs: 2, md: 8 },
        py: { xs: 3, md: 7 }
      }}
    >
      {/* Cột trái: Chữ lớn */}
      <Grid item xs={12} md={6} sx={{
        display: "flex",
        alignItems: "center",
        mt: 20,
        justifyContent: { xs: "right", md: "right" },
        pr: { md: 7, xs: 0 }
      }}>
        <Typography
        variant="h2"
        sx={{
          fontWeight: 400,
          fontSize: 50,
          color: "#232C36",
          lineHeight: 1.15,
          fontFamily: "'Martel', serif",
          textAlign: { xs: "center", md: "left" },
          maxWidth: 400,
          display: 'block',
        }}
      >
        What can we {"\n"} do for you?
      </Typography>


      </Grid>

      {/* Cột phải: Card chồng */}
      <Grid item xs={12} md={6} sx={{
  display: "flex",
  alignItems: "flex-start",
  justifyContent: { xs: "center", md: "flex-start" },
  pl: { md: 7, xs: 0 }, // hoặc ml: { md: 4, xs: 0 }
}}>

        <Box sx={{ width: CARD_WIDTH, position: "relative", mt: { xs: 5, md: 0 } }}>
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
                  width: "100%",
                  borderRadius: "18px",
                  background: card.bgColor,
                  p: 2.2,
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
                    fontSize: 17,
                    mb: 0.7,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    background:
                      "linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)",
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
                    fontSize: 15,
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
  );
}
