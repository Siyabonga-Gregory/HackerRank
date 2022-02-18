// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

const birthdayCakeCandles = candleHeights => {
  const tallest = candleHeights.reduce(
    (tallest, candleHeight) =>
      candleHeight > tallest ? candleHeight : tallest,
    0
  );

  const tallestCount = candleHeights.filter(
    candleHeight => candleHeight === tallest
  ).length;

  return tallestCount;
};

const birthdayCakeCandles = candleHeights => {
  let tallest = 0;

  for (const candleHeight of candleHeights) {
    const isTallest = candleHeight > tallest;
    if (isTallest) tallest = candleHeight;
  }

  let tallestCount = 0;

  for (const candleHeight of candleHeights) {
    const isEqualToTallest = candleHeight === tallest;
    if (isEqualToTallest) tallestCount++;
  }

  return tallestCount;
};
