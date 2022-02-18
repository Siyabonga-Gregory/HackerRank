// https://www.hackerrank.com/challenges/mini-max-sum/problem

const miniMaxSum = posIntegers => {
  const sums = posIntegers.map((posInteger, i) => {
    return posIntegers.reduce((sum, otherPosInteger, j) => {
      const isSameIndex = i === j;
      return isSameIndex ? sum : sum + otherPosInteger;
    }, 0);
  });

  let miniSum;
  let maxSum;

  sums.forEach(sum => {
    if (!miniSum) miniSum = sum;
    if (!maxSum) maxSum = sum;

    const isMiniSum = sum < miniSum;
    if (isMiniSum) miniSum = sum;

    const isMaxSum = sum > maxSum;
    if (isMaxSum) maxSum = sum;
  });

  console.log(miniSum, maxSum);
};
