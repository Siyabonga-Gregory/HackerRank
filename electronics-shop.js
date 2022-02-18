// https://www.hackerrank.com/challenges/electronics-shop/problem

const getMoneySpent = (keyboardPrices, drivePrices, totalMoney) => {
  let mostExpensiveCombo = -1;

  keyboardPrices.forEach(keyboardPrice => {
    drivePrices.forEach(drivePrice => {
      const comboPrice = keyboardPrice + drivePrice;
      const isValid = comboPrice <= totalMoney;
      if (isValid) {
        const isMostExpensiveCombo = comboPrice > mostExpensiveCombo;
        if (isMostExpensiveCombo) mostExpensiveCombo = comboPrice;
      }
    });
  });

  return mostExpensiveCombo;
};
