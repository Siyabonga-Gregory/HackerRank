// https://www.hackerrank.com/challenges/counting-valleys/problem

const countingValleys = (_, steps) => {
  let position = 0;
  let valleySteps = 0;

  return [...steps].reduce((valleyCount, step) => {
    const isUpStep = step === 'U';
    isUpStep ? position++ : position--;

    const isValley = position < 0;
    if (isValley) ++valleySteps;

    const isSeaLevel = position === 0;
    if (isSeaLevel) {
      const hasBeenInValley = valleySteps > 0;
      if (hasBeenInValley) {
        valleySteps = 0;
        return ++valleyCount;
      }
    }

    return valleyCount;
  }, 0);
};
