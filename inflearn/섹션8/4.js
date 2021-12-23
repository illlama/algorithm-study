// const solution = (n) => {
//   let answer = [];
//   let ch = new Array(n).fill(0);
//   const DFS = (v) => {
//     if (v === n) {
//       let tmp = "";
//       for (let i = 0; i < n; i++) {
//         if (ch[i] === 1) tmp += i + 1 + " ";
//       }
//       if (tmp.length > 0) answer.push(tmp.trim());
//     } else {
//       ch[v] = 1;
//       DFS(v + 1);
//       ch[v] = 0;
//       DFS(v + 1);
//     }
//   };
//   DFS(0);
//   return answer;
// };

const solution = (n) => {
  let answer = [];
  let ch = new Array(n).fill(0);
  const DFS = (v) => {
    if (v === n) {
      let tmp = "";
      for (let i = 0; i < n; i++) {
        if (ch[i] === 1) tmp += i + 1 + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  };
  DFS(0);
  return answer;
};

console.log(solution(3));
