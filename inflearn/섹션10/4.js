let arr = [1, 2, 5];

function solution(n, coin) {
  let dy = Array(n + 1).fill(1000);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= n; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  return dy[n];
}

console.log(solution(15, arr));
