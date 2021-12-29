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
  let length = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  let path = [];
  function DFS(x, y) {
    if (x === length - 1 && y === length - 1) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < length &&
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
