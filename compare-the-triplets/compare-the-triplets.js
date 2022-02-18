// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(aliceRatings, bobRatings) {
  const ratingPairs = aliceRatings.map((aliceRating, ratingIndex) => {
    const bobRating = bobRatings[ratingIndex];
    return [aliceRating, bobRating];
  });

  let alicePoints = 0;
  let bobPoints = 0;

  ratingPairs.forEach(([aliceRating, bobRating]) => {
    const isAlicePoint = aliceRating > bobRating;
    if (isAlicePoint) alicePoints++;

    const isBobPoint = bobRating > aliceRating;
    if (isBobPoint) bobPoints++;
  });

  return [alicePoints, bobPoints];
}
