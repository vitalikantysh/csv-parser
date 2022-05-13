import fs from 'fs';
import readline from 'readline';

(async () => {
  const [csvPath, columnNumber, query] = process.argv.slice(2);

  if (!columnNumber) {
    throw new Error('Enter column number');
  }

  const lowercasedFindQuery = query ? query.toLowerCase() : '';

  const fileStream = fs.createReadStream(csvPath);

  const readlineAsyncIterator = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const csv = [];

  for await (const row of readlineAsyncIterator) {
    const splittedRow = row.split(",");

    const lowercasedQueryInRow = splittedRow[columnNumber].toLowerCase();

    if (lowercasedQueryInRow === lowercasedFindQuery) {
      console.log(row);
      return;
    }

    csv.push(row);
  }

  console.log(csv.join('\n'));
})();
