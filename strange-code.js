// https://www.hackerrank.com/challenges/strange-code/problem

const strangeCounter = maxTime => {
  // second member of each time-value map is always equal
  // pivot is that value
  const pivot = (() => {
    let elapsedTime = 3;
    let currentMaxValue = 3;
    while (elapsedTime < maxTime) {
      currentMaxValue *= 2;
      elapsedTime += currentMaxValue;
    }
    return currentMaxValue - 1;
  })();

  const maxTimeAndPivotDiff = Math.abs(maxTime - pivot);
  const maxTimeIsAfterPivot = maxTime > pivot;

  switch (true) {
    case !maxTimeAndPivotDiff:
      return pivot;
    case maxTimeIsAfterPivot:
      return pivot - maxTimeAndPivotDiff;
    default:
      return pivot + 1;
  }
};
