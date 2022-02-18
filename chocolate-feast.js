// https://www.hackerrank.com/challenges/chocolate-feast/problem

function chocolateFeast(initialMoney, chocBarCost, wrappersFactor) {
  const isFreeBar = wrappersNum => wrappersNum >= wrappersFactor;
  const hasEnoughMoney = moneyTotal => moneyTotal >= chocBarCost;

  let totalChocolateBars = Math.floor(initialMoney / chocBarCost);
  let currentMoneyTotal = initialMoney - totalChocolateBars * chocBarCost;
  let totalWrappers = totalChocolateBars;

  const buyChocolateBar = () => {
    currentMoneyTotal -= chocBarCost;
  };
  const eatChocolateBar = () => {
    totalChocolateBars++;
    totalWrappers++;
  };
  const tradeWrappers = () => {
    totalWrappers -= wrappersFactor;
  };
  let isLookingForChocolateBars = true;

  while (isLookingForChocolateBars) {
    hasEnoughMoney(currentMoneyTotal)
      ? (buyChocolateBar(), eatChocolateBar())
      : isFreeBar(totalWrappers)
        ? (tradeWrappers(), eatChocolateBar())
        : (isLookingForChocolateBars = false);
  }

  return totalChocolateBars;
}

function chocolateFeast(initialMoney, chocBarCost, wrappersFactor) {
  const isFreeBar = totalWrappersNum => totalWrappersNum >= wrappersFactor;
  const hasEnoughMoney = moneyTotal => moneyTotal >= chocBarCost;

  let totalChocolateBars = Math.floor(initialMoney / chocBarCost);
  let currentMoneyTotal = initialMoney - totalChocolateBars * chocBarCost;
  let totalWrappers = totalChocolateBars;
  let isLookingForChocolateBars = true;

  while (isLookingForChocolateBars) {
    if (hasEnoughMoney(currentMoneyTotal)) {
      totalChocolateBars++;
      totalWrappers++;
      currentMoneyTotal -= chocBarCost;
    } else {
      if (isFreeBar(totalWrappers)) {
        totalChocolateBars++;
        totalWrappers -= wrappersFactor;
        totalWrappers++;
      } else {
        isLookingForChocolateBars = false;
      }
    }
  }

  return totalChocolateBars;
}
