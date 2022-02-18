// https://www.hackerrank.com/challenges/plus-minus/problem

const plusMinus = integers => {
  let plusCounter = 0;
  let minusCounter = 0;
  let zeroCounter = 0;

  integers.forEach(integer => {
    switch (true) {
      case integer > 0:
        return plusCounter++;
      case integer < 0:
        return minusCounter++;
      default:
        return zeroCounter++;
    }
  });

  const { length } = integers;
  [plusCounter, minusCounter, zeroCounter].forEach(counter => {
    console.log(counter / length);
  });
};
