// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

const jumpingOnClouds = (clouds, jumpSize) => {
  let energy = 100;

  for (let cloudIdx = 0; cloudIdx < clouds.length; cloudIdx += jumpSize) {
    const cloud = clouds[cloudIdx];
    const isThunderCloud = cloud !== 0;
    isThunderCloud ? (energy -= 3) : energy--;
  }

  return energy;
};
