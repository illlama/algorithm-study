let a = [1, 2, 1, 3, 1, 1, 1, 2];

const solution = (num, arr) => {
  let lt = 0,
    rt = 0,
    sum = 0,
    ans = 0;

  while (!(rt === arr.length - 1)) {
    if (sum >= num) {
      sum -= arr[lt];
      lt++;
      ans++;
    } else {
      sum += arr[rt];
      rt++;
    }
  }
  return ans;
};
console.log(solution(6, a));
