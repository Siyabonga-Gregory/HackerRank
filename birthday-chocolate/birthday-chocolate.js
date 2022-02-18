// https://www.hackerrank.com/challenges/the-birthday-bar/

const pipe = (...fns) => initialData =>
  fns.reduce((updatedData, fn) => fn(updatedData), initialData);

const filter = fn => arr => arr.filter(fn);

const length = arr => arr.length;

const solve = (chocNums, targetSum, targetLength) =>
  pipe(
    filter(
      (_, i) =>
        chocNums
          .slice(i, i + targetLength)
          .reduce((accum, n) => accum + n, 0) === targetSum
    ),
    length
  )(chocNums);
