export function convertToKoreaMidnightTimestamp(dateString) {
  const timestamp = Date.parse(dateString);
  const date = new Date(timestamp);

  // Lấy múi giờ Hàn Quốc
  const koreaOffset = 9 * 60; // GMT+09:00
  const localOffset = date.getTimezoneOffset(); // Múi giờ hiện tại của người dùng

  // Tính chênh lệch thời gian giữa múi giờ của người dùng và Hàn Quốc
  const differenceInMinutes = koreaOffset - localOffset;

  // Chuyển đổi thời gian về múi giờ Hàn Quốc
  const dateInKorea = new Date(date.getTime() + differenceInMinutes * 60 * 1000);

  // Đặt giờ, phút, giây về 00:00:00
  dateInKorea.setHours(0, 0, 0, 0);

  // Chuyển đổi lại thành timestamp
  return dateInKorea.getTime();
}
