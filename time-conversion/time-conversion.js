// https://www.hackerrank.com/challenges/time-conversion/problem

const timeConversion = time => {
  const [unformattedHH, mm, ssWithPeriod] = time.split(':');

  const hh = (() => {
    const isPm = ssWithPeriod.includes('PM');

    const periodConversion = isPm ? 12 + +unformattedHH : unformattedHH;

    switch (periodConversion) {
      case 24:
        return '12';
      case '12':
        return '00';
      default:
        return periodConversion;
    }
  })();

  const ss = ssWithPeriod.slice(0, 2);

  return `${hh}:${mm}:${ss}`;
};
