// https://www.hackerrank.com/challenges/alternating-characters/problem

const alternatingCharacters = ([...chars]) => {
  const isNextMatching = index => chars[index] === chars[index + 1];
  for (var i = 0, deletionsTotal = 0; i < chars.length; )
    while (isNextMatching(i++)) deletionsTotal++;
  return deletionsTotal;
};
