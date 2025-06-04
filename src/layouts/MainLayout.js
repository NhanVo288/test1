import FullscreenBlobBackground from "src/sections/BackGround";
import Navbar from "src/sections/NavBar";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

function MainLayout({ children }) {
  return (
    <>
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <Navbar />
      <FullscreenBlobBackground />
      <Box component="main" sx={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
    </Box>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
