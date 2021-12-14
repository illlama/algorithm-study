const example = [20, 7, 23, 19, 10, 15, 25, 8, 13];

const solution = (arr) => {
  const twoSum = arr.reduce((n, acc) => n + acc, 0) - 100;
  return arr.filter((n) => !(arr.includes(twoSum - n) && n * 2 !== twoSum));
};

console.log(solution(example));
