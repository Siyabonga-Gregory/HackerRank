// https://www.hackerrank.com/challenges/library-fine/problem

function libraryFine(d1, m1, y1, d2, m2, y2) {
  const isFine = (() => {
    const isHappiestPath = y1 < y2;

    if (isHappiestPath) return false;

    const isYearDueYear = y1 === y2;
    const isMonthBeforeDueMonth = m1 < m2;
    const isMonthSavingUs = isYearDueYear && isMonthBeforeDueMonth;

    if (isMonthSavingUs) return false;

    const isYearDueYearOrEarlier = y1 <= y2;
    const isMonthDueMonthOrEarlier = m1 <= m2;
    const isDayBeforeDueDay = d1 < d2;
    const isDaySavingUs =
      isYearDueYearOrEarlier && isMonthDueMonthOrEarlier && isDayBeforeDueDay;

    if (isDaySavingUs) return false;

    return true;
  })();

  if (!isFine) return 0;

  const fine = (() => {
    const isYearValid = y1 <= y2;
    const isMonthDueMonthOrEarlier = m1 <= m2;

    const isFineCalculatedUsingDays = isYearValid && isMonthDueMonthOrEarlier;

    const isFineCalculatedUsingMonths = isYearValid;

    if (isFineCalculatedUsingDays) {
      const daysLate = d1 - d2;
      const fineRate = 15;
      const fineToReturn = daysLate * fineRate;
      return fineToReturn;
    } else if (isFineCalculatedUsingMonths) {
      const monthsLate = m1 - m2;
      const fineRate = 500;
      const fineToReturn = monthsLate * fineRate;
      return fineToReturn;
    }

    return 10000;
  })();

  return fine;
}
