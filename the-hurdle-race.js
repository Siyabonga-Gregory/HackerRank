// https://www.hackerrank.com/challenges/the-hurdle-race/problem

const hurdleRace = (maxJump, hurdleHeights) => {
  const maxHeight = hurdleHeights.reduce((maxHeight, hurdleHeight) => {
    const isNewMaxHeight = hurdleHeight > maxHeight;
    return isNewMaxHeight ? hurdleHeight : maxHeight;
  }, 0);

  const doesNeedPotion = maxHeight > maxJump;
  if (!doesNeedPotion) return 0;

  const potionsToDrink = maxHeight - maxJump;
  return potionsToDrink;
};
