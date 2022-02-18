// https://www.hackerrank.com/challenges/service-lane/problem

const serviceLane = (widths, widthsIntervals) =>
  widthsIntervals.map(interval => {
    const [start, exclusiveEnd] = interval;
    const end = exclusiveEnd + 1;
    const localWidths = widths.slice(start, end);
    const safeWidth = Math.min(...localWidths);
    return safeWidth;
  });
