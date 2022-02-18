// https://www.hackerrank.com/challenges/staircase/problem

const staircase = stairsCount => {
  let stairs = [];

  for (let stairId = 1; stairId <= stairsCount; stairId++) {
    let stair = '';

    const numOfSpaces = stairsCount - stairId;
    for (let space = 1; space <= numOfSpaces; space++) stair += ' ';

    const numOfBangs = stairId;
    for (let bang = 1; bang <= numOfBangs; bang++) stair += '#';

    stairs.push(stair);
  }

  stairs.forEach(stair => console.log(stair));
};
