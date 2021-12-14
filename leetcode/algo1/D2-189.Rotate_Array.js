const exNums = [1, 2, 3, 4, 5, 6, 7],
  exK = 3;

// const rotate = (nums, k) => {
//   for (let i = 0; i < k; i++) {
//     let tmp = nums.pop();
//     nums.unshift(tmp);
//   }
//   return nums;
// };

// const rotate = (nums, k) => {
//   k %= nums.length;
//   if (k === 0) return nums;

//   return rotate([nums.pop(), ...nums], k - 1);
// };

const rotate = (nums, k) => {
  k %= nums.length;

  if (k === 0) return nums;
  while (k) {
    nums = [nums.pop(), ...nums];
    k--;
  }
  return nums;
};

console.log(rotate(exNums, exK));
