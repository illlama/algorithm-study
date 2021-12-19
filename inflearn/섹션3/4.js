let str = "teachermode";

const solution = (str, c) => {
  const targetIndexs = [];
  str.split("").forEach((char, i) => {
    char === c && targetIndexs.push(i);
  });
  return str
    .split("")
    .map((_, i) =>
      Math.min(...targetIndexs.map((target) => Math.abs(target - i))),
    );
};
console.log(solution(str, "e"));
