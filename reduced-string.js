// https://www.hackerrank.com/challenges/reduced-string/problem

// recursive, no mutation
const super_reduced_string = letters => {
  const shouldReduceFurther = [...letters].some((letter, letterIdx) => {
    const nextLetter = letters[letterIdx + 1];
    return letter === nextLetter;
  });

  if (!shouldReduceFurther) return letters;

  let reducedLetters = '';

  [...letters].forEach((letter, letterIdx) => {
    const nextLetter = letters[letterIdx + 1];
    const isSame = letter === nextLetter;
    if (isSame) return;

    const shouldKeepLetter = (() => {
      const numOfSameLetters = (() => {
        let total = 1;
        for (
          let prevLetterIdx = letterIdx - 1;
          prevLetterIdx >= 0;
          prevLetterIdx--
        ) {
          const prevLetter = letters[prevLetterIdx];
          const isSame = letter === prevLetter;
          if (!isSame) break;
          total++;
        }
        return total;
      })();

      const isOdd = num => num % 2 !== 0;
      return isOdd(numOfSameLetters);
    })();

    if (shouldKeepLetter) reducedLetters = reducedLetters.concat(letter);
  });

  return reducedLetters ? super_reduced_string(reducedLetters) : 'Empty String';
};

// while loop, mutation
function super_reduced_string(s) {
  while (true) {
    let deleted = false;

    for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      const nextLetter = s[i + 1];
      const shouldDelete = letter === nextLetter;
      if (shouldDelete) {
        deleted = true;
        const start = s.slice(0, i);
        const end = s.slice(i + 2);
        s = `${start}${end}`;
        i++;
      }
    }

    if (!deleted) break;
  }

  return s ? s : 'Empty String';
}
