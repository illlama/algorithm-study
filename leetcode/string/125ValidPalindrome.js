const s = "ab_a";

const isPalindrome = (s) => {
  let refinedS = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return refinedS === refinedS.split("").reverse().join("");
};

console.log(isPalindrome(s));
