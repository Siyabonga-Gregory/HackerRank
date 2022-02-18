// https://www.hackerrank.com/challenges/kaprekar-numbers/problem

function kaprekarNumbers(min, max) {
  const range = (() => {
    let nums = [];
    for (let num = min; num <= max; num++) nums.push(num);
    return nums;
  })();

  const kNums = range.filter(possibleKNum => {
    const sum = (() => {
      const squared = possibleKNum * possibleKNum;
      const squaredStr = String(squared);
      const border = squaredStr.length / 2;
      const first = Number(squaredStr.slice(0, border));
      const second = Number(squaredStr.slice(border));
      return first + second;
    })();

    const isKNum = sum === possibleKNum;
    return isKNum;
  });

  console.log(
    kNums.length
      ? kNums.reduce((kNumsStr, kNum) => `${kNumsStr} ${kNum}`)
      : 'INVALID RANGE'
  );
}
