/* eslint-disable react/prop-types */
import { alpha, Box, Stack, Typography, useTheme } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { useLocales } from 'src/locales';
import Iconify from '../iconify';
import Image from '../image';

function UpfinexUploadAvatar({ file, error, onDrop = () => {} }) {
  const { t } = useLocales();

  const paletteTheme = useTheme();
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple: false,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    onDrop,
  });

  const hasFile = !!file;

  const hasError = isDragReject || !!error;

  const imgUrl = typeof file === 'string' ? file : file?.preview;

  const renderPlaceholder = (
    <Stack
      sx={{
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        zIndex: 9,
        borderRadius: '50%',
        position: 'absolute',
        color: 'text.disabled',
        background: 'rgba(255, 255, 255, 0.3)',
        transition: (theme) =>
          theme.transitions.create(['opacity'], {
            duration: theme.transitions.duration.shorter,
          }),
        '&:hover': {
          opacity: 0.72,
        },
        ...(hasError && {
          color: 'error.main',
          bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
        }),
        ...(hasFile && {
          zIndex: 9,
          opacity: 0,
          color: 'common.white',
          bgcolor: (theme) => alpha(theme.palette.grey[900], 0.64),
        }),
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Iconify icon="iconoir:camera" width={32} sx={{ color: paletteTheme.palette.common.white }} />

      <Typography textAlign="center" variant="caption" fontStyle="italic" color={paletteTheme.palette.common.white}>
        {file ? t('upfinex_111') : t('upfinex_112')}
      </Typography>
    </Stack>
  );

  const renderPreview = (
    <Image
      alt="avatar"
      src={imgUrl}
      sx={{
        width: 1,
        height: 1,
      }}
    />
  );

  const renderContent = (
    <Stack
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
        borderRadius: '50%',
        position: 'relative',
      }}
    >
      {renderPlaceholder}
      {renderPreview}
    </Stack>
  );

  return (
    <Box
      {...getRootProps()}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 84,
        height: 84,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: '50%',
        cursor: 'pointer',
      }}
    >
      <input {...getInputProps()} />
      {renderContent}
    </Box>
  );
}

export default UpfinexUploadAvatar;
