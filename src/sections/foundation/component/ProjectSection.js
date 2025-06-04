import { Box, Typography, Grid } from "@mui/material";

// Demo: dữ liệu project
const projects = [
  {
    img: "/logo/svg/fishwar.svg",
    alt: "Fishwar"
  },
  {
    img: "/logo/svg/sunbeans.svg",
    alt: "Sun Beans"
  },
  {
    img: "/logo/svg/walkup.svg",
    alt: "Walk Up"
  },
  {
    img: "/logo/svg/medical.svg",
    alt: "Medical AI"
  },
  {
    img: "/logo/svg/src.svg",
    alt: "SRC"
  },
  {
    img: "/logo/svg/metazellys.svg",
    alt: "Block Education"
  }
];

// Style cho slogan phía dưới
const sloganStyle = {
  fontFamily: '"Orbitron", sans-serif',
  fontWeight: 800,
  fontSize: { xs: 24, md: 38 },
  background: "linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
  letterSpacing: 2,
  mt: { xs: 3, md: 7 },
  mb: 2,
  textAlign: "center",
  textTransform: "uppercase"
};

export default function ProjectSection() {
  return (
    <Box
  sx={{
    width: "100%",
    maxWidth: 1280,     // max width tổng, phù hợp với giao diện
    mx: "auto",         // căn giữa nguyên khối
    px: { xs: 1, md: 4 },
    pt: { xs: 4, md: 7 },
    pb: { xs: 2, md: 6 },
    background: "transparent",
  }}
>
  <Typography
    variant="h3"
    sx={{
      textAlign: "center",
      fontWeight: 600,
      fontSize: 50,
      fontFamily: "'Martel', serif",
      color: "#222",
      mb: { xs: 4, md: 7 },
      letterSpacing: 1,
    }}
  >
    Projects
  </Typography>

  <Grid
    container
    spacing={{ xs: 2, md: 4 }}
    justifyContent="center"
    sx={{
      mb: { xs: 3, md: 7 },
    }}
  >
    {projects.map((p, idx) => (
      <Grid item xs={12} sm={6} md={4} key={idx} sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <Box
          component="img"
          src={p.img}
          alt={p.alt}
          sx={{
            width: "100%",
            maxWidth: 350,
            minHeight: 120,
            borderRadius: 2.5,
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
            objectFit: "cover",
            background: "#fafafa",
            transition: "transform 0.18s",
            "&:hover": { transform: "scale(1.04)" }
          }}
        />
      </Grid>
    ))}
  </Grid>

  <Typography sx={sloganStyle}>
    LET&apos;S BUILD SOMETHING EPIC TOGETHER.
  </Typography>
</Box>

  );
}
