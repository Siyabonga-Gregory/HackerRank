// https://www.hackerrank.com/challenges/picking-numbers/problem

// more explicit
const pickingNumbers = nums => {
  const validNumSeqs = nums.map((num, numIdx) => {
    const validNumSeq = [num];

    nums.forEach((otherNum, otherNumIdx) => {
      if (numIdx === otherNumIdx) return;

      const isValidNum = validNumSeq.every(validNum => {
        const difference = Math.abs(validNum - otherNum);
        return difference <= 1;
      });

      if (isValidNum) validNumSeq.push(otherNum);
    });

    return validNumSeq;
  });

  const longest = validNumSeqs.reduce((longest, validNumSeq) => {
    const { length } = validNumSeq;
    const isLongest = length > longest;
    return isLongest ? length : longest;
  }, 0);

  return longest;
};

// minimal code
const pickingNumbers = nums =>
  nums
    // returns array of `validNums` arrays
    .map((num, numIdx) =>
      nums.reduce(
        (validNums, otherNum, otherNumIdx) => {
          if (numIdx === otherNumIdx) return validNums; // skip same member in `nums`
          const isValidNum = validNums.every(
            validNum => Math.abs(validNum - otherNum) <= 1
          );
          return isValidNum ? validNums.concat(otherNum) : validNums;
        },
        [num] // start each validNums array with `num`
      )
    )
    // returns the longest of all the `validNums` arrays
    .reduce(
      (longest, validNums) =>
        validNums.length > longest ? validNums.length : longest,
      0
    );
