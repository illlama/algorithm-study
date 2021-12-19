const solution = (n) => {
  let answer = [];
  let ch = new Array(n).fill(0);
  const DFS = (L) => {
    if (L === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  };
  DFS(1);
  return answer;
};

console.log(solution(3));

// const subsets = (nums) => {
//     const res = [];

//     const dfs = (start = 0, arr = []) => {
//       res.push(arr);

//       //if (arr.length === nums) return; 해도되고 안써도 된다. 속도는 조금더 좋을듯

//       for (let i = start; i < nums.length; i++) {
//         dfs(i + 1, [...arr, nums[i]]);
//       }
//     };
//      dfs();

//     return res;
//   };
