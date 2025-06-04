import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import PropTypes from 'prop-types';

export default function TopLoadingBar({ loading = false }) {
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let interval;
    if (loading) {
      setVisible(true);
      setWidth(0);
      interval = setInterval(() => {
        setWidth(w => (w < 90 ? w + Math.random() * 7 : w));
      }, 100);
    } else {
      setWidth(100);
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => setWidth(0), 400); // Reset width sau khi đã ẩn bar
      }, 400); // thời gian này bằng với transition opacity bên dưới
    }
    return () => clearInterval(interval);
  }, [loading]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 12000,
        height: 3,
        width: "100vw",
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          height: "100%",
          background: "linear-gradient(90deg,#4adb5b 40%,#184C35 100%)",
          width: `${width}%`,
          transition: "width 0.22s cubic-bezier(0.4,0,0.2,1), opacity 0.4s",
          boxShadow: "0 2px 12px 0 rgba(80,180,100,0.08)",
          borderRadius: "0 3px 3px 0",
          opacity: visible ? 1 : 0,
        }}
      />
    </Box>
  );
}

TopLoadingBar.propTypes = {
  loading: PropTypes.bool
};
