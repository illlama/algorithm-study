"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'solution' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING keypad
 */

const makeKeyBoard = (keypad) => {
  let keyBoard = new Map();
  keypad.split("").forEach((key, i) => {
    keyBoard.set(key, [Math.floor(i / 3), i % 3]);
  });
  return keyBoard;
};
const findDistance = (arr1, arr2) =>
  Math.max(Math.abs(arr1[0] - arr2[0]), Math.abs(arr1[1] - arr2[1]));
function solution(s, keypad) {
  let answer = 0;
  let current = [];
  const keyBoard = makeKeyBoard(keypad);
  s.split("").forEach((key, i) => {
    let keyLocation = keyBoard.get(key);
    if (i === 0) {
      console.log(current.length, i);
      current = keyLocation;
    } else if (findDistance(current, keyLocation) === 1) {
      console.log(1);
      answer++;
      current = keyLocation;
    } else if (findDistance(current, keyLocation) === 2) {
      console.log(2);
      answer += 2;
      current = keyLocation;
    }
  });
  return answer;
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const keypad = readLine();

  const result = solution(s, keypad);

  ws.write(result + "\n");

  ws.end();
}
