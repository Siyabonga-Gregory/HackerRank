// https://www.hackerrank.com/challenges/utopian-tree/problem

const utopianTree = growthCycleCount => {
  let height = 1;
  for (let growthCycle = 1; growthCycle <= growthCycleCount; growthCycle++) {
    const isEvenCycle = growthCycle % 2 === 0;
    isEvenCycle ? height++ : (height *= 2);
  }
  return height;
};
