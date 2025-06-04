import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrency(number) {
  const format = number ? numeral(number).format('$0,0.00') : '0';

  return result(format, '.00');
}

export function fPercent(number) {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '0%';

  return result(format, '.0');
}

export function fShortenNumber(number) {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

export function fData(number) {
  const format = number ? numeral(number).format('0.0 b') : '';

  return result(format, '.0');
}

function result(format, key = '.00') {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}

export function fAmount(number, fix) {
  try {
    let str = `${number}`;
    if (str.indexOf('e') >= 0) {
      str = `${number.toFixed(8)}`;
    }
    const deleteText = str.replace(/[^\d.]/g, '');
    const x = deleteText.split('.');
    let x1 = x[0];
    const x2 = x[1];
    const x3 = x.length > 1 ? `.${x2.slice(0, fix || 8)}` : '';
    if (!x1) x1 = '0';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1,$2');
    }
    const rs = (x1 + x3).replace(/^0+(?!\.|$)/, '').replace(/^\./, '');
    return `${number < 0 ? '-' : ''}${rs}`;
  } catch (e) {
    return '0.00';
  }
}

export function fNumber(number = '') {
  if (number.toString().indexOf('e') >= 0) {
    number = `${parseFloat(number).toFixed(number.toString().slice(-1))}`;
  }

  // Remove non-numeric and non-decimal characters
  number = number.toString().replace(/[^\d.-]/g, '');

  if (!number || number === '-') return number;

  // Split integer and decimal parts
  const [integerPart, decimalPart] = number.split('.');
  // Format the integer part
  let formattedIntegerPart = new Intl.NumberFormat('en-US').format(parseInt(integerPart || 0, 10));
  // If there's a decimal part, append it after the integer part
  if (decimalPart !== undefined) {
    formattedIntegerPart += `.${decimalPart}`;
  }

  return formattedIntegerPart;
}
