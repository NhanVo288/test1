import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ServiceCard from './ServiceCard';

const serviceCards = [
  {
    leftImage: '/logo/Incubation.png',
    title: 'SR FOUNDATION',
    description: 'A launchpad for disruptive Web3 projects, supporting you from ideation to market. We provide the resources, funding, and networks to realize your vision, with a special focus on the Korean market.',
    icons: [
      { src: '/logo/Incuba.png', height: 70, alt: 'Incubation' },
      { src: '/logo/Plant.png', height: 60, opacity: 0.45, alt: 'Plant' },
      { src: '/logo/Cycle.png', height: 70, opacity: 0.45, alt: 'Cycle' },
    ],
    background: 'linear-gradient(315deg, #BAFEB4 0%, #E6FEE3 100%)'


  },
  {
    leftImage: '/logo/Invest.png',
    title: 'SR VENTURES',
    description: 'Expert digital asset management. Our experienced team of professionals will help you optimize your portfolio and capture profitable opportunities.',
    icons: [
      { src: '/logo/Incuba.png', height: 70,opacity: 0.2, alt: 'Incubation' },
      { src: '/logo/Plant.png', height: 60, alt: 'Plant' },
      { src: '/logo/Cycle.png', height: 70, opacity: 0.2, alt: 'Cycle' },
    ],
    background: "linear-gradient(315deg, #95FF8D 0%, #D6FFD1 100%)"


  },
  {
    leftImage: '/logo/Liquidity.png',
    title: 'SR Liquidity Provider',
    description: 'Comprehensive liquidity solutions for CEXs and DEXs. Our team of experts, HFT algorithms, and deep liquidity networks ensure optimal efficiency, minimized slippage, and a competitive edge for our partners..',
    icons: [
      { src: '/logo/Incuba.png', height: 70,opacity: 0.2, alt: 'Incubation' },
      { src: '/logo/Plant.png', height: 60, opacity: 0.2, alt: 'Plant' },
      { src: '/logo/Cycle.png', height: 70, alt: 'Cycle' },
    ],
    background: 'linear-gradient(315deg, #39D52D 0%, #96FD89 100%)'
  },
];

export default function OurServiceSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('next');

  const handleBack = () => {
    setDirection('back');
    setCurrent(idx => (idx === 0 ? serviceCards.length - 1 : idx - 1));
  };

  const handleNext = () => {
    setDirection('next');
    setCurrent(idx => (idx === serviceCards.length - 1 ? 0 : idx + 1));
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 3, md: 0 },
        pb: { xs: 6, md: 10 },
        background: 'transparent',
      }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: 500,
          fontSize: { xs: 32, md: 48 },
          mb: 4,
          fontFamily: '"Martel", serif',
          textShadow: '2px 3px 7px #aaa',
        }}
      >
        Our Service
      </Typography>

      <ServiceCard
        {...serviceCards[current]}
        onBack={handleBack}
        onNext={handleNext}
        keyProp={current}
        direction={direction}
        disableBack={current === 0}
        disableNext={current === serviceCards.length - 1}
      />

    </Box>
  );
}
