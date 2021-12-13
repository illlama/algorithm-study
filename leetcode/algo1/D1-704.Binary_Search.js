const exNums = [-1, 0, 3, 5, 9, 12];
const exTarget = 9;

const search = (nums, target) => {
  if (nums.length === 0 || (nums.length === 1 && nums[0] !== target)) return -1;
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

console.log(search(exNums, exTarget));
