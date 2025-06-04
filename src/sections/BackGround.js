import React from "react";
import { Box, keyframes, useTheme, useMediaQuery } from "@mui/material";

// Responsive breakpoints
const BLOB_CONFIG = {
  desktop: {
    FRAME_W: 1440,
    FRAME_H: 710,
    blobs: [
      {
        color: "#A8DCA4",
        x: 1218.22, y: 350, w: 235.23, h: 235.23,
        opacity: 0.63,
        rotate: -75,
        blur: 5,
        to: { x: 150, y: 60 },
        duration: 30,
        delay: "0s"
      },
      {
        color: "#51B949",
        x: 1418.62, y: 266, w: 194.24, h: 194.24,
        opacity: 0.63,
        rotate: -75,
        blur: 5,
        to: { x: 120, y: 610 },
        duration: 30,
        delay: "0.5s"
      },
      {
        color: "#51B949",
        x: 1013.17, y: 89.65, w: 573.48, h: 573.48,
        opacity: 0.441,
        rotate: -75,
        blur: 8,
        to: { x: 200, y: 400 },
        duration: 36,
        delay: "1s"
      },
      {
        color: "#A8DCA4",
        x: 527.17, y: -83, w: 683.46, h: 683.46,
        opacity: 0.466,
        rotate: -75,
        blur: 10,
        to: { x: 1100, y: 600 },
        duration: 48,
        delay: "2s"
      }
    ]
  },
  tablet: {
    FRAME_W: 900,
    FRAME_H: 1200,
    blobs: [
      {
        color: "#A8DCA4",
        x: 600, y: 200, w: 140, h: 140,
        opacity: 0.6,
        rotate: -65,
        blur: 4,
        to: { x: 120, y: 150 },
        duration: 22,
        delay: "0s"
      },
      {
        color: "#51B949",
        x: 850, y: 200, w: 120, h: 120,
        opacity: 0.6,
        rotate: -70,
        blur: 4,
        to: { x: 50, y: 800 },
        duration: 26,
        delay: "0.6s"
      },
      {
        color: "#51B949",
        x: 450, y: 20, w: 350, h: 350,
        opacity: 0.42,
        rotate: -75,
        blur: 7,
        to: { x: 200, y: 700 },
        duration: 32,
        delay: "1.2s"
      }
    ]
  },
  mobile: {
    FRAME_W: 390,
    FRAME_H: 800,
    blobs: [
      {
        color: "#A8DCA4",
        x: 220, y: 120, w: 80, h: 80,
        opacity: 0.5,
        rotate: -60,
        blur: 2,
        to: { x: 20, y: 200 },
        duration: 18,
        delay: "0s"
      },
      {
        color: "#51B949",
        x: 350, y: 90, w: 60, h: 60,
        opacity: 0.5,
        rotate: -65,
        blur: 2,
        to: { x: 20, y: 600 },
        duration: 20,
        delay: "0.4s"
      },
      {
        color: "#A8DCA4",
        x: 100, y: -30, w: 200, h: 200,
        opacity: 0.33,
        rotate: -75,
        blur: 4,
        to: { x: 150, y: 450 },
        duration: 26,
        delay: "1s"
      }
    ]
  }
};

// Helper
const hexToRgba = (hex, opacity) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// px2vw/vh
const px2vw = (x, frameW) => (x / frameW) * 100;
const px2vh = (y, frameH) => (y / frameH) * 100;

// Animation
const getMoveKeyframes = (from, to, rotate, frameW, frameH) => keyframes`
  0%   { transform: translate(${px2vw(from.x, frameW)}vw, ${px2vh(from.y, frameH)}vh) rotate(${rotate}deg);}
  50%  { transform: translate(${px2vw(to.x, frameW)}vw, ${px2vh(to.y, frameH)}vh) rotate(${rotate}deg);}
  100% { transform: translate(${px2vw(from.x, frameW)}vw, ${px2vh(from.y, frameH)}vh) rotate(${rotate}deg);}
`;

export default function FigmaBlobBackground() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  let cfg = BLOB_CONFIG.desktop;
  if (isMobile) cfg = BLOB_CONFIG.mobile;
  else if (isTablet) cfg = BLOB_CONFIG.tablet;

  const { FRAME_W, FRAME_H, blobs } = cfg;

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1,
        background: "#fff",
        overflow: "hidden",
      }}
    >
      {blobs.map((blob, idx) => {
        const moveAnim = getMoveKeyframes(
          { x: blob.x, y: blob.y },
          blob.to,
          blob.rotate,
          FRAME_W,
          FRAME_H
        );
        return (
          <Box
            key={idx}
            sx={{
              position: "absolute",
              width: `${px2vw(blob.w, FRAME_W)}vw`,
              height: `${px2vh(blob.h, FRAME_H)}vh`,
              left: 0,
              top: 0,
              background: hexToRgba(blob.color, 1),
              borderRadius: "50%",
              opacity: blob.opacity,
              filter: `blur(${blob.blur}vw)`,
              animation: `${moveAnim} ${blob.duration}s ease-in-out infinite`,
              animationDelay: blob.delay,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </Box>
  );
}
