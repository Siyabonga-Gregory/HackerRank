// // https://www.hackerrank.com/challenges/lisa-workbook/problem

function workbook(_, maxProbsPerPage, arr) {
  const pageToProbsDict = (() => {
    const pageToProbs = {};
    let currentPage = 1;

    arr.forEach(probCount => {
      const shouldStartOnNextPage = pageToProbs[currentPage] !== undefined;
      if (shouldStartOnNextPage) currentPage++;

      let probsOnAPage = 0;

      for (let problemNumber = 1; problemNumber <= probCount; problemNumber++) {
        const shouldProbBeOnCurrentPage = probsOnAPage < maxProbsPerPage;
        if (shouldProbBeOnCurrentPage) {
          const currentPageAlreadyHasProb =
            pageToProbs[currentPage] !== undefined;
          if (currentPageAlreadyHasProb) {
            pageToProbs[currentPage] = pageToProbs[currentPage].concat(
              problemNumber
            );
            probsOnAPage++;
          } else {
            pageToProbs[currentPage] = [problemNumber];
            probsOnAPage = 1;
          }
        } else {
          currentPage++;
          pageToProbs[currentPage] = [problemNumber];
          probsOnAPage = 1;
        }
      }
    });

    return pageToProbs;
  })();

  let specialProbsCount = 0;

  Object.entries(pageToProbsDict).forEach(([page, probColl]) =>
    probColl.forEach(prob => {
      const specialProbExists = Number(prob) === Number(page);
      if (specialProbExists) specialProbsCount++;
    })
  );

  return specialProbsCount;
}
