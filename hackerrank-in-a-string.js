// https://www.hackerrank.com/challenges/hackerrank-in-a-string/

const hackerrankInString = ([...letters]) => {
  const HR = 'hackerrank';
  let mutableHR = HR;
  let possibleHR = '';

  for (const letter of letters) {
    const [nextHRletter] = mutableHR;
    if (letter !== nextHRletter) continue;
    possibleHR = possibleHR.concat(letter);
    mutableHR = mutableHR.slice(1);
    if (possibleHR === HR) return 'YES';
  }

  return 'NO';
};
