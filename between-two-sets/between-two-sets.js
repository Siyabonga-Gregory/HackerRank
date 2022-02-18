// https://www.hackerrank.com/challenges/between-two-sets/problem

// (leftNums: Number[], rightNums: Number[]) -> Number[]
const getTotalX = (leftNums, rightNums) => {
  const firstPossibleMiddleNum = leftNums[leftNums.length - 1];
  const [lastPossibleMiddleNum] = rightNums;

  let middleNums = [];

  for (
    let num = firstPossibleMiddleNum;
    num <= lastPossibleMiddleNum;
    num += firstPossibleMiddleNum
  ) {
    const isNumEvenlyDivisbleByAllLeftNums = leftNums.every(
      leftNum => num % leftNum === 0
    );

    const isNumAFactorForAllRightNums = rightNums.every(
      rightNum => rightNum % num === 0
    );

    const isMiddleNum =
      isNumEvenlyDivisbleByAllLeftNums && isNumAFactorForAllRightNums;

    if (isMiddleNum) middleNums = middleNums.concat(num);
  }

  return middleNums.length;
};
