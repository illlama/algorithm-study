const exNums = [1, 3, 5, 6, 7, 9, 11];
const exTarget = 3;

// const searchInsert = (nums, target) => {
//   let start = 0;
//   let end = nums.length - 1;

//   while (start <= end) {
//     const mid = Math.floor((start + end) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       if (nums[start] > target) return start;
//       if (nums[end] < target) return end + 1;
//       start = mid + 1;
//     } else {
//       if (nums[start] > target) return start;
//       if (nums[end] < target) return end + 1;
//       end = mid - 1;
//     }
//   }
// };

//재귀
const searchInsert = (nums, target) => {
  return binarySearch(nums, target, 0, nums.length - 1);
};
const binarySearch = (arr, target, start, end) => {
  if (start > end) return start;
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
};
console.log(searchInsert(exNums, exTarget));
