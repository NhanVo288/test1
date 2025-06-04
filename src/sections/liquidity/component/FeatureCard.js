import { Box, Grid, Typography } from "@mui/material";

const CARDS = [
  {
    title: "LISTING SUPPORT",
    desc: `Expert advisory and comprehensive support in selecting and listing your token on reputable centralized (CEX) and decentralized (DEX) exchanges, optimizing visibility and reach to potential investors. This includes exchange evaluation, listing preparation, negotiation of terms, and ongoing technical support throughout the entire process.`
  },
  {
    title: "TREASURY BUILDING",
    desc: `Comprehensive treasury management solutions, including digital asset optimization strategies, to help you effectively and securely manage your token reserves. We will assess risk, develop asset allocation strategies, and execute trades with high liquidity and minimal slippage, ensuring seamless conversion of digital assets to fiat or stablecoins when needed.`
  },
  {
    title: "LIQUIDITY MANAGEMENT",
    desc: `Advanced liquidity management solutions powered by cutting-edge algorithms, ensuring optimal market depth, minimized price volatility, and reduced bid-ask spreads. We contribute to enhanced trading efficiency and a healthy trading environment, attracting investors and fostering the sustainable growth of your token.`
  }
];

export default function FeatureCards() {
  return (
    <Box sx={{
      width: "100%",
      mt: { xs: 2, md: 6 },
      px: { xs: 0.5, md: 2 },
      py: { xs: 2, md: 4 },
      overflowX: "hidden",
    }}>
      <Grid container spacing={{ xs: 4, md: -10 }} justifyContent="center">
        {CARDS.map((card, idx) => (
          <Grid
            item
            xs={12}
            md={4}
            key={card.title}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 2, md: 0 },
            }}
          >
            {/* Box cha relative */}
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "90%", md: "450px" },
                minHeight: { xs: 240, sm: 260, md: 360 },
                ml: { xs: 0, md: 10 },
                maxWidth: 500,
              }}
            >
              {/* Marker tuyệt đối */}
              <Box
                sx={{
                  position: "absolute",
                  left: -10,
                  ...(idx === 0 && { top: 38, height: 50, bgcolor: "#d3ffce" }),
                  ...(idx === 1 && { top: "50%", height: 50, transform: "translateY(-50%)", bgcolor: "#b1f1ab" }),
                  ...(idx === 2 && { bottom: 38, height: 50, bgcolor: "#75f169" }),
                  width: 16,
                  borderRadius: "16px",
                  border: "1.5px solid #C9C9C9",
                  zIndex: 1,
                  display: { xs: "none", md: "block" },
                  opacity: 1,
                }}
              />
              {/* Card nằm trên marker */}
              <Box
                sx={{
                  position: "relative",
                  border: "1.5px solid #C9C9C9",
                  borderRadius: 2,
                  p: { xs: 2, sm: 2.5, md: 3.5 },
                  background: "#fff",
                  minHeight: { xs: 220, sm: 240, md: 360 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "none",
                  width: "100%",
                  zIndex: 2,
                  opacity: 0.96,
                  ml: 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Orbitron", "Roboto", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: 17, sm: 18, md: 20 },
                    letterSpacing: 1,
                    background: 'linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    opacity: 1,
                    textAlign: "center",
                    mb: { xs: 1, md: 2 },
                    textTransform: "uppercase",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Martel", serif',
                    fontSize: { xs: 14.5, sm: 15, md: 16 },
                    color: "black",
                    textAlign: "center",
                    lineHeight: 1.6,
                  }}
                >
                  {card.desc}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
