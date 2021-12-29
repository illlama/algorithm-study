let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

function solution(n, arr) {
  let dy = Array(n + 1).fill(0);
  for (let [ps, pt] of arr) {
    for (let j = n; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  return dy[n];
}
console.log(solution(20, arr));
