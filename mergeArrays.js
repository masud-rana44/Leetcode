var mergeArrays = function (nums1, nums2) {
  const mergedArr = [];
  let i = 0,
    j = 0;

  const m = nums1.length;
  const n = nums2.length;

  while (nums1[i] || nums2[j]) {
    if (m > i && (!nums2[j] || nums1[i][0] < nums2[j][0])) {
      mergedArr.push(nums1[i]);
      i++;
    } else if (n > j && (!nums1[i] || nums1[i][0] > nums2[j][0])) {
      mergedArr.push(nums2[j]);
      j++;
    } else {
      mergedArr.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
      i++;
      j++;
    }
  }

  return mergedArr;
};

console.log(
  mergeArrays(
    [
      [148, 597],
      [165, 623],
      [306, 359],
      [349, 566],
      [403, 646],
      [420, 381],
      [566, 543],
      [730, 209],
      [757, 875],
      [788, 208],
      [932, 695],
    ],
    [
      [74, 669],
      [87, 399],
      [89, 165],
      [99, 749],
      [122, 401],
      [138, 16],
      [144, 714],
      [148, 206],
      [177, 948],
      [211, 653],
      [285, 775],
      [309, 289],
      [349, 396],
      [386, 831],
      [403, 318],
      [405, 119],
      [420, 153],
      [468, 433],
      [504, 101],
      [566, 128],
      [603, 688],
      [618, 628],
      [622, 586],
      [641, 46],
      [653, 922],
      [672, 772],
      [691, 823],
      [693, 900],
      [756, 878],
      [757, 952],
      [770, 795],
      [806, 118],
      [813, 88],
      [919, 501],
      [935, 253],
      [982, 385],
    ]
  )
);
