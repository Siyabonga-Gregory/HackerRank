// https://www.hackerrank.com/challenges/beautiful-triplets/problem

const beautifulTriplets = (beautifulDifference, nums) => {
  const isBeautifulDifference = (moreOuterLoopNum, moreInnerLoopNum) =>
    moreInnerLoopNum - moreOuterLoopNum === beautifulDifference;

  let beautifulTripletsTotal = 0;

  const outerLoopNums = nums.slice(0, nums.length - 2);
  for (const [outerLoopNumIdx, outerLoopNum] of outerLoopNums.entries()) {
    const middleLoopNums = nums.slice(outerLoopNumIdx + 1);
    for (const [middleLoopNumIdx, middleLoopNum] of middleLoopNums.entries()) {
      if (!isBeautifulDifference(outerLoopNum, middleLoopNum)) continue;

      const innerLoopNums = middleLoopNums.slice(middleLoopNumIdx + 1);
      for (const innerLoopNum of innerLoopNums) {
        if (isBeautifulDifference(middleLoopNum, innerLoopNum))
          beautifulTripletsTotal++;
      }
    }
  }

  return beautifulTripletsTotal;
};
