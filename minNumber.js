var minNumber = function (nums1, nums2) {
  //---- Solution 1----
  // let i = 0,
  //   j = 0,
  //   minNums1 = 10,
  //   minNums2 = 10;

  // while (nums1[i] || nums2[j]) {
  //   if (minNums1 > nums1[i]) minNums1 = nums1[i];
  //   if (minNums2 > nums2[j]) minNums2 = nums2[j];

  //   i++;
  //   j++;
  // }

  // if (minNums1 === minNums2) return minNums1;
  // else if (minNums1 >= minNums2) return minNums2 * 10 + minNums1;
  // return minNums1 * 10 + minNums2;

  //---- Solution 2----
  // const sortNums1 = nums1.sort((a, b) => a - b);
  // const sortNums2 = nums2.sort((a, b) => a - b);

  // for (const n1 of nums1) {
  //   for (const n2 of nums2) {
  //     if (n1 === n2) return n1 * 1;
  //   }
  // }

  // return sortNums1[0] < sortNums2[0]
  //   ? sortNums1[0] * 10 + sortNums2[0]
  //   : sortNums2[0] * 10 + sortNums1[0];

  //---- Solution 3----

  nums1.sort((a, b) => a - b);

  for (const n of nums1) {
    if (nums2.indexOf(n * 1) !== -1) return n * 1;
  }

  const min1 = Math.min(...nums1);
  const min2 = Math.min(...nums2);

  console.log(min1, min2);

  return Math.min(min1, min2) * 10 + Math.max(min1, min2);
};

console.log(minNumber([4, 1, 3], [5, 7]));
