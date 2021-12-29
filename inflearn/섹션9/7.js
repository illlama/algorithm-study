let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];
//DFS
// function solution(board) {
//   let answer = 0;
//   let length = board.length;
//   let dx = [-1, -1, -1, 0, 0, 1, 1, 1];
//   let dy = [-1, 0, 1, -1, 1, -1, 0, 1];

//   function DFS(x, y) {
//     board[x][y] = 0;
//     for (let k = 0; k < 8; k++) {
//       let nx = x + dx[k];
//       let ny = y + dy[k];
//       if (
//         nx >= 0 &&
//         nx < length &&
//         ny >= 0 &&
//         ny < length &&
//         board[nx][ny] === 1
//       ) {
//         DFS(nx, ny);
//       }
//     }
//   }

//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (board[i][j] === 1) {
//         answer++;
//         DFS(i, j);
//       }
//     }
//   }
//   return answer;
// }

//BFS
function solution(board) {
  let answer = 0;
  let length = board.length;
  let dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  let dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  let queue = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;
        while (queue.length) {
          let L = queue.shift();
          for (let k = 0; k < 8; k++) {
            let nx = L[0] + dx[k];
            let ny = L[1] + dy[k];
            if (
              nx >= 0 &&
              nx < length &&
              ny >= 0 &&
              ny < length &&
              board[nx][ny] === 1
            ) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  return answer;
}

console.log(solution(arr));
