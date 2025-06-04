export default function csvToJson(csv) {
  if (!csv) return null;

  const lines = csv.split('\n');
  const result = [];

  const headers = lines[0].split(',');

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentLine = lines[i].split(',');

    headers.forEach((header, index) => {
      obj[header.trim()] = currentLine[index].trim();
    });

    result.push(obj);
  }

  return JSON.stringify(result, null, 2);
}
