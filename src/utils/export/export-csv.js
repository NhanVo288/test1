// export default function exportCSV(data, fileName = 'data.csv') {
//   const csvContent = data.map((row) => Object.values(row).join(',')).join('\n');
//   const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//   const link = document.createElement('a');
//   link.href = URL.createObjectURL(blob);
//   link.download = fileName;
//   link.click();
// }

export default function exportCSV(data, config, fileName = 'data.csv') {
  // Extract labels and keys/formatters from the config
  const headers = config.map((item) => item.label); // Labels for CSV headers
  const formatters = config.map((item) => item.value); // Formatters for each column

  // Generate CSV content
  const csvContent = [
    headers.join(','), // Add headers to the CSV
    ...data.map((row) => formatters.map((formatter) => (typeof formatter === 'function' ? formatter(row) : row[formatter])).join(',')),
  ].join('\n');

  // Create a Blob and trigger download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}
