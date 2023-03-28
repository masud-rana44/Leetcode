var buildArray = function (nums) {
  return nums.map((_, i) => {
    return nums[nums[i]];
  });
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
