const s = "aaaa";

// const countSubstrings = (s) => {
//   let res = 0;
//   const arr = s.split("");
//   for (let i = 1; i <= s.length; i++) {
//     for (let j = 0; j <= s.length - i; j++) {
//       isPalindrome(arr.slice(j, j + i)) && res++;
//     }
//   }
//   return res;
// };

// const isPalindrome = (w) => {
//   if (w.length === 1) {
//     return true;
//   } else {
//     return w.join() === w.reverse().join();
//   }
// };

const countSubstrings = (s) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < i + 2; j++) {
      let l = i;
      let r = j;

      while (l >= 0 && r < s.length && s[l] === s[r]) {
        console.log(l, r);

        count++;
        l--;
        r++;
      }
      console.log("----------");
    }
  }

  return count;
};

console.log(countSubstrings(s));
