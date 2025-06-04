const endpoints = {
  affiliate: {
    binary: '/v1/affiliate/binary-tree',
  },
  mining: {
    package: {
      root: '/v1/mining-package',
      list: '/v1/mining-package/list',
      plan: {
        root: '/v1/mining-package/plan',
        list: '/v1/mining-package/plan/list',
        import: '/v1/mining-package/plan/import',
      },
    },
    userPackage: {
      list: '/v1/user-mining/list',
      transactions: '/v1/user-mining/list-transactions',
    },
  },
  support: {
    ticket: {
      list: '/v1/support/ticket/list',
    },
  },
  commission: {
    history: '/v1/commission/history',
  },
  swapInvest: {
    history: '/v1/swap-invest/history',
  },

  // ---

  news: {
    root: '/v1/news',
    list: '/v1/news/list',
  },

  notification: {
    root: '/v1/notification',
    list: '/v1/notification/list',
  },

  balance: {
    list: '/v1/balance/balances',
    logs: '/v1/balance/list-logs',
    transfer: {
      history: '/v1/balance/transfer-history',
    },
    give: {
      history: '/v1/balance/give-history',
    },
    fund: '/v1/fund/balances',
  },

  user: {
    profile: '/v1/user/profile',
    login: '/v1/user/login',
    register: '/v1/user/register',
    requestRegisterCode: '/v1/user/send-register-code',
    checkUsername: '/v1/user/check-username',
    checkReferralId: '/v1/user/check-referral',
    requestResetPwdCode: '/v1/user/send-reset-password-code',
    resetPassword: '/v1/user/reset-password',

    root: '/v1/user',
    info: '/v1/user/info',
    list: '/v1/user/list',
    status: '/v1/user/status',
    disableGa: '/v1/user/disable-ga',
    withdrawStatus: '/v1/user/withdrawal-status',
    affiliate: '/v1/affiliate/profile',
  },

  admin: {
    login: '/v1/admin/login',
    profile: '/v1/admin/profile',
    password: '/v1/admin/password',
    ga: '/v1/admin/ga',
  },

  adminUser: {
    root: '/v1/admin-user',
    list: '/v1/admin-user/list',
    role: '/v1/admin-user/role',
    password: '/v1/admin-user/password',
  },

  adminRole: {
    root: '/v1/admin-role',
    list: '/v1/admin-role/list',
    scopes: '/v1/admin-role/scopes',
  },

  coin: {
    root: '/v1/coin',
    list: '/v1/coin/list',
  },

  wallet: {
    transactions: '/v1/wallet/list-transactions',
    approveWithdraw: '/v1/wallet/approve-withdrawal',
    cancelWithdraw: '/v1/wallet/cancel-withdrawal',
    hardUpdateWithdraw: '/v1/wallet/hard-update-withdrawal',
    wallets: '/v1/wallet/wallets',
    balancesList: '/v1/wallet/list-balances',
    logs: '/v1/wallet/logs',
    balances: '/v1/wallet/balances',
  },
  promotion: {
    root: '/v1/promotion',
    list: '/v1/promotion/list',
    genCode: '/v1/promotion/gen-code',
  },
  partner: {
    list: '/v1/agency/tx/list',
    com: '/v1/agency/com-tx/list',
  },
  systemSetting: {
    agencyPrice: '/v1/system-setting',
    updateBalanceHistory: '/v1/system-setting/history/list',
  },
  constant: {
    enums: '/v1/constants/enums',
  },
  game: {
    root: '/v1/game',
    list: '/v1/game/list',
    roundHistory: '/v1/game/round-history',
    tradeHistory: '/v1/game/play-history',
    roundDetail: '/v1/game/round/detail',
    dashboardOverview: '/v1/game/dashboard/overview',
    dailyOverview: '/v1/game/dashboard/daily-overview',
    dailyTradingOverview: '/v1/game/dashboard/daily-trading-overview',
  },
};

export default endpoints;
