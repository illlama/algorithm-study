const solution = (n) => {
  let answer;
  const DFS = (n) => {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  };
  answer = DFS(5);
  return answer;
};

console.log(solution(5));
