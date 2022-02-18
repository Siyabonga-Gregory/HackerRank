// https://www.hackerrank.com/challenges/permutation-equation/problem

const permutationEquation = nums =>
  [...nums].sort((a, b) => a - b).map(num => {
    const nextNumIdx = nums.indexOf(num) + 1;
    const val = nums.indexOf(nextNumIdx) + 1;
    return val;
  });
