// https://www.hackerrank.com/challenges/drawing-book/problem// https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(totalPages, desiredPage) {
  const getPageTurns = type => {
    const isFromFront = type === 'fromFront';

    const startingPages = (() => {
      if (isFromFront) return [0, 1];

      const finalPageNumber = (() => {
        const isEven = num => num % 2 === 0;
        const isFinalPageNumbered = !isEven(totalPages);
        return isFinalPageNumbered ? totalPages : false;
      })();

      if (!finalPageNumber) return [totalPages, totalPages + 1];

      return [totalPages - 1, totalPages];
    })();

    let currentPages = startingPages;
    let pageTurns = 0;
    const isOnDesiredPage = () =>
      currentPages.some(page => page === desiredPage);

    while (!isOnDesiredPage()) {
      currentPages = currentPages.map(
        page => (isFromFront ? page + 2 : page - 2)
      );
      pageTurns++;
    }

    return pageTurns;
  };

  const leastPageTurns = (() => {
    const pageTurnsFromFront = getPageTurns('fromFront');
    const pageTurnsFromBack = getPageTurns('fromBack');
    return Math.min(pageTurnsFromFront, pageTurnsFromBack);
  })();

  return leastPageTurns;
}
