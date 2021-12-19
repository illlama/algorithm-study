let str = "KKHSSSSSSSE";

const solution = (str) => {
  let currentChar = str[0];
  let currentIndex = 0;
  let result = "";
  str.split("").forEach((c, i) => {
    if (currentChar !== c) {
      const res = `${currentChar}${
        i - currentIndex === 1 ? "" : i - currentIndex
      }`;
      currentChar = c;
      currentIndex = i;
      result = result.concat(res);
    }
  });
  return result;
};
console.log(solution(str));
