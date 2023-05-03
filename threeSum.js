var threeSum = function (nums) {
  const res = [];
  const n = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let lo = i + 1;
      let hi = n - 1;
      const sum = -nums[i];

      while (lo < hi) {
        if (nums[lo] + nums[hi] === sum) {
          res.push([-sum, nums[lo], nums[hi]]);

          while (nums[lo] === nums[lo + 1]) lo++;
          while (nums[hi] === nums[hi - 1]) hi--;

          lo++;
          hi--;
        } else if (nums[lo] + nums[hi] < sum) lo++;
        else hi--;
      }
    }
  }

  return res;
};
