// https://www.hackerrank.com/challenges/big-sorting/problem

const bigSorting = unsorted =>
  unsorted.sort((a, b) => {
    const aLength = a.length;
    const bLength = b.length;

    switch (true) {
      case aLength > bLength:
        return 1;
      case aLength === bLength:
        const aDigits = [...a];
        const bDigits = [...b];
        const isLessThanBothLengths = digitIdx =>
          digitIdx < aLength && digitIdx < bLength;

        for (let digitIdx = 0; isLessThanBothLengths(digitIdx); digitIdx++) {
          const aDigit = aDigits[digitIdx];
          const bDigit = bDigits[digitIdx];

          if (aDigit > bDigit) return 1;
          if (aDigit < bDigit) return -1;
        }

        return 0;
      default:
        return -1;
    }
  });
