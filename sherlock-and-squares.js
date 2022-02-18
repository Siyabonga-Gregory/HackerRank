// https://www.hackerrank.com/challenges/sherlock-and-squares/problem

const squares = (startInteger, endInteger) => {
  const firstRoot = Math.ceil(Math.sqrt(startInteger));
  const lastRoot = Math.floor(Math.sqrt(endInteger));

  let rootIntegersCount = 0;
  for (let root = firstRoot; root <= lastRoot; root++) {
    const isInteger = Number.isInteger(root);
    if (isInteger) rootIntegersCount++;
  }
  return rootIntegersCount;
};
