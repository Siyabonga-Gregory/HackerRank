// https://www.hackerrank.com/challenges/happy-ladybugs/problem

const happyLadybugs = ([...chars]) => {
  const isLadyBug = char => char !== '_';

  const isAllLadyBugsHappyPossible = chars.every((char, charIdx) => {
    if (!isLadyBug(char)) return true;

    const isLadyBugHappyPossible = chars.some((otherChar, otherCharIdx) => {
      if (charIdx === otherCharIdx || char !== otherChar) return false;

      const isAdjacentToSameColor = Math.abs(charIdx - otherCharIdx) === 1;
      const isAtLeastOneSpace = chars.some(char => !isLadyBug(char));

      return isAdjacentToSameColor || isAtLeastOneSpace;
    });

    return isLadyBugHappyPossible;
  });

  return isAllLadyBugsHappyPossible ? 'YES' : 'NO';
};
