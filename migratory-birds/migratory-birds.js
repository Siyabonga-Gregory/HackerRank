// https://www.hackerrank.com/challenges/migratory-birds/problem

const pipe = (...fns) => initialData =>
  fns.reduce((updatedData, fn) => fn(updatedData), initialData);

const reduce = (fn, startingVal) => arr => arr.reduce(fn, startingVal);

const migratoryBirds = ids =>
  pipe(
    reduce((ret, id) => {
      ret[id] = id in ret ? ret[id] + 1 : 1;
      return ret;
    }, {}),
    idToTotalSightings => {
      const maxSightings = Math.max(...Object.values(idToTotalSightings));

      const [id] = Object.entries(idToTotalSightings).find(
        ([id, totalSightings]) => totalSightings === maxSightings
      );

      return id;
    }
  )(ids);
