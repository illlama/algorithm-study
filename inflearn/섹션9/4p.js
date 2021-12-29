let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

function solution(board) {
  let answer = 0;
  let length = board.length;
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, 1, -1];
  let path = [];

  function DFS(x, y) {
    if (x === length - 1 && y === length - 1) {
      answer++;
      console.log(path);
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (
          nx >= 0 &&
          nx < length &&
          ny >= 0 &&
          ny < length &&
          board[nx][ny] === 0
        ) {
          board[nx][ny] = 1;
          path.push([nx, ny]);
          DFS(nx, ny);
          board[nx][ny] = 0;
          path.pop();
        }
      }
    }
  }
  board[0][0] = 1;
  path[0] = [0, 0];
  DFS(0, 0);
  return answer;
}
console.log(solution(arr));
