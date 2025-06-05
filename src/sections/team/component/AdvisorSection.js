import { useState } from "react";
import { useTheme, useMediaQuery, Box, Typography } from "@mui/material";
import { m } from "framer-motion";
import { AdvisorListCard } from "./ListCard";
import { PersonDetailPanel } from "./DetailCard";

// Demo data
const advisors = [
  {
    name: "Joo-pil Joeng",
    avatar: "/logo/svg/avatar1.svg",
    position: "CEO",
    company: "Blockchaintoday",
    highlights: [
      "Top 1 Korean Blockchain Korea since 2018",
      "Korea Society of Fintech Blockchain Director",
      "Co-founder Postech Blockchain Academy"
    ]
  },
  {
    name: "Edward Oh",
    avatar: "/logo/svg/avatar2.svg",
    position: "Managing Investor Partner",
    company: "",
    highlights: [
      "Broad network of funds and investors in Korea and Japan.",
      "Specializes in strategic investments in Korean gaming.",
      "Experienced in top-tier Korean fund management."
    ]
  },
  {
    name: "Choi Huk",
    avatar: "/logo/svg/avatar3.svg",
    position: "Venture Partner",
    company: "",
    highlights: [
      "20+ years of experience supporting startups in Korea.",
      "Focused on venture capital investments.",
      "5+ years of experience in blockchain technology."
    ]
  }
];

const targetLayout = [
  { left: -180,   top: 60   },    // Card 1
  { left: 80, top: 260  },    // Card 2
  { left: 280, top: 10 },    // Card 3
];

export default function AdvisorSplitView() {
  const [currentIdx, setCurrentIdx] = useState(null);
  const [animated, setAnimated] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  const handleClick = (idx) => {
    if (!animated) {
      setAnimated(true);
      // delay 1 tí để animation chạy xong rồi mới hiện panel detail
      setTimeout(() => setCurrentIdx(idx), 500);
    } else {
      setCurrentIdx(idx);
    }
  };

  return (
    <Box>
      <Box sx={{
        maxWidth: 1300,
        mx: "auto",
        mt: 6,
        mb: 10,
        px: 2,
        textAlign: "center"
      }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: 16, md: 30, lg: 30 },     
            fontFamily: '"Martel", sans-serif',
            fontWeight: 400,
            color: "#1b2a2b",
          }}
        >
          We possess&nbsp;
          <Box component="span" sx={{ color: "#45b145" }}>extensive hands-on experience, broad networks</Box>
          &nbsp;across diverse sectors, and a&nbsp;
          <Box component="span" sx={{ color: "#45b145" }}>proven track record</Box>
          &nbsp;in asset valuation. Nearly a decade of collaborating with founders enables us to&nbsp;
          <Box component="span" sx={{ color: "#45b145" }}>deliver outstanding results</Box>
          &nbsp;in advisory, investment, and operational activities, especially within the<br />
          <Box component="span" sx={{ color: "#45b145" }}>dynamic cryptocurrency market.</Box>
        </Typography>
      </Box>
      <Box sx={{
          width: "100%",
          maxWidth: 1300,
          mx: "auto",
          px: 2,
          display: "flex",
          alignItems: "center",
          mb: 2
        }}>
          <Typography
            sx={{
              fontFamily: "'Orbitron', Arial Black, sans-serif",
              fontWeight: 700,
              fontSize: { xs: 34, md: 58 },
              background: "linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: 2,
              textAlign: "left",
              flexShrink: 0,
            }}
          >
            ADVISOR
          </Typography>
        </Box>

      {isMobile ? (
      <Box sx={{ width: "100%", mx: "auto", mt: 4,overflowX: "hidden" }}>
        
        {advisors.map((a, idx) => (
          <Box key={a.name} sx={{ mb: 4, ml: -10 }}>
            <PersonDetailPanel Person={a} direction={0} />
          </Box>
        ))}
      </Box>
    ) : (
      <Box sx={{ width: 900, minHeight: 500, mx: "auto", mt: 8, display: "flex" }}>
        {/* BAN ĐẦU: Flexbox hàng ngang căn giữa */}
        {!animated && (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              minHeight: 350,
              position: "relative"
            }}
          >
            {advisors.map((a, idx) =>
              <AdvisorListCard
                key={a.name}
                data={a}
                selected={false}
                onClick={() => handleClick(idx)}
              />
            )}
          </Box>
        )}

        {/* SAU KHI BẤM: Card animate về vị trí riêng biệt (absolute) */}
        {animated && (
          <Box
            sx={{
              flex: 1,
              position: "relative",
              minHeight: 400,
              minWidth: 680,
              height: 380,
            }}
          >
            {advisors.map((a, idx) => (
              <m.div
                key={a.name}
                initial={{ left: 350 + idx * 40, top: 90 }} 
                animate={targetLayout[idx]}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 15,
                  delay: idx * 0.08,
                }}
                style={{
                  position: "absolute",
                  width: 220,
                  zIndex: 2
                }}
              >
                <AdvisorListCard
                  data={a}
                  selected={currentIdx === idx}
                  onClick={() => setCurrentIdx(idx)}
                />
              </m.div>
            ))}
          </Box>
        )}

        {/* Panel chi tiết */}
        {currentIdx !== null && (
          <Box>
            <PersonDetailPanel Person={advisors[currentIdx]} direction={0} />
          </Box>
        )}
      </Box>
    )}
    </Box>
  );
}
