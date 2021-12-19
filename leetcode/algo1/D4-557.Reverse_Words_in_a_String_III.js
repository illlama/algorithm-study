const reverser = (s) => {
  let arr = s.split("");
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr.join("");
};
var reverseWords = function (s) {
  let arr = s.split(" ");
  return arr.map((word) => reverser(word)).join(" ");
};
