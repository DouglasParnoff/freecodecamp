function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(
    (planet) => {
      const earth = earthRadius + planet.avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));

      return { name: planet.name, orbitalPeriod};
    }
  );
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
