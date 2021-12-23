// const solution = (n, m) => {
//   const answer = [];
//   const tmp = new Array(m).fill(0);
//   const DFS = (L) => {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = 0; i < n; i++) {
//         tmp[L] = i;
//         DFS(L + 1);
//       }
//     }
//   };
//   DFS(0);
//   return answer;
// };

// console.log(solution(3, 2));

const solution = (arr, m) => {
  const answer = [];
  const tmp = new Array(m).fill(0);
  const DFS = (L) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        tmp[L] = arr;
        DFS(L + 1);
      }
    }
  };
  DFS(0);
  return answer;
};

console.log(solution([3, 6, 9], 2));
