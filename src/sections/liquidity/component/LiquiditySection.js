import { Box, Typography } from "@mui/material";
import { m } from "framer-motion";

const lines = [
  "We've helped numerous projects achieve successful",
  "market making. Want yours to be next?"
];

export default function SloganBanner() {
  return (
    <Box
      sx={{
        width: "auto",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 4,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        {lines.map((line, lineIdx) => (
          <Typography
            component={m.div}
            key={lineIdx}
            sx={{
              fontFamily: '"Orbitron", "Roboto", sans-serif',
              fontWeight: 700,
              fontSize: 25,
              letterSpacing: 1,
              textTransform: "uppercase",
              lineHeight: 1.22,
              background: "linear-gradient(90deg, #164732 0%, #51B949 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              textAlign: "center",
              width: "100%",
              m: 0,
              display: "block",
              whiteSpace: "pre-line",
            }}
          >
            {line.split("").map((char, i) =>
              char === " " ? (
                <span key={i} style={{ display: "inline-block", width: "0.5em" }} />
              ) : (
                <m.span
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2 + i * 0.025, // không cộng offset dòng trên nữa
                    duration: 0.5
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </m.span>
              )
            )}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
