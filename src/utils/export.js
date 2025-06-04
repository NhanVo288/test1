export function exportCSV(data, config, name = 'export') {
  const rows = [];

  const headers = config.map((col) => col.label);
  rows.push(headers);
  data.forEach((item) => {
    const row = config.map((col) => {
      if (typeof col.value === 'function') {
        return col.value(item);
      }
      return item[col.value];
    });
    rows.push(row);
  });

  const csvContent = rows.map((row) => row.join(',')).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${name}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
