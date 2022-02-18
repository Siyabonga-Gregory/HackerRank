// https://www.hackerrank.com/challenges/camelcase/problem

const camelcase = lettersStr => {
  const firstLetterIndexes = [...lettersStr].filter(letter => {
    const isCapitalized = letter.toUpperCase() === letter;
    return isCapitalized;
  });

  const isLettersStrOneWord = firstLetterIndexes.length === 0;
  if (isLettersStrOneWord) return 1;

  const words = (() => {
    const [firstCapitalizedLetterIdx] = firstLetterIndexes;
    const firstWord = lettersStr.slice(0, firstCapitalizedLetterIdx);

    // start with an array with the first word already in it
    return firstLetterIndexes.reduce(
      (words, firstLetterIndex, i) => {
        const nextWord = lettersStr.slice(
          firstLetterIndex,
          firstLetterIndexes[i + 1]
        );
        // times out if you `return words.concat(nextWord)`
        words.push(nextWord);
        return words;
      },
      [firstWord]
    );
  })();

  return words.length;
};

///////////////////////////////////

const getFirstLetterIndices = str =>
  [...str].reduce(
    (firstLetterIndices, letter, letterIdx) => {
      const isLetterUpperCase = letter === letter.toUpperCase();
      if (!isLetterUpperCase) return firstLetterIndices;

      firstLetterIndices.push(letterIdx);
      return firstLetterIndices;
    },
    [0] // start with 0 bc first index is first letter but won't be capitalized
  );

const getWords = (str, firstLetterIndices) =>
  firstLetterIndices.map((firstLetterIndex, currCollIndex) => {
    const word = str.substring(
      firstLetterIndex,
      firstLetterIndices[currCollIndex + 1]
    );
    return word;
  });

const camelcase = lettersStr =>
  getWords(lettersStr, getFirstLetterIndices(lettersStr)).length;
