const arr = [7, 3, 5, 6, 8, 12, 13, 8, 7];

const solution = (arr, n) => {
  return arr.map((k) => k >= n && k).filter(Boolean);
};

console.log(solution(arr, 7));
