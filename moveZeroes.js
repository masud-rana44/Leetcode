var moveZeroes = function (nums) {
  const n = nums.length;
  let j = -1;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return;

  for (let i = j + 1; i < n; i++) {
    if (nums[i] !== 0) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
};
