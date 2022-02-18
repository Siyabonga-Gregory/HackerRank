// https://www.hackerrank.com/challenges/flatland-space-stations/problem

const flatlandSpaceStations = (totalCities, citiesWithSpaceStationsArr) => {
  const citiesWithSpaceStationsDict = (() => {
    let dict = {};

    const { length: totalCitiesWithSpaceStations } = citiesWithSpaceStationsArr;
    for (
      let cityWithSpaceStationIdx = 0;
      cityWithSpaceStationIdx < totalCitiesWithSpaceStations;
      cityWithSpaceStationIdx++
    ) {
      const cityWithSpaceStation =
        citiesWithSpaceStationsArr[cityWithSpaceStationIdx];
      dict[cityWithSpaceStation] = true;
    }

    return dict;
  })();

  const distUntilFirstSpaceStation = (() => {
    let dist = 0;

    for (let city = 0; city < totalCities; city++) {
      const doesCityHaveSpaceStation = citiesWithSpaceStationsDict[city];
      if (doesCityHaveSpaceStation) break;
      dist++;
    }

    return dist;
  })();

  const distBetweenLastCityAndLastSpaceStation = (() => {
    let dist = 0;

    for (let city = totalCities - 1; city >= 0; city--) {
      const doesCityHaveSpaceStation = citiesWithSpaceStationsDict[city];
      if (doesCityHaveSpaceStation) break;
      dist++;
    }

    return dist;
  })();

  const greatestDistUntilSpaceStationForMiddleCity = (() => {
    const greatestDistBetweenSpaceStations = (() => {
      let currentDist = 0;
      let maxDist = 0;

      for (let city = 0; city < totalCities; city++) {
        const doesCityHaveSpaceStation = citiesWithSpaceStationsDict[city];
        if (doesCityHaveSpaceStation) {
          const shouldUpdateMax = currentDist > maxDist;
          if (shouldUpdateMax) maxDist = currentDist;
          currentDist = 0;
        } else currentDist++;
      }

      return maxDist;
    })();

    return Math.ceil(greatestDistBetweenSpaceStations / 2);
  })();

  const maxDist = Math.max(
    distUntilFirstSpaceStation,
    distBetweenLastCityAndLastSpaceStation,
    greatestDistUntilSpaceStationForMiddleCity
  );

  return maxDist;
};
