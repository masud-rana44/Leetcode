var findingUsersActiveMinutes = function (logs, k) {
  const truck = {};
  const res = new Array(k).fill(0);
  for (let i = 0; i < logs.length; i++) {
    const id = truck[logs[i][0]];
    const time = logs[i][1];
    if (!id) {
      truck[logs[i][0]] = [time];
    } else if (!id.includes(time)) {
      id.push(time);
    }
  }
  Object.values(truck).forEach((val) => {
    res[val.length - 1]++;
  });
  return res;
};
