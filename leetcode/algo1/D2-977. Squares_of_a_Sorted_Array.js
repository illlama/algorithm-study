const exNums = [-4, -1, 0, 3, 10];

// const sortedSquares = (nums) => {
//   return nums.map((num) => num ** 2).sort((a, b) => a - b);
// };

const sortedSquares = (nums) => {
  const length = nums.length - 1;
  const result = new Array(length);

  let left = 0,
    right = nums.length - 1;
  for (let num in nums) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[length - num] = nums[right] ** 2;
      right--;
    } else {
      result[length - num] = nums[left] ** 2;
      left++;
    }
  }
  return result;
};

console.log(sortedSquares(exNums));
