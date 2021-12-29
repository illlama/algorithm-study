function solution(s, e) {
  let answer = 0;
  let ch = new Set();
  let dis = new Map();
  let queue = [];

  ch.add(s);
  dis.set(s, 0);
  queue.push(s);

  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x + 1, x - 1, x + 5]) {
      if (nx === e) {
        console.log(dis);
        return dis.get(x) + 1;
      }
      if (nx > 0 && nx <= 10000 && !ch.has(nx)) {
        ch.add(nx);
        queue.push(nx);
        dis.set(nx, dis.get(x) + 1);
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));
