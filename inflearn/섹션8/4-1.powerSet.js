const arr = [1, 5, 7];

const powerSet = (arr) => {
  const answer = [];
  let check = new Array(arr.length).fill(0);

  const DFS = (v) => {
    if (v === check.length) {
      answer.push(arr.filter((v, i) => check[i]));
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  };
  DFS(0);
  return answer;
};

console.log(powerSet(arr));
