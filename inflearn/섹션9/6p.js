function solution(s, e) {
  let answer = 0;
  let ch = new Set();
  let dis = new Map();
  let queue = [];

  ch.add(s);
  dis.set(s, 0);
  queue.push(s);
  while (queue.length) {
    let current = queue.shift();
    for (let nx of [current - 1, current + 1, current + 5]) {
      if (nx === e) {
        return dis.get(current) + 1;
      }
      if (nx > 0 && nx < 10001 && !ch.has(nx)) {
        ch.add(nx);
        dis.set(nx, dis.get(current) + 1);
        queue.push(nx);
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));
