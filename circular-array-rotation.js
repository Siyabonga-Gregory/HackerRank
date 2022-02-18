// https://www.hackerrank.com/challenges/circular-array-rotation/problem

function circularArrayRotation(arr, rotations, queries) {
  let rotationsToPerform = rotations % arr.length;
  const rotateArr = () => arr.unshift(arr.pop());

  while (rotationsToPerform > 0) {
    rotateArr();
    rotationsToPerform--;
  }

  const queryVals = queries.map(query => {
    const val = arr[query];
    return val;
  });

  return queryVals;
}
