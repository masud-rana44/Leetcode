var wateringPlants = function (plants, capacity) {
  let steps = 0;
  let current = 0;
  const n = plants.length;
  for (let i = 0; i < n; i++) {
    console.log(steps, current);
    if (current + plants[i] <= capacity) {
      steps++;
      current += plants[i];
    } else {
      steps += 2 * i + 1;
      current = plants[i];
    }
  }
  return steps;
};
