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
          setTimeout(() => { // Giữ overlay thêm 350ms sau animation
            setHideBg(true);
            setStep(4);
          }, 350);
        },
      });
      return () => controls.stop();
    }
    return undefined;
  }, [step, slideProgress]);
  

  useEffect(() => {
    if (step === 4 && onDone) onDone();
  }, [step, onDone]);

  const textColor = useTransform(slideProgress, [0, 1], ["#fff", "#3e9949"]);
  const showText = step >= 2;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        marginTop: { xs: "6px", md: "88px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 3, md: 0 }, // mobile/tablet nhiều padding hơn
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
         duration: 1.4,
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
         willChange: "transform",
       }}
     />
     
      
      )}

      {/* Chữ */}
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
            px: { xs: 2, sm: 3, md: 0 }, // tăng padding khi mobile
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
              maxWidth: "100vw",
              minWidth: 0,
              WebkitMaskImage:
                "linear-gradient(to right, black var(--reveal), transparent var(--reveal))",
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              color: textColor,
              transition: "color 0.2s",
              whiteSpace: "normal",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Martel", sans-serif',
                fontWeight: 900,
                fontSize: { xs: 28, sm: 40, md: 96 }, // responsive: desktop giữ nguyên
                letterSpacing: 3,
                textAlign: "center",
                textShadow: "0 4px 20px rgba(0,0,0,0.16), 0 2px 0 #328C45",
                lineHeight: 1.08,
                userSelect: "none",
                whiteSpace: "normal",
                wordBreak: "break-word",
                m: 0,
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
