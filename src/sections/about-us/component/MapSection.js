import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export default function ErrorImage({ src, alt = "Error image", width = "auto", height = 'auto' }) {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width,
          height,
          display: 'block',
          margin: '0 auto',
          objectFit: 'contain',
          maxWidth: '90vw'
        }}
      />
    </Box>
  );
}

ErrorImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
