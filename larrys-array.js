// https://www.hackerrank.com/challenges/larrys-array/problem

const larrysArray = nums => {
  let inversionTotal = 0;

  nums.forEach((num, numIdx) => {
    const nextNum = nums[numIdx + 1];
    if (!nextNum) return;

    const isSorted = (earlierNum, laterNum) => earlierNum <= laterNum;

    const laterNums = nums.slice(numIdx + 1);
    laterNums.forEach(laterNum => {
      if (!isSorted(num, laterNum)) inversionTotal++;
    });
  });

  const isPossible = inversionTotal % 2 === 0;

  return isPossible ? 'YES' : 'NO';
};
