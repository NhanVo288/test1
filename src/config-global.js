export const PATH_AFTER_LOGIN = '/overview';

const production = {
  environment: 'production',
  apiUrl: '/api',
  fileUrl: '/files',
  reCaptchaKey: '6LdocwgqAAAAAIYX1eQQn6VGRi_2_tfkYw8HY5Zp',
};

const staging = {
  environment: 'staging',
  apiUrl: 'https://mcrew.1fit.fun/admin-api',
  fileUrl: 'https://mcrew.1fit.fun/files',
  reCaptchaKey: '6LfJ5_ApAAAAAGdgmnV2jxHPrOKxoBHeDfyn8yjK',
};

const stagingDomain = 'mcrewadmin.1fit.fun';

const isProduction = window.location.hostname.indexOf(stagingDomain) < 0 && window.location.hostname.indexOf('localhost') < 0;

export const globalConfig = {
  ...(isProduction ? production : staging),
  accessTokenPrivateKey: 'dasljdmksaasd',
  accessTokenPublicKey: 'dbsaidy45t3adasdsa',
};

// ----------------------------------------------------------------------

export const PROJECT_NAME = 'M-Crew Back Office';

export const WALLET_TXS_STATUS_LIST = ['SUCCESS', 'PENDING', 'APPROVED', 'IN_PROCESS', 'CANCELLED', 'FAILED', 'BLOCKED'];

export const OPPOSITE_STATUS = {
  ACTIVE: 'INACTIVE',
  INACTIVE: 'ACTIVE',
};

export const TOKENS = {
  USDT: {
    symbol: 'USDT',
    name: 'Tether',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    decimals: 6,
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
  },
  MCREW: {
    symbol: 'MCREW',
    name: 'M-CREW',
    contractAddress: '0x...',
    decimals: 18,
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/{id}.png',
  },
};
