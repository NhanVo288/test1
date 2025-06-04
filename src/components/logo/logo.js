import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, type = 'full', color = 'white', themeMode = 'light', sx, ...other }, ref) => {
  const logo = <Box component="img" srcSet="/logo/logo.png 2x" sx={{ height: 45, objectFit: 'contain', alignSelf: 'flex-start', cursor: 'pointer', ...sx }} />;

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/">
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
  type: PropTypes.string,
  themeMode: PropTypes.string,
  color: PropTypes.string,
};

export default Logo;
