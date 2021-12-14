const arr = [130, 135, 148, 140, 145, 150, 150, 153];

const solutution = (arr, n) => {
  return arr.reduce((prev, v) => (v < n ? prev + 1 : prev), 0);
};

console.log(solutution(arr, 140));
