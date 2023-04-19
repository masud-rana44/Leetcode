var groupThePeople = function (groupSizes) {
  const truck = {};
  const res = [];
  for (const idx in groupSizes) {
    if (!truck[groupSizes[idx]]) {
      truck[groupSizes[idx]] = [idx];
    } else truck[groupSizes[idx]].push(idx);
  }
  Object.entries(truck).forEach((entry) => {
    while (entry[1].length > entry[0]) {
      res.push(entry[1].splice(0, entry[0]));
    }
    res.push(entry[1]);
  });
  return res;
};
