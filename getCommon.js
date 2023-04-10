var getCommon = function (nums1, nums2) {
  // if (nums1.length <= nums2.length) {
  //   for (let i = 0; i < nums1.length; i++) {
  //     if (nums2.indexOf(nums1[i]) !== -1) return nums1[i];
  //   }
  // } else
  //   for (let i = 0; i < nums2.length; i++) {
  //     if (nums1.indexOf(nums2[i]) !== -1) return nums2[i];
  //   }

  // return -1;

  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] == nums2[j]) return nums1[i];
    if (nums1[i] > nums2[j]) j++;
    else i++;
  }
  return -1;
};
console.log(getCommon([1, 2, 3], [2, 4]));
