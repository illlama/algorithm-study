let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

const solution = (arr) => {
  return arr
    .map((v) => {
      let reversedV = Number(v.toString().split("").reverse().join(""));
      if (isPrime(reversedV)) return reversedV;
    })
    .filter((n) => n);
};

const isPrime = (num) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return num === 1 ? false : true;
};

console.log(solution(arr));
