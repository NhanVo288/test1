import { useState } from "react";
import { useTheme, useMediaQuery, Box, Typography } from "@mui/material";
import { m } from "framer-motion";
import { AdvisorListCard } from "./ListCard";
import { PersonDetailPanel } from "./DetailCard";


const operations = [
    {
      name: "Mr.Paul Kim ",
      avatar: "/logo/svg/avatar4.svg",
      position: "Founder-CEO",
      company: "Blockchaintoday",
      highlights: [
        "10 years of living and investing in Korea",
        "Invested and incubated more than 20 successful projects",
        "Pioneer in the blockchain market since 2015"
      ]
    },
    {
      name: "Ms.Lindsie Park",
      avatar: "/logo/svg/avatar5.svg",
      position: "COO",
      company: "",
      highlights: [
        "Building global relationships in Korea, Japan, and Vietnam",
        "Fluent in English, Korean, Vietnamese",
        "Investing in the Korean web3 market."
      ]
    },
    {
      name: "Mr.Chirs Nguyen ",
      avatar: "/logo/svg/avatar6.svg",
      position: "CTO",
      company: "",
      highlights: [
        "Former software engineer at Google",
        "Proficient in more than 10 programming languages",
        "Former Co-Founder of many web3 projects"
      ]
    },
    {
      name: "Mr.PDucky",
      avatar: "/logo/svg/avatar7.svg",
      position: "Project Manager",
      company: "",
      highlights: [
        "Participated in more than 25 projects",
        "Proficient in overall project design",
        "Expert in financial modeling and web3 tokenomics"
      ]
    },
    {
      name: "Ms.AKai Lee ",
      avatar: "/logo/svg/avatar8.svg",
      position: "Head of Partnership",
      company: "",
      highlights: [
        "Portfolio management and business development",
        "Fluent in English, Chinese, Vietnamese",
        "Building global relationships in China, Singapore, Europe"
      ]
    },
    {
      name: "Mr.Lian Lee",
      avatar: "/logo/svg/avatar9.svg",
      position: "Data Analyst",
      company: "",
      highlights: [
        "Crypto & Data Nerd",
        "Proficient in data analysis and on-chain analysis skills",
        "Multiple Hackathon award winner"
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
        
        {operations.map((a, idx) => (
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
                {operations.map((a, idx) =>
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
            {operations.map((a, idx) => (
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
            <PersonDetailPanel Person={operations[currentIdx]} direction={0} />
          </Box>
        )}
      </Box>
    )}
    </Box>
  );
}
