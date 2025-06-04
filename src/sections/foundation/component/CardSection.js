import { Box, Grid, Typography, Paper } from "@mui/material";

const cardData = [
    {
      title: (
        <>
          <span style={{ fontWeight: 600 }}>
            FOR EARLY-STAGE&nbsp;
          </span>
          <span style={{ fontWeight: 600 }}>
            STARTUPS:
          </span>
        </>
      ),
      desc: (
        <>
          We strategically partner with early-stage projects where we can make a significant impact. We provide product development, strategic advisory, creative, technical, and marketing solutions in exchange for equity/tokens or cash.

        </>
      ),
      bgColor: "linear-gradient(90deg, #BBFFB5 0%, #E2FFDF 100%)", // Xanh lá
    },
    
    
    {
      title: (
        <>
          <span style={{ fontFamily:'"Orbitron", serif',fontWeight: 600, color: "#233A29" }}>
            FOR FOUNDERS
          </span>
          <span style={{ fontWeight: 400, color: "#72C095" }}>
            :
          </span>
        </>
      ),
      desc: (
        <>
          Become a co-founder. We provide validated business ideas, an initial team, and comprehensive support for your startup. Together, we&apos;ll launch your product and operate a new business in just 180 days.
        </>
      ),
      bgColor:  "linear-gradient(315deg, #BBFFB5 0%, #E2FFDF 100%)", // Vàng nhạt
    },
  ];

export default function DoubleCard() {
  return (
    <><Box
          sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              pb: 6,
          }}
      >
          <Grid
              container
              spacing={2}
              sx={{
                  maxWidth: 1050,
                  justifyContent: "center",
              }}
          >
              {cardData.map((card, idx) => (
                  <Grid
                      item
                      xs={12}
                      md={6}
                      key={idx}
                      sx={{
                          display: "flex",
                          justifyContent: "center",
                      }}
                  >
                      <Paper
                          elevation={0}
                          sx={{
                              width: "480px",
                              background: card.bgColor,
                              borderRadius: "28px",
                              px: { xs: 2, md: 5 },
                              py: { xs: 3, md: 4 },
                              minHeight: { xs: 150, md: 170 },
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                          }}
                      >
                          <Typography
                              variant="subtitle1"
                              sx={{
                                  mb: 1,
                                  fontFamily: "Orbitron, sans-serif",
                                  fontWeight: 700,
                                  fontSize: 17,
                                  lineHeight: 1.3,
                                  textTransform: "uppercase",
                                  background: "linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  backgroundClip: "text",
                                  color: "transparent",
                                  display: "inline-block"
                              }}
                          >
                              {card.title}
                          </Typography>

                          <Typography
                              variant="body1"
                              sx={{
                                  color: "#000000",
                                  fontSize: 15,
                                  fontFamily: "'Martel', serif",
                                  
                              }}
                          >
                              {card.desc}
                          </Typography>
                          
                      </Paper>
                  </Grid>
              ))}
          </Grid>
      
          </Box></>
  );
}

