// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

const designerPdfViewer = (alphabetHeights, word) => {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  let tallest = 0;

  [...word].forEach(wordLetter => {
    const alphabetHeightIndex = alphabet.indexOf(wordLetter);
    const wordLetterHeight = alphabetHeights[alphabetHeightIndex];
    const isTallest = wordLetterHeight > tallest;
    if (isTallest) tallest = wordLetterHeight;
  });

  const width = word.length;

  return tallest * width;
};
