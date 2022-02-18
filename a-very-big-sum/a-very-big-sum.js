// https://www.hackerrank.com/challenges/a-very-big-sum/problem

// declarative, immutable, implicit return
const aVeryBigSum = ar => ar.reduce((total, number) => total + number);

// imperative, mutable, explicit return
function aVeryBigSum(ar) {
  let total = 0;
  for (let num of ar) {
    total += num;
  }
  return total;
}
