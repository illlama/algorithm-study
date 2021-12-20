const exS = "dvdf";

const lengthOfLongestSubstring = (s) => {
  let answer = 0;
  let tmp = new Set();

  for (let i = 0; i < s.length; i++) {
    let tmpI = i;
    while (!tmp.has(s[tmpI]) && tmpI < s.length) {
      tmp.add(s[tmpI]);
      tmpI++;
    }
    answer = Math.max(answer, tmp.size);
    tmp.clear();
  }
  return Math.max(answer, tmp.size);
};

console.log(lengthOfLongestSubstring(exS));
