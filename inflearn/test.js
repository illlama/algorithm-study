let arr = [1, 2, 3, 4, 5, 6];

const test = (s) => {
  let start = 0,
    end = s.length - 1;
  while (start <= end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  return s;
};
console.log(test(arr));
