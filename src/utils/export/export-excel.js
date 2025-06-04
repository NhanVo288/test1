// import * as XLSX from 'xlsx';

// export default function exportExcel(data, fileName = 'data') {
//   const worksheet = XLSX.utils.json_to_sheet(data);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//   XLSX.writeFile(workbook, `${fileName}.xlsx`);
// }

import * as XLSX from 'xlsx';

export default function exportExcel(data, config, name = 'data') {
  // Map data based on config
  const formattedData = data.map((row) => {
    const formattedRow = {};
    config.forEach((item) => {
      formattedRow[item.label] = typeof item.value === 'function' ? item.value(row) : row[item.value];
    });
    return formattedRow;
  });

  // Create a worksheet and workbook
  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Export the workbook
  XLSX.writeFile(workbook, `${name}.xlsx`);
}
