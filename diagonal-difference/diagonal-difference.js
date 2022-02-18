const diagonalDifference = matrix => {
  const primaryDiagonal = matrix.map((row, i) => {
    const primaryDiagonolCharacter = row[i];
    return primaryDiagonolCharacter;
  });

  const secondaryDiagonal = (() => {
    const reversedMatrix = [...matrix].reverse();
    return reversedMatrix.map((row, i) => {
      const secondaryDiagonalCharacter = row[i];
      return secondaryDiagonalCharacter;
    });
  })();

  const getSum = arr => arr.reduce((total, num) => total + num, 0);

  const primarySum = getSum(primaryDiagonal);
  const secondarySum = getSum(secondaryDiagonal);

  return Math.abs(primarySum - secondarySum);
};
