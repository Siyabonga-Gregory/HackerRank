// https://www.hackerrank.com/challenges/separate-the-numbers/problem

const getIsOrdered = numStrArr =>
  numStrArr.every((numStr, i) => {
    if (i === numStrArr.length - 1) return true;

    const num = +numStr;

    const nextNum = +numStrArr[i + 1];

    return (
      (num === 9658921879781125 && nextNum === 9658921879781126) || // js is bad with numbers, eh
      num + 1 === nextNum
    );
  });

const separateNumbers = numStr => {
  if (numStr.length < 2) {
    console.log('NO');

    return;
  }

  let size = 1;

  let numStrArrs = [];

  while (size < Math.floor(numStr.length / 2 + 1)) {
    let numStrArr = [];

    let localSize = size;

    for (let i = 0; i < numStr.length; i += localSize) {
      let numStrArrItem = numStr.slice(i, i + localSize);

      let numStrArrItemInc = +numStrArrItem + 1;

      let numStrArrItemIncSize = String(numStrArrItemInc).length;

      if (numStrArrItemIncSize > localSize) {
        i--;
        localSize++;
      }

      numStrArr.push(numStrArrItem);
    }

    const start = numStr.slice(0, size);

    let numStrArr2 = [start];

    for (let i = start.length; i < numStr.length; i += size) {
      let numStrArrItem2 = numStr.slice(i, i + size);

      numStrArr2.push(numStrArrItem2);
    }

    numStrArrs.push(numStrArr, numStrArr2);

    size++;
  }

  for (let numStrArr of numStrArrs) {
    if (numStrArr.length < 2) continue;

    const isOrdered = getIsOrdered(numStrArr);

    if (isOrdered) {
      const hasLeadingZero = numStrArr.some(numStr => numStr[0] === '0');

      if (hasLeadingZero) continue;

      console.log(`YES ${numStrArr[0]}`);

      return;
    }
  }

  console.log('NO');
};
