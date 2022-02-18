// https://www.hackerrank.com/challenges/absolute-permutation/problem

// the final case breaks, though when I locally debug the output, it works
// it's probably HackerRank IO issue.

function absolutePermutation(max, factor) {
  const isSolutionPossible = max % factor === 0;
  const factorIsZero = factor === 0;
  if (!isSolutionPossible && !factorIsZero) return [-1];

  const oneToMax = Array.from(Array(max)).map((_, i) => i + 1);
  if (factorIsZero) return oneToMax;

  const posOrNegFactorIterator = (function*() {
    let returnValue = factor;
    while (true) {
      for (let i = 0; i < factor; i++) {
        yield returnValue;
      }
      returnValue = -returnValue;
    }
  })();

  const permutated = oneToMax.map(num => {
    const { value } = posOrNegFactorIterator.next();
    const newNum = num + value;
    return newNum;
  });

  return permutated;
}
