// https://www.hackerrank.com/challenges/strong-password/problem

const getCharArrs = () => {
  const numbers = '0123456789';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialCharacters = '!@#$%^&*()-+';
  return [[...numbers], [...lowerCase], [...upperCase], [...specialCharacters]];
};

function minimumNumber(n, password) {
  const isLongEnough = password.length >= 6;

  const [isValid, typesOfCharMissing] = (() => {
    let typesOfCharMissing = 0;

    const hasCorrectChars = (() => {
      const charArrs = getCharArrs();
      for (const charArr of charArrs) {
        const passesTest = [...password].some(char =>
          charArr.some(otherChar => otherChar === char)
        );
        if (!passesTest) typesOfCharMissing++;
      }

      return typesOfCharMissing === 0;
    })();

    const isValid = isLongEnough && hasCorrectChars;
    return [isValid, typesOfCharMissing];
  })();

  if (isValid) return 0;

  const minChangesToMake = (() => {
    const howManyCharShort = isLongEnough ? 0 : 6 - password.length;
    const needsMoreChanges = howManyCharShort > typesOfCharMissing;
    return needsMoreChanges ? howManyCharShort : typesOfCharMissing;
  })();

  return minChangesToMake;
}
