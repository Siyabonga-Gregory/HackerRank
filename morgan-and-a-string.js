// https://www.hackerrank.com/challenges/morgan-and-a-string/problem

const morganAndString = (xChars, yChars) => {
  const max = '{';
  [xChars, yChars] = [xChars, yChars].map(chars => chars + max);

  let lexMinCombo = '';
  for (
    let xIdx = 0, yIdx = 0;
    [xChars[xIdx], yChars[yIdx]].some(char => char !== max);

  ) {
    lexMinStr +=
      xChars.slice(xIdx) < yChars.slice(yIdx) ? xChars[xIdx++] : yChars[yIdx++];
  }
  return lexMinCombo;
};

// -----------------------------------------------------------------------------

// I extended the solution to solve for more than 2 strings
// utility fn to allow arrays to pass args
const flat = items => {
  let flattened = [];
  for (let item of items)
    !Array.isArray(item) ? flattened.push(item) : flattened.push(...flat(item));
  return flattened;
};

const getLexMinIdx = strings =>
  strings.reduce(
    (lexMinIdx, string, idx) => (string < strings[lexMinIdx] ? idx : lexMinIdx),
    0
  );

const morganAndString = (...strings) => {
  // settles ties
  const max = '{';
  strings = flat(strings).map(string => string + max);

  // each $strIdxToCharIdx index maps to $strings index to id a string
  // each respective $strIdxToCharIdx value tracks which character
  // of that string to compare next.
  // all start as 0 because we haven't compared any, yet
  let strIdxToCharIdx = strings.map(() => 0);

  // we are finished when every string's next character to compare is $max
  const isDone = () =>
    strIdxToCharIdx.every(
      (charIdx, strIdx) => strings[strIdx][charIdx] === max
    );

  let lexMinCombo = '';
  while (!isDone()) {
    // array of strings where each string starts with its next
    // character to compare
    const slices = strIdxToCharIdx.map((charIdx, strIdx) =>
      strings[strIdx].slice(charIdx)
    );

    // find the index of the lexicographically minimum string
    const strIdx = getLexMinIdx(slices);

    // grab the $charIdx of the string who "won"
    // and increment $charIdx to update it
    const charIdx = strIdxToCharIdx[strIdx]++;

    // add the "winning" character
    lexMinCombo += strings[strIdx][charIdx];
  }
  return lexMinCombo;
};
