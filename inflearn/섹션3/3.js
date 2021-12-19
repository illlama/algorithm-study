let str = "g0en2T0s8eSoft";

const solution = (str) => Number(str.replace(/[^0-9]/g, ""));
console.log(solution(str));
