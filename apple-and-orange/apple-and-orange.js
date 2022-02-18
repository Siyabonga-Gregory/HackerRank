// https://www.hackerrank.com/challenges/apple-and-orange/problem

const countApplesAndOranges = (
  houseStart,
  houseEnd,
  aCoord,
  oCoord,
  aDistances,
  oDistances
) => {
  const hitTotals = [
    { distances: aDistances, coord: aCoord },
    { distances: oDistances, coord: oCoord }
  ].map(({ distances, coord }) =>
    distances.reduce((total, dist) => {
      const fruitCoord = coord + dist;
      const didHit = fruitCoord >= houseStart && fruitCoord <= houseEnd;
      return didHit ? ++total : total;
    }, 0)
  );

  hitTotals.forEach(hitTotal => console.log(hitTotal));
};
