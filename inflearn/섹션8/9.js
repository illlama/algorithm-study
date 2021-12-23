const arr = [1, 2, 5];

const solution = (price, arr) => {
  let result;
  const n = arr.length;
  const DFS = (money, sum) => {
    if (sum > price) return;
    if (sum == price) {
      if (!result) return (result = money);
      if (result.length > money.length) return (result = money);
      return;
    } else {
      for (let i = 0; i < n; i++) {
        DFS(money.concat(arr[i]).slice(), sum + arr[i]);
      }
    }
  };
  DFS([], 0);
  return result;
};
console.log(solution(13, arr));
