let arr = [1.3, 1.1, 2.33, 1.9];

const solution = (weight, arr) => {
  const answer = [];
  const length = arr.length;
  const check = new Array(length).fill(0);

  const DFS = (idx, currentArray) => {
    if (idx === length) {
    } else {
      check[idx] = 1;
      DFS(idx + 1, currentArray);
      check[idx] = 0;
      DFS(idx + 1, currentArray);
    }
  };
  DFS(1, []);
  return answer;
};

console.log(solution(3, arr));
