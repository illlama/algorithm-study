const s = "ABBB",
  k = 2;

const findLength = (s, k) => {
  let char = s[0];
  let res = 0;
  let i = 0;
  while (i < s.length && k >= 0) {
    i++;
    res++;
    if (s[i] !== char) k--;
  }
  console.log(s, k, res);
  return res;
};

const characterReplacement = (s, k) => {
  let max = 0;
  for (let i in s) {
    max = Math.max(findLength(s.slice(i), k), max);
  }
  return max;
};
console.log(characterReplacement(s, k));
