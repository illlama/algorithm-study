const numbers = [5, 25, 75],
  target = 100;

const twoSum = (numbers, target) => {
  let e = numbers.length - 1,
    s = 0;
  let sum = numbers[s] + numbers[e];
  while (sum !== target) {
    sum < target ? s++ : e--;
    sum = numbers[s] + numbers[e];
  }
  return [s + 1, e + 1];
};

console.log(twoSum(numbers, target));
