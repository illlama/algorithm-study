let a = "AbaAeCe";
let b = "baeeACA";
const solution = (a, b) => {
  const base = new Map();
  a.split("").forEach((c) =>
    base.has(c) ? base.set(c, base.get(c) + 1) : base.set(c, 1),
  );
  for (let c of b.split("")) {
    if (!base.has(c) || base.get(c) === 0) return "NO";
    base.set(c, base.get(c) - 1);
  }
  return "YES";
};
console.log(solution(a, b));
