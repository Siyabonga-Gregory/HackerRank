// https://www.hackerrank.com/challenges/strange-advertising/problem

const viralAdvertising = daysCount => {
  const days = (() => {
    let arr = [];
    for (let day = 1; day <= daysCount; day++) {
      arr.push(day);
    }
    return arr;
  })();

  const dailyLikesTotals = (() => {
    let totals = [];

    days.forEach(day => {
      const shouldAddTwo = day === 1;
      if (shouldAddTwo) return totals.push(2);

      const lastDayTotal = totals[totals.length - 1];
      const thisDayTotal = Math.floor((lastDayTotal * 3) / 2);
      totals.push(thisDayTotal);
    });

    return totals;
  })();

  return dailyLikesTotals.reduce(
    (totalLikes, dayLikes) => totalLikes + dayLikes
  );
};
