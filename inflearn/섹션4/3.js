let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

const solution = (arr) => {
  let answer = 0;
  const length = arr[0].length;
  for (let i = 1; i < length + 1; i++) {
    for (let j = 1; j < length + 1; j++) {
      if (i === j) continue;
      !arr.filter((test) => test.indexOf(i) > test.indexOf(j)).length &&
        answer++;
    }
  }
  return answer;
};
console.log(solution(arr));
