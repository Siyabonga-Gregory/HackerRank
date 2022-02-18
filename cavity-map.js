// https://www.hackerrank.com/challenges/cavity-map/problem

// function extraction
const cavityMap = grid => {
  const isPossibleCavity = (collLength, collMemberIdx) => {
    const isFirst = collMemberIdx === 0;
    const isLast = collMemberIdx === collLength - 1;
    return !isFirst && !isLast;
  };

  const isCavity = (grid, rowIdx, cellIdx) => {
    const row = grid[rowIdx];
    const cell = Number(row[cellIdx]);

    const borderMax = (() => {
      const leftCell = row[cellIdx - 1];
      const rightCell = row[cellIdx + 1];
      const topCell = grid[rowIdx - 1][cellIdx];
      const bottomCell = grid[rowIdx + 1][cellIdx];
      return Math.max(leftCell, rightCell, topCell, bottomCell);
    })();

    return cell > borderMax;
  };

  return grid.map(
    (row, rowIdx) =>
      !isPossibleCavity(grid.length, rowIdx)
        ? row
        : [...row]
            .map(
              (cell, cellIdx) =>
                !isPossibleCavity(row.length, cellIdx)
                  ? cell
                  : isCavity(grid, rowIdx, cellIdx)
                    ? 'X'
                    : cell
            )
            .join('')
  );
};

// ------------------------------------------------------
// more explicit

const cavityMap = grid =>
  grid.map((row, rowIdx) => {
    const isBorderRow = (() => {
      const isFirstRow = rowIdx === 0;
      const isLastRow = rowIdx === grid.length - 1;
      return isFirstRow || isLastRow;
    })();
    if (isBorderRow) return row;

    const newRow = [...row].map((cell, cellIdx) => {
      const isBorderCell = (() => {
        const isFirstCell = cellIdx === 0;
        const isLastCell = cellIdx === row.length - 1;
        return isFirstCell || isLastCell;
      })();
      if (isBorderCell) return cell;

      const newCell = (() => {
        const isCavity = (() => {
          const leftCell = row[cellIdx - 1];
          const rightCell = row[cellIdx + 1];
          const topCell = grid[rowIdx - 1][cellIdx];
          const bottomCell = grid[rowIdx + 1][cellIdx];
          const borderMax = Math.max(leftCell, rightCell, topCell, bottomCell);
          const isMax = Number(cell) > borderMax;
          return isMax;
        })();
        return isCavity ? 'X' : cell;
      })();

      return newCell;
    });

    return newRow.join('');
  });
