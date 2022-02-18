// https://www.hackerrank.com/challenges/bomber-man/problem

function bomberMan(time, grid) {
  // no changes made
  if (time <= 1) return grid;

  const isEven = num => num % 2 === 0;

  // an even timer guarantees a grid full of bombs
  if (isEven(time)) {
    const gridFullOfBombs = grid.map(row => [...row].map(_ => 'O').join(''));
    return gridFullOfBombs;
  }

  // every fifth second,
  // the state of the board will be the original
  time = (time % 4) + 4;

  // returns obj mapping rows to array of timers
  const rowsToTimersMap = (() => {
    const rowsToTimers = {};

    grid.forEach((row, rowIdx) => {
      rowsToTimers[rowIdx] = [];
      [...row].forEach(rowItem => {
        const isBomb = rowItem === 'O';
        const rowItemTimer = isBomb ? 3 : -1;
        rowsToTimers[rowIdx].push(rowItemTimer);
      });
    });

    return rowsToTimers;
  })();

  // cannot use if(timer)
  // some timers are -1, which symbolizes
  // detonated bomb
  const hasTimer = timer => timer > 0;

  // on even seconds, add bombs to bombless cells
  // otherwise, decrement bomb timer
  const addBombsOrDecrementTimers = () =>
    Object.entries(rowsToTimersMap).forEach(([rowIdx, timers]) => {
      timers.forEach((timer, timerIdx) => {
        hasTimer(timer)
          ? rowsToTimersMap[rowIdx][timerIdx]--
          : (rowsToTimersMap[rowIdx][timerIdx] = 3);
      });
    });

  // on odd seconds, decrement timers
  const decrementAllTimers = () =>
    Object.entries(rowsToTimersMap).forEach(([rowIdx, timers]) => {
      timers.forEach((timer, timerIdx) => {
        if (hasTimer(timer)) rowsToTimersMap[rowIdx][timerIdx]--;
      });
    });

  // iterate over rowsToTimersMap
  // if timer is zero, then that bomb should detonate
  // keep track of the row and timer index pairs for detonated cells
  // then detonate those cells in your rowsToTimersMap
  const detonate = () => {
    const detonatedRowIdxToTimerIdxPairs = [];
    Object.entries(rowsToTimersMap).forEach(([rowIdx, timers]) => {
      timers.forEach((timer, timerIdx) => {
        const shouldDetontate = timer === 0;
        if (shouldDetontate) {
          detonatedRowIdxToTimerIdxPairs.push([rowIdx, timerIdx]);

          const timerIndexesInSameRowToChange = [
            Number(timerIdx) - 1,
            Number(timerIdx) + 1
          ];
          timerIndexesInSameRowToChange.forEach(tIdx => {
            const isValid = tIdx >= 0 && tIdx < grid[0].length;
            if (isValid) detonatedRowIdxToTimerIdxPairs.push([rowIdx, tIdx]);
          });

          const rowIndexesForRemainingTimerChanges = [
            Number(rowIdx) - 1,
            Number(rowIdx) + 1
          ];
          rowIndexesForRemainingTimerChanges.forEach(rIdx => {
            const isValid = rIdx >= 0 && rIdx < grid.length;
            if (isValid) detonatedRowIdxToTimerIdxPairs.push([rIdx, timerIdx]);
          });
        }
      });
    });

    // -1 symbolizes detonation
    detonatedRowIdxToTimerIdxPairs.forEach(([rowIdx, timerIdx]) => {
      rowsToTimersMap[rowIdx][timerIdx] = -1;
    });
  };

  // start timer
  let localTime = 1;
  while (localTime <= time) {
    isEven(localTime) ? addBombsOrDecrementTimers() : decrementAllTimers();
    detonate();
    localTime++;
  }

  // iterate over rowsToTimersMap
  // any cell with a timer means it has a bomb
  // otherwise it doesn't have a bomb
  const finalGrid = Object.values(rowsToTimersMap).map(timers => {
    let row = '';
    timers.forEach(timer => {
      const hasBomb = hasTimer(timer);
      row = row.concat(hasBomb ? 'O' : '.');
    });
    return row;
  });

  return finalGrid;
}
