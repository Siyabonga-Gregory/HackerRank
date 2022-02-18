// https://www.hackerrank.com/challenges/encryption/problem

function encryption(str) {
  const spacelessStr = [...str].filter(char => char !== '');

  const possibleRowAndColumnLengths = (() => {
    const { length } = spacelessStr;
    const lengthRoot = Math.sqrt(length);
    const floor = Math.floor(lengthRoot);
    const ceil = Math.ceil(lengthRoot);

    let possibleValues = [];
    for (let possibleValue = floor; possibleValue <= ceil; possibleValue++)
      possibleValues.push(possibleValue);
    return possibleValues;
  })();

  const [rowLength, colLength] = (() => {
    const isOnlyOneLengthToChoose = possibleRowAndColumnLengths.length < 2;
    let [rLength] = possibleRowAndColumnLengths;
    const cLength = isOnlyOneLengthToChoose
      ? possibleRowAndColumnLengths[0]
      : possibleRowAndColumnLengths[1];

    const isValid = rLength * cLength >= spacelessStr.length;

    if (!isValid) rLength = cLength;

    return [rLength, cLength];
  })();

  const rows = (() => {
    let spacelessCopy = [...spacelessStr];
    let rowsToReturn = [];

    for (let i = 0; i < rowLength; i++) {
      const row = spacelessCopy.splice(0, colLength).join('');
      rowsToReturn = rowsToReturn.concat(row);
    }

    return rowsToReturn;
  })();

  const cols = (() => {
    const { length: maxColLength } = rows[0];

    let colsToReturn = [];

    for (let i = 0; i < maxColLength; i++) {
      const col = rows.reduce((newCol, row, _) => {
        const letter = row[i];
        return letter ? `${newCol}${letter}` : newCol;
      }, '');

      colsToReturn = [...colsToReturn, col];
    }

    return colsToReturn;
  })();

  const encodedStr = cols.join(' ');
  return encodedStr;
}
