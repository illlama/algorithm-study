let a = [1, 3, 5];

let b = [2, 3, 6, 7, 9];

const solution = (a, b) => {
  let idxA = 0,
    idxB = 0;
  const result = [];
  while (idxA < a.length || idxB < b.length) {
    let currentA = a[idxA],
      currentB = b[idxB];
    if (currentA == currentB) {
      result.push(currentA);
      result.push(currentB);
      idxA++;
      idxB++;
    } else if (currentA < currentB) {
      result.push(currentA);
      idxA++;
    } else {
      result.push(currentB);
      idxB++;
    }
  }
  if (idxA < a.length) result.push(a.slice(idxA));
  if (idxB < b.length) result.push(b.slice(idxB));
  return result;
};
console.log(solution(a, b));
