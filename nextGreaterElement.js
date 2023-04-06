var nextGreaterElement = function(nums1, nums2) {
    const res = nums1.map(num => {
      const idx = nums2.indexOf(num)
      if(idx === nums2.length-1) return -1;
      for(let i=idx+1; i<nums2.length; i++) {
      if(nums2[i] > num) return nums2[i]
      }
      return -1
    })
  return res;
};

nextGreaterElement([4,1,2], [1,3,4,2])