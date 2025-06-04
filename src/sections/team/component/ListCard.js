import { Box, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";

export function AdvisorListCard({ data, onClick }) {
  return (
    <Box
      sx={{
        width: 220,
        height: 220,
        borderRadius: 2.5,
        overflow: "visible", // Cho tràn ra ngoài
        boxShadow: 2,
        position: "relative",
        background: "#fff",
        mx: 2,
        mb: 2,
        p: 0,
      }}
    >
      {/* Ảnh nền */}
      <img
        src={data.avatar}
        alt={data.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 12,
          display: "block",
        }}
      />
      {/* Thông tin đè ảnh, tràn ra ngoài trái */}
      <Box
        sx={{
          position: "absolute",
          left: -18,       // Tràn trái ra ngoài ~1cm (tùy chỉnh)
          bottom: 14,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          // width: "85%", // Có thể bỏ để auto
          minWidth: 170,   // Đảm bảo nút không bị bóp lại
        }}
      >
        <Typography
          sx={{
            fontFamily: "Orbitron, Arial Black, sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#273a36",
            mb: 0.3,
            lineHeight: 1.1,
            letterSpacing: "0.3px",
            textShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          {data.name}
        </Typography>
        <Typography
          sx={{
            display: "inline-block",
            fontSize: 16,
            fontWeight: 500,
            bgcolor: "rgba(183, 226, 201, 0.90)",
            color: "#21805b",
            px: 1.1,
            py: 0.3,
            borderRadius: 1,
            mb: 1,
            letterSpacing: 0.2,
            boxShadow: "0 1px 6px 0 rgba(120,180,140,0.11)",
          }}
        >
          {data.position}
        </Typography>
        <Button
          variant="contained"
          onClick={onClick}
          sx={{
            bgcolor: "#111",
            color: "#fff",
            fontWeight: 600,
            fontSize: 18,
            px: 2.5,
            py: 0.5,
            borderRadius: 2,
            boxShadow: 2,
            textTransform: "none",
            minHeight: 38,
            minWidth: 140,
            "&:hover": { bgcolor: "#3e9949" },
            mt: 0.5,
          }}
        >
          Explore More
        </Button>
      </Box>
    </Box>
  );
}

AdvisorListCard.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
