import CryptoJS from 'crypto-js';

export const Encrypt = (message, privateKey) =>
  CryptoJS.AES.encrypt(message, privateKey).toString();

export const Decrypt = (ciphertext, privateKey) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, privateKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
