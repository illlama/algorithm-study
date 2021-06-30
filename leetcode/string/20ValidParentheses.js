const s = "{[]}";

const isValid = (s) => {
  const left = [];
  const legend = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      left.push(char);
    } else if (legend[left.pop()] !== char) {
      return false;
    }
    console.log(left);
  }
  return left.length ? false : true;
};

// const isValid = (s) => {
//   const num = { "{": 0, "}": 3, "[": 1, "]": 4, "(": 2, ")": 5 };
//   let stack = [];
//   for (let i of s) {
//     if (stack.length === 0) {
//       stack.unshift(i);
//     } else {
//       if (num[i] - num[stack[0]] === 3) {
//         stack.shift();
//       } else {
//         stack.unshift(i);
//       }
//     }
//   }
//   return stack.length ? false : true;
// };

console.log(isValid(s));
