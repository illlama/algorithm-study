const exNums = [1];

const moveZeroes = (nums) => {
  let pointer = 0;
  for (let i in nums) {
    if (nums[i] !== 0) {
      [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
      pointer++;
    }
  }
  return nums;
};

console.log(moveZeroes(exNums));
