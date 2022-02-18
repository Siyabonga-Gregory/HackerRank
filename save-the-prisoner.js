// https://www.hackerrank.com/challenges/save-the-prisoner/problem

const saveThePrisoner = (totalPrisoners, totalCandy, firstPrisoner) => {
  // firstPrisoner eats 1 candy
  const initialFinalEater = firstPrisoner + totalCandy - 1;

  // check if we have to start another revolution
  const willReturnToFirstChair = initialFinalEater > totalPrisoners;

  // if we don't have to start another revolution, then our first
  // attempt to identify the final prisoner is correct
  if (!willReturnToFirstChair) return initialFinalEater;

  // remainder is shortcut to help us skip calculations
  const prisonersFromStart = initialFinalEater % totalPrisoners;

  // the only case where the remainder is zero is where the final eater
  // sits in the last chair
  const isEaterLastPrisoner = prisonersFromStart === 0;

  return isEaterLastPrisoner ? totalPrisoners : prisonersFromStart;
};
