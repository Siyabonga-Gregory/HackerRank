// https://www.hackerrank.com/challenges/the-birthday-bar/problem

const solve = (chocNums, dayOfBirth, monthOfBirth) => {
  const targetLength = monthOfBirth;
  const targetSum = dayOfBirth;

  const validChocNumSeqs = chocNums.filter((chocNum, chocNumIdx) => {
    const sliceEnd = chocNumIdx + targetLength;
    const chocNumSeq = chocNums.slice(chocNumIdx, sliceEnd);
    const chocNumSeqSum = chocNumSeq.reduce((sum, chocNum) => sum + chocNum, 0);
    const isValidSum = chocNumSeqSum === targetSum;
    return isValidSum;
  });

  return validChocNumSeqs.length;
};
