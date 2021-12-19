let str = "found7, time: study; Yduts; emit, 7Dnuof";

const solution = (str) => {
  const s = str.toLowerCase().replace(/[^a-z]/g, "");
  return s.split("").reverse().join("") === s ? "YES" : "NO";
};

console.log(solution(str));
