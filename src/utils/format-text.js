export const fAddress = (string, length = 4) => {
  if (string) {
    if (string.length > length * 2) {
      return `${string.slice(0, length)}......${string.slice(string.length - length)}`;
    }
    return string;
  }
  return '--/--';
};

export function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const sizeIndex = Math.floor(Math.log(bytes) / Math.log(1024));

  const formattedSize = (bytes / 1024 ** sizeIndex).toFixed(2);

  return `${formattedSize} ${units[sizeIndex]}`;
}
