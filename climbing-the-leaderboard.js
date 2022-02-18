// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(allScores, aliceScores) {
  // takes an array of scores, and returns only unique values in ascending order
  // Number[] -> Number[]
  const getUniqueScoresAsc = scores => {
    const scoresAsc = [...scores].sort((a, b) => a - b);
    const lastVal = arr => arr.length && arr[arr.length - 1];

    return scoresAsc.reduce((uniqueScores, score) => {
      const lastUniqueScore = lastVal(uniqueScores);
      const isNewUniqueScore = score > lastUniqueScore;

      if (lastUniqueScore && !isNewUniqueScore) return uniqueScores;

      uniqueScores.push(score);
      return uniqueScores;
    }, []);
  };

  const aliceRankings = (() => {
    const leaderBoardScores = getUniqueScoresAsc(allScores);
    const { length: leaderBoardScoresLength } = leaderBoardScores;

    let rankings = [];
    let leaderBoardScoresIdx = 0;

    // compare each aliceScore with unique leaderboard scores
    // keep track of our leaderboard score index
    // we know our scores are sorted so there is no need to return
    // to scores we already have checked
    aliceScores.forEach(aliceScore => {
      for (
        ;
        // use closure to alter starting index for each aliceScore
        leaderBoardScoresIdx < leaderBoardScoresLength;
        leaderBoardScoresIdx++
      ) {
        const leaderBoardScore = leaderBoardScores[leaderBoardScoresIdx];

        const isLastLeaderBoardScore =
          leaderBoardScoresIdx === leaderBoardScoresLength - 1;
        const isNewTopScore =
          isLastLeaderBoardScore && leaderBoardScore <= aliceScore;

        if (isNewTopScore) {
          rankings.push(1);
          break;
        }

        const isRankingFound = aliceScore < leaderBoardScore;
        if (!isRankingFound) continue;

        const isWorstScore = leaderBoardScoresIdx === 0;
        const lastPlaceRanking = leaderBoardScoresLength + 1;

        rankings.push(
          isWorstScore
            ? lastPlaceRanking
            : lastPlaceRanking - leaderBoardScoresIdx
        );
        break;
      }
    });

    return rankings;
  })();

  return aliceRankings;
}
