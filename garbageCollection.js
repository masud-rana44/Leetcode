var garbageCollection = function (garbage, travel) {
  let time = 0;
  let trueCount = 0;
  let arr = [false, false, false];

  for (let i = garbage.length - 1; i > 0; i--) {
    for (let j = 0; j < garbage[i].length; j++) {
      if (garbage[i][j] === "P") arr[0] = true;
      if (garbage[i][j] === "G") arr[1] = true;
      if (garbage[i][j] === "M") arr[2] = true;
    }

    let newTrueCount = 0;
    if (trueCount !== 3)
      for (let j = 0; j < arr.length; j++) if (arr[j] === true) newTrueCount++;

    if (newTrueCount > trueCount) trueCount = newTrueCount;

    time += trueCount * travel[i - 1] + trueCount;
  }
  return time + garbage[0].length;
};

console.log(garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3]));
