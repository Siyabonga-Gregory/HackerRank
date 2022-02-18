// https://www.hackerrank.com/challenges/repeated-string/problem

const repeatedString = (repeatedStr, takeUntil) => {
  const fullRepeatACount = (() => {
    const aCount = [...repeatedStr].filter(l => l === 'a').length;
    const repeatedMax = Math.floor(takeUntil / repeatedStr.length);
    return aCount * repeatedMax;
  })();

  const subStrACount = (() => {
    const subStrLength = takeUntil % repeatedStr.length;
    const subStr = repeatedStr.slice(0, subStrLength);
    let aCount = 0;
    for (const letter of [...subStr]) {
      const isA = letter === 'a';
      if (isA) aCount++;
    }
    return aCount;
  })();

  return fullRepeatACount + subStrACount;
};
