import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import Iconify from '../iconify';

function IconButton({ disabled, loading, icon, variant, iconSize = 16, color = 'inherit', onClick, sx = {} }) {
  return (
    <Button
      disabled={disabled || loading}
      onClick={onClick}
      variant={variant || 'contained'}
      sx={{
        p: 0.5,
        minWidth: 'auto',
        ...sx,
      }}
      color={color}
    >
      <Iconify icon={loading ? 'svg-spinners:180-ring-with-bg' : icon} width={iconSize} />
    </Button>
  );
}

export default IconButton;

IconButton.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  variant: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  sx: PropTypes.object,
};
