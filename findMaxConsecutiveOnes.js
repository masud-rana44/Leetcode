var findMaxConsecutiveOnes = function (nums) {
  let cnt = 0,
    maxi = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cnt++;
      maxi = Math.max(maxi, cnt);
    } else {
      cnt = 0;
    }
  }
  return maxi;
};
