// https://www.hackerrank.com/challenges/bon-appetit/problem

// declarative
function bonAppetit(n, k, b, ar) {
  const actual =
    ar.reduce(
      (result, item, index) => (index !== k ? (result += item) : result),
      0
    ) / 2;
  const difference = b - actual;
  return difference === 0 ? "Bon Appetit" : difference;
}

// imperative
function bonAppetit(n, k, b, ar) {
  let actual = 0;
  for (let i = 0; i < ar.length; i++) {
    if (i !== k) {
      actual += ar[i];
    }
  }
  actual = actual / 2;
  const difference = b - actual;
  if (difference === 0) {
    return "Bon Appetit";
  } else {
    return difference;
  }
}
