const nums = [3, 3],
  target = 6;

const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (another in map) {
      return [map[another], i];
    }
    map[nums[i]] = i;
  }
  return null;
};

// const twoSum = (nums, target) => {
//     for (let i in nums) {
//       let right = nums.indexOf(target - nums[i]);
//       console.log(i, right);
//       if (right > -1 && Number(i) !== right) {
//         return [Number(i), right].sort();
//       }
//     }
//   };

console.log(twoSum(nums, target));
