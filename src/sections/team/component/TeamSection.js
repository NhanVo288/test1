import { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { m, useMotionValue, useTransform, animate } from "framer-motion";
import PropTypes from "prop-types";

const TEXT = "Our team";

export default function GreenSlideOverlay({ onDone }) {
  const [step, setStep] = useState(0);
  const [hideBg, setHideBg] = useState(false);
  const slideProgress = useMotionValue(0);
  const slideStarted = useRef(false);

  // Step 

  useEffect(() => {
    if (step === 0) {
      const t = setTimeout(() => setStep(1), 1200);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [step]);

  useEffect(() => {
    if (step === 1) {
      const t = setTimeout(() => setStep(2), 900);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [step]);

  useEffect(() => {
    if (step === 2) {
      const t = setTimeout(() => setStep(3), 1700);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [step]);

  useEffect(() => {
    if (step === 3 && !slideStarted.current) {
      slideStarted.current = true;
      const controls = animate(slideProgress, 1, {
        duration: 1.15,
        ease: [0.65, 0, 0.35, 1],
        onComplete: () => {
          setHideBg(true);
          setStep(4);
        },
      });
      return () => controls.stop();
    }
    return undefined;
  }, [step, slideProgress]);

  useEffect(() => {
    if (step === 4 && onDone) onDone();
  }, [step, onDone]);

  // Màu chữ động khi slide out
  const textColor = useTransform(slideProgress, [0, 1], ["#fff", "#3e9949"]);
  const showText = step >= 2;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: 480, md: 700 }, 
        position: "relative",
        overflow: "hidden",
        marginTop: "88px", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
      {!hideBg && (
        <m.div
          initial={{ y: "100%", x: "0%" }}
          animate={
            step === 3
              ? { x: "-100%", y: "0%" }
              : { y: step > 0 ? "0%" : "100%", x: "0%" }
          }
          transition={{
            duration: 1.5,
            ease: [0.65, 0, 0.35, 1],
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%", 
            background: "linear-gradient(135deg, #3e9949 0%, #184C35 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      {/* Chữ  */}
      {showText && (
        <Box
          sx={{
            width: "100%",
            height: "100%", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <m.span
            initial={{ "--reveal": "0%", opacity: 0.2 }}
            animate={{
              "--reveal": showText ? "100%" : "0%",
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: [0.4, 0.02, 0.16, 0.97],
              delay: showText ? 0.08 : 0,
            }}
            style={{
              display: "inline-block",
              minWidth: 380,
              WebkitMaskImage:
                "linear-gradient(to right, black var(--reveal), transparent var(--reveal))",
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              color: textColor,
              transition: "color 0.2s",
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Martel", sans-serif',
                fontWeight: 900,
                fontSize: { xs: 48, md: 96 },
                letterSpacing: 3,
                textAlign: "center",
                textShadow: "0 4px 20px rgba(0,0,0,0.16), 0 2px 0 #328C45",
                lineHeight: 1.08,
                userSelect: "none",
              }}
            >
              {TEXT}
            </Typography>
          </m.span>
        </Box>
      )}
    </Box>
  );
}

GreenSlideOverlay.propTypes = {
  onDone: PropTypes.func,
};
