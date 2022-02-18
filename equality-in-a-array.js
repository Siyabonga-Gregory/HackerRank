// https://www.hackerrank.com/challenges/equality-in-a-array/problem

const equalizeArray = arr => {
  const highestFreq = (() => {
    let numberToFreq = {};

    arr.forEach(num => {
      const isNumberInDict = numberToFreq[num];
      isNumberInDict ? numberToFreq[num]++ : (numberToFreq[num] = 1);
    });

    return Object.values(numberToFreq).reduce((highestFreq, freq) => {
      const isHighestFreq = freq > highestFreq;
      return isHighestFreq ? freq : highestFreq;
    }, 0);
  })();

  return arr.length - highestFreq;
};
