import { globalConfig } from 'src/config-global';
import { Decrypt, Encrypt } from './crypto';

export const isLoggedIn = () => localStorage.getItem(globalConfig.accessTokenPublicKey) != null;

export const setAccessToken = (value) => {
  localStorage.setItem(
    globalConfig.accessTokenPublicKey,
    Encrypt(value, globalConfig.accessTokenPrivateKey)
  );
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(globalConfig.accessTokenPublicKey);
  return accessToken ? Decrypt(accessToken, globalConfig.accessTokenPrivateKey) : null;
};
