// https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(price, subtractFactor, priceFloor, totalMoney) {
  let totalGames = 0;
  const hasEnoughMoney = p => totalMoney >= p;

  if (!hasEnoughMoney(price)) return totalGames;

  while (price > priceFloor) {
    if (!hasEnoughMoney(price)) return totalGames;
    totalGames++;
    totalMoney -= price;
    price -= subtractFactor;
  }

  while (hasEnoughMoney(priceFloor)) {
    totalGames++;
    totalMoney -= priceFloor;
  }

  return totalGames;
}

// alternative
const howManyGames = (
  gamePrice,
  subtractFactor,
  gamePriceFloor,
  totalMoney
) => {
  const isGamePriceMoreThanFloor = () => gamePrice > gamePriceFloor;
  const hasEnoughMoney = price => totalMoney >= price;

  let totalGames = 0;

  const buyGame = price => {
    totalMoney -= price;
    totalGames++;
  };

  const decrementGamePrice = () => (gamePrice -= subtractFactor);

  while (isGamePriceMoreThanFloor()) {
    if (!hasEnoughMoney(gamePrice)) return totalGames;
    buyGame(gamePrice);
    decrementGamePrice();
  }

  while (hasEnoughMoney(gamePriceFloor)) {
    buyGame(gamePriceFloor);
  }

  return totalGames;
};
