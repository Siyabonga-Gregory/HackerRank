// https://www.hackerrank.com/challenges/cut-the-sticks/problem

const cutTheSticks = sticks => {
  // don't mutate param
  sticks = [...sticks].sort((a, b) => a - b);

  let sticksLeftPerTurn = [];
  while (sticks.length) {
    const { length } = sticks;
    sticksLeftPerTurn.push(length);

    const [shortestStick] = sticks;
    const sticksGreaterThanZero = sticks.filter(stick => {
      const newStick = stick - shortestStick;
      const isGreaterThanZero = newStick > 0;
      return isGreaterThanZero;
    });

    sticks = sticksGreaterThanZero;
  }
  return sticksLeftPerTurn;
};

// declarative, immutable, recursive, function extraction
const handleSticks = ({ sticks, sticksLeftPerTurn }) => {
  if (!sticks.length) return sticksLeftPerTurn;

  return handleSticks({
    sticks: sticks.filter(stick => {
      const [shortestStick] = sticks;
      const newStick = stick - shortestStick;
      const isGreaterThanZero = newStick > 0;
      return isGreaterThanZero;
    }),
    sticksLeftPerTurn: [...sticksLeftPerTurn, sticks.length]
  });
};

const cutTheSticks = arr =>
  handleSticks({
    sticks: [...arr].sort((a, b) => a - b),
    sticksLeftPerTurn: []
  });
