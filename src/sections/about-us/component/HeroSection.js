import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function SectionHero({
  image,
  title,
  number,
  description,
  titleColor = 'white', // default màu trắng
}) {
  // Chuẩn bị sx cho title (màu chữ)
  const getTitleSx = () => {
    if (titleColor.startsWith('linear-gradient')) {
      return {
        background: titleColor,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      };
    }
    return {
      color: titleColor,
    };
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        px: { xs: 0, md: 4 },
        py: 0,
        m: 0,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1440,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
          boxSizing: 'border-box',
          py: 0,
          m: 0,
        }}
      >
        {/* MOBILE: Number & Description ở trên hình */}
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            width: '100%',
            px: 2,
            pt: 3,
            pb: 0,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#58c87a',
              fontWeight: 700,
              fontSize: 22,
              fontFamily: 'Orbitron, Roboto, sans-serif',
              mb: 1,
            }}
          >
            {number}.
          </Typography>
          <Typography
            sx={{
              color: '#222',
              fontSize: 14,
              lineHeight: 1.6,
              fontFamily: 'Martel, serif',
              mb: 2,
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Hình + Title overlay (luôn nằm giữa hình) */}
        <Box
          sx={{
            flex: 7,
            position: 'relative',
            minHeight: { xs: 180, md: 340 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,  
            overflow: 'hidden',
            width: { xs: '100%', md: 'auto' },
            p: 0,
            m: 0,
          }}
        >
          <Box
            component="img"
            src={image}
            alt={typeof title === "string" ? title : ""}
            sx={{
              width: { xs: '80%', md: '90%', lg: '100%' },
              maxWidth: { xs: 380, md: 600, lg: 720 },
              height: 'auto',
              maxHeight: { xs: 180, md: 400, lg: 520 },
              opacity: 0.96,
              display: 'block',
              mx: 'auto',
              my: 0,
              objectFit: 'contain',
            }}
          />

          {/* Title overlay: LUÔN hiện ở giữa hình mọi màn hình */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
              width: '92%',
              zIndex: 2,
              textAlign: 'center',
              px: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                ...getTitleSx(),
                fontWeight: 600,
                fontSize: { xs: 20, sm: 26, md: 35 },
                fontFamily: 'Orbitron, Roboto, sans-serif',
                letterSpacing: 2,
                textShadow: '0 2px 12px rgba(50,255,50,0.12)',
                lineHeight: 1.2,
                userSelect: 'none',
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>

        {/* Right: Number + Desc (bên phải desktop, ẩn trên mobile) */}
        <Box
          sx={{
            flex: 3,
            display: { xs: 'none', md: 'flex' }, // CHỈ hiện trên desktop
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: { md: 'flex-start' },
            px: { md: 3 },
            pt: { md: 4 },
            pb: { md: 0 },
            minHeight: { md: 180 },
            width: { md: 'auto' },
            textAlign: { md: 'left' },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#58c87a',
              fontWeight: 700,
              fontSize: { md: 44, lg: 52 },
              mb: 1,
              fontFamily: 'Orbitron, Roboto, sans-serif',
            }}
          >
            {number}.
          </Typography>
          <Typography
            sx={{
              color: '#222',
              fontSize: { md: 16 },
              lineHeight: 1.6,
              fontFamily: 'Martel, serif',
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

SectionHero.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
};
