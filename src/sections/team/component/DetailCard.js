import { Box, Typography } from "@mui/material";
import { m, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';

export function PersonDetailPanel({ Person, direction }) {
  return (
    <Box sx={{ width: 420, minHeight: 420, position: "relative", ml: 8,overflow: "hidden" }}>
      <AnimatePresence initial={false} custom={direction}>
        <m.div
          key={Person.name}
          initial={{ x: direction > 0 ? 400 : -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -400 : 400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 26, duration: 0.38 }}
          style={{
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
            borderRadius: 12,
            boxShadow: "0 4px 32px 0 rgba(0,0,0,0.08)",
            padding: 32,
            minHeight: 350,
            zIndex: 2,
          }}
        >
          <img
            src={Person.avatar}
            alt={Person.name}
            style={{ width: 200, height: 180, borderRadius: 10, objectFit: "cover", marginBottom: 10 }}
          />
          <Typography sx={{ fontFamily: "Orbitron, Arial Black", fontWeight: 700, fontSize: 25, color: "#174C36" }}>
            {Person.name}
          </Typography>
          <Typography sx={{
            fontSize: 22,
            fontWeight: 500,
            color: "#3e9949",
            background: "rgba(60,120,90,0.10)",
            px: 1.5, borderRadius: 1, my: 1, display: "inline-block"
          }}>
            {Person.position} {Person.company}
          </Typography>
          <ul>
            {Person.highlights?.map((item, idx) => (
              <li key={idx} style={{ fontSize: 15 }}>
                {item}
              </li>
            ))}
          </ul>
        </m.div>
      </AnimatePresence>
    </Box>
  );
}

PersonDetailPanel.propTypes = {
  Person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  direction: PropTypes.number.isRequired
};