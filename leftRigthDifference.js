var leftRigthDifference = function (nums) {
  const answer = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0,
      rightSum = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i > j) leftSum += nums[j];
      else if (i < j) rightSum += nums[j];
    }
    console.log(leftSum, rightSum);
    const value = (leftSum - rightSum) * 1;
    answer[i] = Math.abs(value);
  }
  return answer;
};

console.log(leftRigthDifference([10, 4, 8, 3]));
