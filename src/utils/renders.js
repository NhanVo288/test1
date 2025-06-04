import { Typography } from '@mui/material';
import Copy from 'src/components/Copy';
import CustomLink from 'src/components/CustomLink';
import Label from 'src/components/label';

export const renderId = (id) => {
  id = id?.toString();

  return <Copy text={id}>#{id}</Copy>;
};

export const renderEmail = (email, link) => <Copy text={email}>{link ? <CustomLink link={link}>{email}</CustomLink> : email}</Copy>;

export const renderStatus = (status, label) => {
  status = status?.toString();
  const type = _checkType(status);

  const defaultLabel = <Label>{label?.toLowerCase() || status?.replaceAll('_', ' ')?.toLowerCase()}</Label>;
  const successLabel = <Label color="success">{label?.toLowerCase() || status?.replaceAll('_', ' ')?.toLowerCase()}</Label>;
  const warningLabel = <Label color="warning">{label?.toLowerCase() || status?.replaceAll('_', ' ')?.toLowerCase()}</Label>;
  const errorLabel = <Label color="error">{label?.toLowerCase() || status?.replaceAll('_', ' ')?.toLowerCase()}</Label>;

  switch (type) {
    case 'success':
      return successLabel;
    case 'warning':
      return warningLabel;
    case 'error':
      return errorLabel;
    case 'default':
      return defaultLabel;
    default:
      return defaultLabel;
  }
};

const _checkType = (status) => {
  const successStatus = [
    'active',
    'true',
    'success',
    'new',
    'staking',
    'completed',
    'done',
    'running',
    'start',
    'connected',
    'open',
    'buy',
    'verified',
    'replied',
    'transfer_in',
    'available',
  ];
  const warningStatus = ['closed', 'close', 'pending', 'paused', 'unfinished', 'sending', 'used'];
  const errorStatus = [
    'inactive',
    'false',
    'canceled',
    'cancel',
    'fail',
    'expired',
    'denied',
    'stop',
    'disconnect',
    'disconnected',
    'sell',
    'failed',
    'unverified',
    'no reply yet',
    'cancelled',
    'transfer_out',
  ];

  status = status?.toString().toLowerCase();

  if (successStatus.indexOf(status) >= 0) {
    return 'success';
  }
  if (warningStatus.indexOf(status) >= 0) {
    return 'warning';
  }
  if (errorStatus.indexOf(status) >= 0) {
    return 'error';
  }
  return 'default';
};

export const renderText = (text, link) => {
  if (!text) return null;

  return <Copy text={text}>{link ? <CustomLink link={link}>{text}</CustomLink> : text}</Copy>;
};
