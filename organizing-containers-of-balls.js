// https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem

const organizingContainers = containers => {
  let typeTotals = [];

  containers.forEach(container => {
    container.forEach((typeTotal, type) => {
      typeTotals[type]
        ? (typeTotals[type] += typeTotal)
        : (typeTotals[type] = typeTotal);
    });
  });

  const isContainerOrganizationPossible = containers.every(container => {
    const containerSum = container.reduce(
      (containerSum, typeTotal) => containerSum + typeTotal,
      0
    );

    return typeTotals.some(typeTotal => typeTotal === containerSum);
  });

  return isContainerOrganizationPossible ? 'Possible' : 'Impossible';
};
