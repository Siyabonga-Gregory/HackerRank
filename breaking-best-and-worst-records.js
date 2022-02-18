// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

const breakingRecords = scores => {
  let [high] = scores;
  let [low] = scores;
  let newHighs = 0;
  let newLows = 0;

  scores.forEach(score => {
    const newHigh = score > high;
    const newLow = score < low;
    if (newHigh) {
      high = score;
      newHighs++;
    }
    if (newLow) {
      low = score;
      newLows++;
    }
  });

  return [newHighs, newLows];
};
