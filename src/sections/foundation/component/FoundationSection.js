import { Box } from '@mui/material';
import { m } from 'framer-motion';

const title = "SR FOUNDATION";

const CHAR_TO_SVG = {
  S: '/logo/svg/S.svg',
  R: '/logo/svg/R.svg',
  F: '/logo/svg/F.svg',
  O: '/logo/svg/O.svg',
  U: '/logo/svg/U.svg',
  D: '/logo/svg/D.svg',
  A: '/logo/svg/A.svg',
  T: '/logo/svg/T.svg',
  I: '/logo/svg/I.svg',
  O1: '/logo/svg/O1.svg',
  N: '/logo/svg/N.svg',
  ' ': null,
};

const LAST_N_INDEX = title.lastIndexOf('N');

export default function SRFoundationTitle() {
  return (
    <Box 
      sx={{
        width: '100%',
        minHeight: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 1, md: 6 } 
      }}>
        {/* Logo animate */}
        <Box
          component={m.img}
          src="/logo/svg/Group.svg"
          alt="SR Logo"
          sx={{
            height: { xs: 36, md: "100%" }, 
            width: 'auto',
            minWidth: 28,
          }}
          initial={{ scale: 0.01, opacity: 0.1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Chữ từng chữ drop xuống từ trên cao, bắt đầu từ N cuối */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 0.5, md: 1 }, 
        }}>
          {title.split('').map((ch, idx) =>
            CHAR_TO_SVG[ch] ? (
              <Box
                component={m.img}
                src={CHAR_TO_SVG[ch]}
                alt={ch}
                key={idx}
                sx={{
                  height: { xs: 24, md: "100%" }, 
                  width: 'auto',
                  ...(ch === 'R' ? { mr: { xs: 1, md: 2 } } : {}),
                  minWidth: 12,
                }}
                initial={{ y: -150, opacity: 0 }}
                animate={{
                  y: 10,
                  opacity: 1
                }}
                transition={{
                  delay: 2.2 + Math.abs(idx - LAST_N_INDEX) * 0.08,
                  duration: 0.55,
                  type: 'spring',
                  stiffness: 240,
                  damping: 18
                }}
              />
            ) : (
              <Box key={idx} sx={{ width: { xs: 8, md: 22 } }} />
            )
          )}
        </Box>
      </Box>
    </Box>
  );
}
