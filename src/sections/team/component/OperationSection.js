import { useState } from "react";
import { useTheme, useMediaQuery, Box, Typography } from "@mui/material";
import { m } from "framer-motion";
import { AdvisorListCard } from "./ListCard";
import { AdvisorDetailPanel } from "./DetailCard";

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
    },
    // 3 advisor mới
    {
      name: "Anna Kim",
      avatar: "/logo/svg/avatar4.svg",
      position: "Legal Advisor",
      company: "",
      highlights: [
        "Experienced in blockchain legal compliance.",
        "10+ years in international law."
      ]
    },
    {
      name: "Satoshi Tanaka",
      avatar: "/logo/svg/avatar5.svg",
      position: "Tech Advisor",
      company: "",
      highlights: [
        "Lead developer in blockchain projects.",
        "Expert in smart contract security."
      ]
    },
    {
      name: "Jenny Park",
      avatar: "/logo/svg/avatar6.svg",
      position: "Financial Advisor",
      company: "",
      highlights: [
        "15+ years in fintech and crypto finance.",
        "Ex-Director of Top3 Korean exchange."
      ]
    }
  ];
  

  
  const cardH = 230;
  const spaceY = 20;
  const targetLayout = [
    { left: -180,top: 60 },                  // card 1
    { left: 40,top: 40 },                  // card 2
    { left: 260,top: 10 },                  // card 3
    { left: -180,top: 380 },     // card 4
    { left: 40,top: 360 },     // card 5
    { left: 260 ,top: 330 }      // card 6
  ];
  

export default function OperationSplitView() {
  const [currentIdx, setCurrentIdx] = useState(null);
  const [animated, setAnimated] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (idx) => {
    if (!animated) {
      setAnimated(true);

      setTimeout(() => setCurrentIdx(idx), 500);
    } else {
      setCurrentIdx(idx);
    }
  };

  return (
    <Box>
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
            OPERATION
          </Typography>
        </Box>

      {isMobile ? (
      <Box sx={{ width: "100%", mx: "auto", mt: 4 }}>
        
        {advisors.map((a, idx) => (
          <Box key={a.name} sx={{ mb: 4, ml: -10 }}>
            <AdvisorDetailPanel advisor={a} direction={0} />
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
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                gap: 4,
                justifyItems: "center",
                alignItems: "center",
                minHeight: 2 * cardH + spaceY + 40,
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
                initial={{ left: 350 + idx * 40, top: 90 }} // xuất phát tại vị trí cũ giữa hàng ngang
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
            <AdvisorDetailPanel advisor={advisors[currentIdx]} direction={0} />
          </Box>
        )}
      </Box>
    )}
    </Box>
  );
}
