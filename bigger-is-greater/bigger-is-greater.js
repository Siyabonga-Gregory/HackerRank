// https://www.hackerrank.com/challenges/bigger-is-greater

const biggerIsGreater = (str) => {
  const NO_ANSWER = 'no answer';
  let chars = [...str];
  const i = chars.reduce(
    (accum, char, idx) => (idx === 0 || chars[idx - 1] >= char ? accum : idx),
    -1
  );
  if (i === -1) return NO_ANSWER;
  const pivot = chars[i - 1];
  const j = chars.reduce(
    (accum, char, idx) => (idx >= i && char > pivot ? idx : accum),
    -1
  );
  chars[i - 1] = chars[j];
  chars[j] = pivot;
  const head = chars.slice(0, i);
  const tail = chars.slice(i).reverse();
  const ret = [...head, ...tail].join('');
  return ret === str ? NO_ANSWER : ret;
};
