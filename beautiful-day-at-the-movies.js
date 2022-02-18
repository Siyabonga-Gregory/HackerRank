// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

const beautifulDays = (startDay, endDay, k) => {
  const days = (() => {
    let arr = [];
    for (let day = startDay; day <= endDay; day++) arr.push(day);
    return arr;
  })();

  const beautifulDaysTotal = days.reduce((total, day) => {
    const reversedDay = Number(
      day
        .toString()
        .split('')
        .reverse()
        .join('')
    );
    const difference = Math.abs(day - reversedDay);
    const quotient = difference / k;
    const isBeautifulDay = Number.isInteger(quotient);
    return isBeautifulDay ? ++total : total;
  }, 0);

  return beautifulDaysTotal;
};
