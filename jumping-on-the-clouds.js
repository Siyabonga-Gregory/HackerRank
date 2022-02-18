// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

const jumpingOnClouds = clouds => {
  let jumpsTotal = 0;

  for (let cloudIdx = 0; cloudIdx < clouds.length - 1; ) {
    const isMaxJumpPossible = (() => {
      const isThereTwoCloudsLeft = cloudIdx !== clouds.length - 1;
      const isMaxJumpCloudSafe = clouds[cloudIdx + 2] !== 1;
      return isThereTwoCloudsLeft && isMaxJumpCloudSafe;
    })();

    cloudIdx += isMaxJumpPossible ? 2 : 1;
    jumpsTotal++;
  }

  return jumpsTotal;
};
