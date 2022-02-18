// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

function caesarCipher(message, rotationNum) {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  const rotatedAlphabet = (() => {
    const firstLetterIdx = (() => {
      const isRotationNumInBounds = rotationNum < alphabet.length;
      if (isRotationNumInBounds) return rotationNum;

      const inBoundsRotationNum = rotationNum % alphabet.length;
      return inBoundsRotationNum;
    })();

    const rotatedStart = alphabet.slice(firstLetterIdx);
    const rotatedEnd = alphabet.slice(0, firstLetterIdx);
    return [...rotatedStart, ...rotatedEnd];
  })();

  const encryptedMessage = (() => {
    const encryptedMessageArr = [...message].map(char => {
      const isLetter = alphabet.some(letter => letter === char.toLowerCase());
      if (!isLetter) return char;

      const alphabetIdx = alphabet.indexOf(char.toLowerCase());
      const encryptedLetter = rotatedAlphabet[alphabetIdx];

      const isCapitalized = char.toUpperCase() === char;
      return isCapitalized ? encryptedLetter.toUpperCase() : encryptedLetter;
    });

    return encryptedMessageArr.join('');
  })();

  return encryptedMessage;
}
