let str = "BACBACCACCBDEDE";

const solution = (str) => {
  const table = new Map();

  str
    .split("")
    .forEach((c) =>
      table.has(c) ? table.set(c, table.get(c) + 1) : table.set(c, 1),
    );
  return [...table.entries()].sort((a, b) => b[1] - a[1])[0][0];
};
console.log(solution(str));
