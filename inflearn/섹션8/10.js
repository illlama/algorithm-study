const solution = (arr, m) => {
  const answer = [];
  const check = new Array(arr.length).fill(0);
  const tmp = [];
  const DFS = (L) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!check[i]) {
          check[i] = 1;
          tmp.push(arr[i]);
          DFS(L + 1);
          check[i] = 0;
          tmp.pop();
        }
      }
    }
  };
  DFS(0);
  return answer;
};

console.log(solution([3, 6, 9], 2));
