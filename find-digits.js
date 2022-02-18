// https://www.hackerrank.com/challenges/find-digits/problem

const findDigits = integer => {
  const integerStr = String(integer);

  const subIntFactorsOfInteger = [...integerStr].filter(subIntStr => {
    const subInt = Number(subIntStr);
    const isSubIntFactorOfInteger = integer % subInt === 0;
    return isSubIntFactorOfInteger;
  });

  return subIntFactorsOfInteger.length;
};

const findDigits = integer =>
  integer
    .toString()
    .split('') // array of subInts
    .filter(subInt => integer % subInt === 0).length; // return only factors
