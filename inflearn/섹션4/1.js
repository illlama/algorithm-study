let arr = [128, 460, 603, 40, 521, 137, 123];

const solution = (n, arr) => {
  return arr.reduce(
    (acc, n) => {
      let sum = n
        .toString()
        .split("")
        .reduce((nums, n) => nums + Number(n), 0);
      if (sum > acc[0]) return (acc = [sum, n]);
      if (sum === acc[0]) return (acc = [sum, Math.max(n, acc[1])]);
      return acc;
    },
    [0, 0],
  )[1];
};

console.log(solution(7, arr));
