// https://www.hackerrank.com/challenges/kangaroo/problem

const kangaroo = (xLoc, xJump, yLoc, yJump) => {
  const [behindJump, aheadJump] = xLoc > yLoc ? [yJump, xJump] : [xJump, yJump];

  if (aheadJump >= behindJump) return 'NO';

  const [behind, ahead] = [xLoc, yLoc].sort();

  const isYes = (function getIsYes(currBehind, currAhead) {
    return currAhead <= currBehind
      ? currAhead === currBehind
      : getIsYes(currBehind + behindJump, currAhead + aheadJump);
  })(behind, ahead);

  return isYes ? 'YES' : 'NO';
};
