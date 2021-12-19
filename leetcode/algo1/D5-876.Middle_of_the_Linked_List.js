// const middleNode = (arr) => {
//   let start = 0,
//     end = 0;
//   while (end <= arr.length - 1) {
//     start++;
//     end += 2;
//   }
//   return start;
// };

const middleNode = (arr) => {
  let start = 0,
    end = arr.length - 1;
  while (end - start > 1) {
    start++;
    end--;
  }
  return arr.slice(start);
};

const head = [1, 2, 3, 4, 5, 6, 7];

console.log(middleNode(head));
