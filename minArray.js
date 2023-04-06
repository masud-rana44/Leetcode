var rob = function (nums) {
  if (nums.length === 0) return 0;

  const check = new Array(nums.length).fill(false);
  let big = -1;
  let idx = -1;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (!check[j] && !check[j - 1] && !check[j + 1] && nums[j] > big) {
        big = nums[j];
        idx = j;
      }
    }
    check[idx] = true;
    if (big > 0) total = total + big;
    big = -1;
  }
  return total;
};
console.log(rob([2, 3, 2]));
