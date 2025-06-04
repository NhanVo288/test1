const getLabelByBalanceType = (type) => {
  if (!type) return '';

  switch (type) {
    case 'KPAY':
      return '041';
    case 'POINT':
      return '042';
    case 'SHOPPING':
      return '043';
    case 'REFERRAL_COM':
      return '044';
    case 'ROLLUP_COM':
      return '045';
    case 'WORK_COM':
      return '046';
    case 'LEVEL_COM':
      return '047';
    case 'POSITION_COM':
      return '048';
    case 'CENTER_STAR1':
      return '049';
    case 'CENTER_STAR2':
      return '050';
    case 'COM':
      return '051';
    case 'WALLET':
      return '052';
    case 'KMALL':
      return '053';
    default:
      return '';
  }
};

export default getLabelByBalanceType;
