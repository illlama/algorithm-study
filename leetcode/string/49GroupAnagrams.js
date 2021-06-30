const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = (strs) => {
  let ans = [];
  for (let word of strs) {
    const sortedWord = word.split("").sort().join("");
    ans[sortedWord] = ans[sortedWord] ? [...ans[sortedWord], word] : [word];
  }
  ///[ aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] ]
  ///을 [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]로 바꾸는거 좋다
  return Object.values(ans);
};

console.log(groupAnagrams(strs));
