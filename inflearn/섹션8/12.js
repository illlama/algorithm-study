const solution = (n, r) => {
  let answer = [];
  let arr = Array.from({ length: 35 }, () => Array(35).fill(0));
  function DFS(c, r) {
    if (arr[c][r] > 0) return arr[c][r];
    if (c === r || r === 0) return 1;
    else return (arr[c][r] = DFS(c - 1, r - 1) + DFS(c - 1, r));
  }
  answer = DFS(n, r);
  return answer;
};

console.log(solution(5, 3));
