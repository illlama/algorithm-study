let arr = [1, 3, 5, 6, 7, 10];

const solution = (arr) => {
  const half = arr.reduce((acc, n) => acc + n, 0) / 2;
  let answer = [];
  const n = arr.length;
  const DFS = (idx, resArr) => {
    if (idx === n) {
      if (resArr.reduce((acc, n) => acc + n, 0) === half) answer.push(resArr);
    } else {
      const newArr = resArr.concat(arr[idx]);
      DFS(idx + 1, newArr);
      DFS(idx + 1, resArr);
    }
  };
  DFS(0, []);
  return answer;
};

console.log(solution(arr));
