// https://www.hackerrank.com/challenges/grid-challenge/problem?h_r=next-challenge&h_v=zen

const gridChallenge = grid => {
  const gridRowsAscOrder = grid.map(seq => [...seq].sort());

  const [colFirstLetters, ...rest] = gridRowsAscOrder;

  const isAllColsAscOrder = colFirstLetters.every((colFirstLetter, colIdx) => {
    const restOfCol = rest.map(rowAscOrder => rowAscOrder[colIdx]);
    const col = [colFirstLetter, ...restOfCol];
    const isColAscOrder = col.every(colLetter => colFirstLetter <= colLetter);
    return isColAscOrder;
  });

  return isAllColsAscOrder ? 'YES' : 'NO';
};
