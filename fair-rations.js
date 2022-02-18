// https://www.hackerrank.com/challenges/fair-rations/problem

const fairRations = loafTotals => {
  const totalLoaves = loafTotals.reduce(
    (totalLoaves, loafTotal) => totalLoaves + loafTotal
  );
  const isOdd = num => num % 2 !== 0;
  if (isOdd(totalLoaves)) return 'NO';

  let loavesToDistribute = 0;

  loafTotals.forEach((loafTotal, loafTotalIndex) => {
    if (!isOdd(loafTotal)) return;

    for (
      let laterLoafTotalIndex = loafTotalIndex + 1;
      laterLoafTotalIndex < loafTotals.length;
      laterLoafTotalIndex++
    ) {
      const laterLoafTotal = loafTotals[laterLoafTotalIndex];
      if (!isOdd(laterLoafTotal)) continue;

      // make all intermediate totals even
      // so we won't worry about them as we loop
      for (let index = loafTotalIndex; index <= laterLoafTotalIndex; index++) {
        loafTotals[index] = 2;
      }

      const distance = Math.abs(loafTotalIndex - laterLoafTotalIndex);
      const loavesToMakeEven = distance * 2;
      loavesToDistribute += loavesToMakeEven;
      break;
    }
  });

  return loavesToDistribute;
};
