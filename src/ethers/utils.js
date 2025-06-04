import { ethers } from 'ethers';

export const isValidAddress = (address) => {
  try {
    ethers.getAddress(address);
    return true;
  } catch (error) {
    return false;
  }
};
