import { Box, Typography, Button, IconButton } from '@mui/material';
import { m, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

function ServiceCard({
  leftImage,
  title,
  description,
  onBack,
  onNext,
  icons = [],
  keyProp, // keyProp dùng để trigger AnimatePresence
  direction = 'next', // 'next' or 'back'
  background,
  disableBack = false,
  disableNext = false,
}) {
  // Place inside your ServiceCard component
// Animation cho ảnh bên trái
const leftImageVariants = {
  initial: (dir) =>
    dir === 'next'
      ? { opacity: 0, x: 100 }
      : { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: (dir) =>
    dir === 'next'
      ? { opacity: 0, x: -100 }
      : { opacity: 0, x: 100 },
};

// Animation cho title/description
const textVariants = {
  initial: (dir) =>
    dir === 'next'
      ? { opacity: 0, y: 40 }
      : { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: (dir) =>
    dir === 'next'
      ? { opacity: 0, y: -40 }
      : { opacity: 0, y: 40 },
};



  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30px',
        width: { xs: '98%', md: 1099 },
        minHeight: { xs: 340, md: 484 },
        background,
        boxShadow: '0px 10px 36px 0px rgba(80,180,100,0.08), 0px 2px 4px 0px rgba(100,120,100,0.08)',
        position: 'relative',
        overflow: 'visible',
        mx: 'auto',
        mt: { xs: 3, md: 0 },
      }}
    >
      {/* Nút Back */}
      <IconButton
        onClick={onBack}
        disabled={disableBack}
        sx={{
          position: 'absolute',
          left: 18,
          top: 18,
          width: 48,
          height: 48,
          opacity: 1,
            '&:hover': {
              bgcolor: '#f2f2f2',
              opacity: 1,
            },
          '&.Mui-disabled': {
              bgcolor: '#fff',
              color: '#aaa',
              opacity: 1,      // <--- Không bị nhạt đi
              pointerEvents: 'none', // vẫn không bấm được
            },
          bgcolor: '#fff',
          boxShadow: '0 2px 6px 0 rgba(0,0,0,0.08)',
          zIndex: 2,
          fontWeight: 500,
          fontSize: 16,
        }}
      >
        Back
      </IconButton>

      {/* Nút Next */}
      <IconButton
        onClick={onNext}
        disabled={disableNext}
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 48,
          opacity: 1,
            '&:hover': {
              bgcolor: '#f2f2f2',
              opacity: 1,
            },
          '&.Mui-disabled': {
              bgcolor: '#fff',
              color: '#aaa',
              opacity: 1,      // <--- Không bị nhạt đi
              pointerEvents: 'none', // vẫn không bấm được
            },
          height: 48,
          bgcolor: '#fff',
          boxShadow: '0 2px 6px 0 rgba(0,0,0,0.08)',
          zIndex: 2,
          fontWeight: 500,
          fontSize: 16,
          ml: '-180px',
        }}
      >
        Next
      </IconButton>

      {/* Bên trái (Animated Image) */}
      <Box
        sx={{
          flex: 1.1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 3, md: 0 },
        }}
      >
        <AnimatePresence mode="wait">
          <m.img
            key={leftImage + keyProp}
            src={leftImage}
            alt={title}
            style={{ height: 300 }}
            custom={direction}
            variants={leftImageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          />
        </AnimatePresence>
      </Box>

      {/* Dòng dọc chia đôi */}
      <Box
        sx={{
          position: 'absolute',
          top: 1,
          bottom: 1,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1px',
          bgcolor: '#43AE3B',
          borderRadius: 1,
          display: { xs: 'none', md: 'block' },
          zIndex: 1,
          ml: '-180px',
        }}
      />

      {/* Bên phải */}
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          pl: { xs: 0, md: 6 },
          pr: { xs: 0, md: 4 },
          py: { xs: 4, md: 0 },
          height: '100%',
        }}
      >
        <AnimatePresence mode="wait">
          <m.div
            key={title + keyProp}
            custom={direction}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Typography
              sx={{
                fontFamily: '"Philosopher", serif',
                fontWeight: 700,
                fontSize: 35,
                lineHeight: '48.2px',
                color: '#164732',
                mb: 2,
                letterSpacing: 0,
                textAlign: 'center',
              }}
            >
              {title}
            </Typography>
          </m.div>
        </AnimatePresence>

        {/* Animate Description */}
        <Box
          sx={{
            minHeight: { xs: 68, md: 100 },
            maxWidth: 600,
            width: '100%',
            mb: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AnimatePresence mode="wait">
            <m.div
              key={description + keyProp}
              custom={direction}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              style={{ width: '100%' }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: '#161616',
                  textAlign: 'center',
                  maxWidth: 600,
                }}
              >
                {description}
              </Typography>
            </m.div>
          </AnimatePresence>
        </Box>

        {/* Button + Icons giữ nguyên */}
        <Button
          variant="contained"
          sx={{
            background: '#181818',
            color: '#fff',
            px: 3,
            py: 1,
            borderRadius: 1.5,
            fontWeight: 500,
            fontSize: 16,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': { background: '#333' },
          }}
        >
          Explore More
        </Button>

        <Box
          sx={{
            display: 'flex',
            gap: 3,
            mt: 4,
            justifyContent: 'center',
          }}
        >
          {icons.map((icon, i) => (
            <img
              key={i}
              src={icon.src}
              style={{
                height: '100%',
                opacity: icon.opacity || 1,
                maxWidth: 120,
                transition: 'height 0.3s',
              }}
              alt={icon.alt}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

ServiceCard.propTypes = {
  leftImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      height: PropTypes.number,
      opacity: PropTypes.number,
      alt: PropTypes.string,
    })
  ),
  keyProp: PropTypes.any,
  direction: PropTypes.oneOf(['next', 'back']), // Add direction prop type
  background: PropTypes.string, // Add background prop type
  disableBack: PropTypes.bool,
  disableNext: PropTypes.bool,
};

export default ServiceCard;
