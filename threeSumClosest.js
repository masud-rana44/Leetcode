var threeSumClosest = function (nums, target) {
  let n = nums.length;
  let diff = Number.MAX_VALUE;
  let sum;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const value = Math.abs(target - (nums[i] + nums[j] + nums[k]));
        if (value < diff) {
          diff = value;
          sum = nums[i] + nums[j] + nums[k];
        }
      }
    }
  }

  return sum;
};
