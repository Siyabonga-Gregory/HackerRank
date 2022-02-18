// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

const catAndMouse = (x, y, z) => {
  const mouseADist = Math.abs(z - x);
  const mouseBDist = Math.abs(z - y);
  return mouseADist < mouseBDist
    ? 'Cat A'
    : mouseBDist < mouseADist
      ? 'Cat B'
      : 'Cat C';
};

const catAndMouse = (x, y, z) => {
  const mouseADistance = Math.abs(z - x);
  const mouseBDistance = Math.abs(z - y);
  switch (true) {
    case mouseADistance < mouseBDistance:
      return 'Cat A';
    case mouseBDistance < mouseADistance:
      return 'Cat B';
    default:
      return 'Mouse C';
  }
};
