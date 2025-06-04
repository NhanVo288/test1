import { format, formatDistanceToNow, getTime } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date, newFormat) {
  const fm = newFormat || 'dd/MM/yyyy';

  return date ? format(new Date(date), fm) : '--/--';
}

export function fDateTime(date, newFormat) {
  const fm = newFormat || 'yyyy-MM-dd HH:mm';

  return date ? format(new Date(date), fm) : '--/--';
}

export function fTimestamp(date) {
  return date ? getTime(new Date(date)) : '--/--';
}

export function fToNow(date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}

export function formatKoreaDate(unixTimestamp) {
  const date = new Date(unixTimestamp);

  const koreaOffset = 9 * 60; // GMT+09:00
  const localOffset = date.getTimezoneOffset();

  const differenceInMinutes = koreaOffset - localOffset;

  const dateInKorea = new Date(date.getTime() + differenceInMinutes * 60 * 1000);

  const year = dateInKorea.getFullYear();
  const month = String(dateInKorea.getMonth() + 1).padStart(2, '0');
  const day = String(dateInKorea.getDate()).padStart(2, '0');

  return `${day}/${month}/${year}`;
}

export function formatKoreaDateTime(unixTimestamp) {
  const date = new Date(unixTimestamp);

  const koreaOffset = 9 * 60; // GMT+09:00
  const localOffset = date.getTimezoneOffset();

  const differenceInMinutes = koreaOffset - localOffset;

  const dateInKorea = new Date(date.getTime() + differenceInMinutes * 60 * 1000);

  const year = dateInKorea.getFullYear();
  const month = String(dateInKorea.getMonth() + 1).padStart(2, '0');
  const day = String(dateInKorea.getDate()).padStart(2, '0');
  const hours = String(dateInKorea.getHours()).padStart(2, '0');
  const minutes = String(dateInKorea.getMinutes()).padStart(2, '0');
  const seconds = String(dateInKorea.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

// const formattedTime = formatTimestampToKoreaTime(1722963600000);
// console.log(formattedTime); // "2024-08-07 00:00:00"
