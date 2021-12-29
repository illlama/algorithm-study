function solution(n, k, arr, m) {
  let answer = 0;
  let p = new Array(k);
  function DFS(L, s, sum) {
    if (L === k) {
      console.log(sum, p);
      if (sum % m === 0) return answer++;
    } else {
      for (let i = s; i < n; i++) {
        p[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
