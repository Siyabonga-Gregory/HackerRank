// https://www.hackerrank.com/challenges/minimum-distances/problem

const minimumDistances = nums => {
  const distances = [];

  nums.forEach((num, i) => {
    nums.forEach((otherNum, j) => {
      const isSameIndex = i === j;
      if (isSameIndex) return;

      const isEqual = num === otherNum;
      if (isEqual) {
        const distance = Math.abs(i - j);
        distances.push(distance);
      }
    });
  });

  return distances.length ? Math.min(...distances) : -1;
};
