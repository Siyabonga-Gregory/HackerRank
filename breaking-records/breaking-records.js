// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

const breakingRecords = scores => {
  const records = scores.reduce(
    ({ high, low, newHighs, newLows }, score) => ({
      high: score > high ? score : high,
      low: score < low ? score : low,
      newHighs: score > high ? ++newHighs : newHighs,
      newLows: score < low ? ++newLows : newLows
    }),
    { high: scores[0], low: scores[0], newHighs: 0, newLows: 0 }
  );

  const { newHighs, newLows } = records;

  return [newHighs, newLows];
};
