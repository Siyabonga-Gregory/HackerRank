// https://www.hackerrank.com/challenges/grading/problem

const getNextMultiple = (denominator, integer) => {
  let currInt = integer + 1;

  return currInt % denominator === 0
    ? currInt
    : getNextMultiple(denominator, currInt);
};

const gradingStudents = grades =>
  grades.map(grade => {
    const nextFiveMultiple = getNextMultiple(5, grade);

    const shouldRetGrade = grade < 38 || nextFiveMultiple - grade >= 3;

    return shouldRetGrade ? grade : nextFiveMultiple;
  });
