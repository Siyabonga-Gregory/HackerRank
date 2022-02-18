// https://www.hackerrank.com/challenges/sock-merchant/problem

const sockMerchant = (_, colors) => {
  const colorToTotal = colors.reduce((ret, color) => {
    ret[color] = color in ret ? ++ret[color] : 1;

    return ret;
  }, {});

  const pairsTotals = Object.values(colorToTotal).map(
    total => (total % 2 === 0 ? total : --total) / 2
  );

  const pairsTotalsSum = pairsTotals.reduce(
    (ret, pairsTotal) => (pairsTotal >= 1 ? ret + pairsTotal : ret),
    0
  );

  return pairsTotalsSum;
};
