let arr = [5, 3, 7, 8, 6, 2, 9, 4];

function solution(arr) {
  let answer = 0;
  let dy = Array(arr.length).fill(0);
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(dy[i], answer);
  }
  return answer;
}
console.log(solution(arr));
